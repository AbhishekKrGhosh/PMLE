import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';

const DetailedCourse = () => {
  const [courseTypes, setCourseTypes] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const location = useLocation();

  useEffect(() => {
    const fetchCourseTypes = async () => {
      try {
        const response = await axios.get('https://aspirationanalysisserver.onrender.com/posts/course');
        setCourseTypes(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching course types:', error);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchCourseTypes();
  }, []);

  const courseId = location.state ? location.state.courseId : null;
  const courseName = location.state ? location.state.courseName : null;

  return (
    <div style={{ overflowY: 'scroll', maxHeight: 'calc(100vh - 64px)', padding:'30px'}}>
      {loading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : (
        <>
          <Typography variant="h3" mb={3}>{courseName}</Typography>
          <Grid container spacing={2}>
            {courseTypes
              .filter(course => course.courseTopicId === courseId)
              .map(course => (
                <Grid item xs={12} sm={12} md={10} key={course._id}>
                  <div style={{marginBottom:'20px'}}>
                    <Typography variant="h5">{course.title}</Typography>
                    <Typography variant="body1" style={{marginBottom:'10px'}}>{course.description}</Typography>
                    <iframe
                      width="500"
                      height="315"
                      src={`https://www.youtube.com/embed/${course.videoUrl.split('v=')[1]}`}
                      title={course.videoTitle}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </div>
  );
}

export default DetailedCourse;
