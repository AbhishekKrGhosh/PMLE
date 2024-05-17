import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Grid } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const IndividualCourses = () => {
  const [courseTypes, setCourseTypes] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseTypes = async () => {
      try {
        const response = await axios.get('https://aspirationanalysisserver.onrender.com/posts/courseTopic');
        // Sort the courses by likeCount in descending order
        const sortedCourses = response.data.sort((a, b) => b.likeCount - a.likeCount);
        setCourseTypes(sortedCourses);
      } catch (error) {
        console.error('Error fetching course types:', error);
      }
    };

    fetchCourseTypes();
  }, []);

  const handleDetailedCourse = (courseId, courseName) => {
    navigate(`/detailedCourse`, { state: { courseId, courseName } });
  };

  const courseType = location.state ? location.state.courseType : null;

  return (
    <Box p={3} width="100vw">
      <Typography variant="h3" mb={3}>Choose your favorite Course</Typography>
      <Grid container spacing={2}>
        {courseTypes
          .filter(course => course.courseType === courseType)
          .map(course => (
            <Grid item xs={12} sm={6} md={4} key={course._id}>
              <Box
                bgcolor="primary.main"
                color="white"
                p={2}
                textAlign="center"
                width="100%"
                onClick={() => handleDetailedCourse(course._id, course.courseName)}
              >
                <Typography variant="h5">{course.courseName}</Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default IndividualCourses;
