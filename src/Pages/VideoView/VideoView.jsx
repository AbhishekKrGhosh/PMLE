import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import axios from 'axios'
import { UserContext } from '../../Context/Context'

const VideoView = () => {
  const location = useLocation()
  const { videoUrl, videoTitle, contentId } = location.state

  const UserDetail = useContext(UserContext)
  const email = UserDetail.user?.email

  const getYouTubeVideoId = (url) => {
    const videoIdMatch = url.match(/v=([^&]*)/)
    return videoIdMatch ? videoIdMatch[1] : null
  }

  const [expressions, setExpressions] = useState([])
  const [expressionList, setExpressionList] = useState([])

  useEffect(() => {
    const mlModel = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/predict`)
        setExpressions(data.predicted_results)
        console.log(data.predicted_results)
      } catch (error) {
        console.log(error)
      }
    }

    // Call mlModel initially
    mlModel()

    // Set interval to call mlModel every 2 minutes
    const interval = setInterval(mlModel, 120000)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (expressions.length > 0) {
      const expressionCounts = expressions.reduce((acc, expression) => {
        acc[expression] = (acc[expression] || 0) + 1
        return acc
      }, {})

      const maxCount = Math.max(...Object.values(expressionCounts))
      const mostFrequentExpressions = Object.keys(expressionCounts).filter(
        (key) => expressionCounts[key] === maxCount
      )

      setExpressionList(prev => [...prev, ...mostFrequentExpressions])
      console.log('Most Frequent Expressions:', expressionList)
    }
  }, [expressions])

  useEffect(() => {
    const sendPostRequest = async () => {
      try {
        await axios.post('https://aspirationanalysisserver.onrender.com/posts/learnerData', {
          email,
          contentId,
          expressionList,
        })
        console.log('Data sent:', { email, contentId, expressionList })
      } catch (error) {
        console.error('Failed to send data:', error)
      }
    }

    // Set interval to call sendPostRequest every 5 minutes
    const interval = setInterval(sendPostRequest, 300000)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [email])

  return (
    <Box p={3} width="100vw" height="100vh" display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" component="h1" mb={2}>
        {videoTitle}
      </Typography>
      <iframe
        width="90%"
        height="80%"
        src={`https://www.youtube.com/embed/${getYouTubeVideoId(videoUrl)}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Typography variant="h6" component="h2" mt={2}>
        Most Frequent Expressions: {expressionList.join(', ')}
      </Typography>
    </Box>
  )
}

export default VideoView
