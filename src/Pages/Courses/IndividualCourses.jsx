import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const IndividualCourses = () => {
  const [courseTypes, setCourseTypes] = useState([]);
  const location = useLocation(); // Use useLocation hook to access location state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseTypes = async () => {
      try {
        const response = await axios.get('https://aspirationanalysisserver.onrender.com/posts/courseTopic');
        setCourseTypes(response.data);
      } catch (error) {
        console.error('Error fetching course types:', error);
      }
    };

    fetchCourseTypes();
  }, []);
  const handleDetailedCourse = (courseId, courseName) => {
    navigate(`/detailedCourse`, { state: { courseId, courseName } });
  };
  

  // Access courseType from location state
  const courseType = location.state ? location.state.courseType : null;

  return (
    <Box p={3} width="100vw">
      <Typography variant="h3" mb={3}>Choose your favorite Course</Typography>
      <Grid container spacing={2}>
        {courseTypes
          .filter(course => course.courseType === courseType) // Filter based on courseType
          .map(course => (
            <Grid item xs={12} sm={6} md={4} key={course._id}>
              <Box bgcolor="primary.main" color="white" p={2} textAlign="center" width="100%" onClick={() => handleDetailedCourse(course._id, course.courseName)} >
                <Typography variant="h5">{course.courseName}</Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default IndividualCourses;
