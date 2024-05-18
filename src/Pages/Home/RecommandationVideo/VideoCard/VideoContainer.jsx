import React, { useEffect, useState, useContext } from "react";
import VideoCard from "./VideoCard";
import axios from "axios";
import _ from 'lodash';
import { UserContext } from '../../../../Context/Context'

function VideoContainer({ data }) {
  const UserDetail = useContext(UserContext)
  const userEmail = UserDetail.user?.email
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchApiLearnerData = async () => {
      try {
        const response = await axios.get('https://aspirationanalysisserver.onrender.com/posts/learnerData');
        const learnerData = response.data;

        // Filter data by user email
        const userLearnerData = learnerData.filter((item) => item.email === userEmail);
        console.log("Filtered learner data:", userLearnerData);

        // Map to store the latest entry for each contentId
        const latestEntries = new Map();

        // Populate the map with the latest entries for each contentId
        userLearnerData.forEach((item) => {
          const existingItem = latestEntries.get(item.contentId);
          if (!existingItem || new Date(item.createdDate) > new Date(existingItem.createdDate)) {
            latestEntries.set(item.contentId, item);
          }
        });

        // Get list of contentIds to remove based on bad expressions
        const contentIdsToRemove = [];
        latestEntries.forEach((item) => {
          const expressionCounts = item.expressionList.reduce((acc, expression) => {
            acc[expression] = (acc[expression] || 0) + 1;
            return acc;
          }, {});

          const mostFrequentExpression = Object.keys(expressionCounts).reduce((a, b) =>
            expressionCounts[a] > expressionCounts[b] ? a : b
          );

          // Check if the most frequent expression is in the list of bad expressions
          if (['sad', 'fear', 'disgust', 'anger'].includes(mostFrequentExpression)) {
            contentIdsToRemove.push(item.contentId);
          }
        });

        // Filter out videos with matching contentIds
        let filteredVideos = data.filter((item) => !contentIdsToRemove.includes(item._id));

        // Shuffle the videos
        filteredVideos = _.shuffle(filteredVideos);

        // Limit to 12 videos
        filteredVideos = filteredVideos.slice(0, 12);

        setFilteredData(filteredVideos);
      } catch (error) {
        console.error('Error fetching learner data:', error);
      }
    };

    fetchApiLearnerData();
  }, [data]);

  return (
    <div className="w-full h-full grid grid-cols-4 px-20">
      {filteredData.map((item) => (
        <div key={item._id}>
          <VideoCard videoUrl={item.videoUrl} videoTitle={item.videoTitle} contentId={item._id}></VideoCard>
        </div>
      ))}
    </div>
  );
}

export default VideoContainer;
