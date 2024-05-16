import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const [courseTypes, setCourseTypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseTypes = async () => {
      try {
        const response = await axios.get('https://aspirationanalysisserver.onrender.com/posts/courseType');
        setCourseTypes(response.data);
      } catch (error) {
        console.error('Error fetching course types:', error);
      }
    };

    fetchCourseTypes();
  }, []);

  const handleIndividualCourse = (courseType) => {
    navigate(`/individualCourses`, { state: { courseType } });
  };

  return (
    <Box p={3} width="100vw">
      <Typography variant="h3" mb={3}>Courses</Typography>
      <Grid container spacing={2}>
        {courseTypes
          .filter(course => course.courseFor === 'Computer Science')
          .map(course => (
            <Grid item xs={12} sm={6} md={4} key={course._id}>
              <Box
                bgcolor="primary.main"
                onClick={() => handleIndividualCourse(course.courseType)}
                color="white"
                p={2}
                textAlign="center"
                width="100%"
                style={{ cursor: 'pointer' }}
              >
                <Typography variant="h5">{course.courseType}</Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default Courses;
