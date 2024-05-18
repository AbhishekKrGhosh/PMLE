import React from 'react'
import { useNavigate } from 'react-router-dom'

const VideoCard = ({ videoUrl, videoTitle, contentId }) => {
  const navigate = useNavigate()

  const getYouTubeVideoId = (url) => {
    const videoIdMatch = url.match(/v=([^&]*)/)
    return videoIdMatch ? videoIdMatch[1] : null
  }

  const handleClick = () => {
    navigate('/videoView', { state: { videoUrl, videoTitle, contentId } })
  }

  return (
    <div 
      className="rounded-lg shadow-lg w-[250px] h-[300px] mt-10 mb-10 bg-slate-200 hover:scale-110 delay-75 hover:cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative">
        <iframe
          width="250"
          height="150"
          src={`https://www.youtube.com/embed/${getYouTubeVideoId(videoUrl)}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div 
          className="absolute inset-0"
          onClick={handleClick}
        ></div>
      </div>
      <p className="text-wrap text-semibold pl-3 pt-3 pr-3 overflow-hidden">{videoTitle}</p>
    </div>
  )
}

export default VideoCard
