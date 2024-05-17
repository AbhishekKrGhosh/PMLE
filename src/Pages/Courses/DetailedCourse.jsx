import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import '@fontsource/poppins'; // Import the Poppins font
import '@fontsource/poppins/400.css'; // Regular font weight
import '@fontsource/poppins/700.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    overflowY: 'scroll',
    maxHeight: 'calc(100vh - 64px)',
    padding: '30px 60px 30px 30px',
    fontFamily: '"Poppins", sans-serif',
  },
  centeredIframe: {
    display: 'block',
    margin: '0 auto',
  },
}));

const getYouTubeVideoId = (url) => {
  const videoIdMatch = url.match(/v=([^&]*)/);
  return videoIdMatch ? videoIdMatch[1] : null;
};

const DetailedCourse = () => {
  const classes = useStyles();
  const [courseTypes, setCourseTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false); // Add state for liked status
  const [likeCount, setLikeCount] = useState(0);
  const [courseTopic, setCourseTopic] = useState(null);

  const location = useLocation();
  const courseId = location.state ? location.state.courseId : null;
  const courseName = location.state ? location.state.courseName : null;

  useEffect(() => {
    const fetchCourseTypes = async () => {
      try {
        const response = await axios.get('https://aspirationanalysisserver.onrender.com/posts/course');
        setCourseTypes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course types:', error);
        setLoading(false);
      }
    };

    const fetchCourseTopic = async () => {
      try {
        const response = await axios.get(`https://aspirationanalysisserver.onrender.com/posts/courseTopic/${courseId}`);
        const topic = response.data;
        setCourseTopic(topic);
        setLikeCount(topic.likeCount || 0);
        setLiked(false);
      } catch (error) {
        console.error('Error fetching course topic:', error);
      }
    };

    fetchCourseTypes();
    if (courseId) {
      fetchCourseTopic();
    }
  }, [courseId]);

  const handleLikeClick = async () => {
    try {
      const updatedLikeCount = liked ? likeCount - 1 : likeCount + 1;
      setLiked(!liked);
      setLikeCount(updatedLikeCount);

      await axios.patch(`https://aspirationanalysisserver.onrender.com/posts/courseTopic/${courseId}`, {
        likeCount: updatedLikeCount,
      });
    } catch (error) {
      console.error('Error updating like count:', error);
    }
  };

  return (
    <div className={classes.root}>
      {loading ? (
        <Typography variant="body1" style={{ fontFamily: '"Poppins", sans-serif' }}>
          Loading...
        </Typography>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h2" mb={3} style={{ fontFamily: '"Poetsen One", sans-serif' }}>
              {courseName}
            </Typography>
            <div style={{ marginLeft: 'auto', cursor: 'pointer' }} onClick={handleLikeClick}>
              {liked ? (
                <ThumbUpIcon style={{ fontSize: '40px', color: 'blue' }} />
              ) : (
                <ThumbUpOffAltIcon style={{ fontSize: '40px' }} />
              )}
              <Typography variant="body1" style={{ display: 'inline', marginLeft: '10px' }}>
                {likeCount}
              </Typography>
            </div>
          </div>
          <Grid container spacing={2}>
            {courseTypes
              .filter((course) => course.courseTopicId === courseId)
              .map((course) => (
                <Grid item xs={12} sm={12} md={12} key={course._id}>
                  <div style={{ margin: '20px 0' }}>
                    <Typography variant="h3" style={{ fontFamily: '"Poppins", sans-serif' }}>
                      {course.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ fontFamily: '"Poppins", sans-serif', margin: '20px 0 30px 0' }}
                    >
                      {course.description}
                    </Typography>
                    <iframe
                      width="500"
                      height="315"
                      src={`https://www.youtube.com/embed/${getYouTubeVideoId(course.videoUrl)}`}
                      title={course.videoTitle}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className={classes.centeredIframe}
                    ></iframe>
                  </div>
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default DetailedCourse;
