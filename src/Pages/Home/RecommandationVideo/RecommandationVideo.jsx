
import axios from 'axios';
import React, { useEffect ,useState } from 'react'
import VideoContainer from './VideoCard/VideoContainer'

const RecommandationVideo = ({data }) => {
  

   
  

  return (
    <div className='w-full h-full  '>
        <div className='w-full h-[5%] flex items-center px-10  '>
        <h1 className='text-2xl'>Recommended Videos :</h1>
        </div>

        <div className='w-full h-[600px] overflow-y-auto'>
              <VideoContainer data={data}></VideoContainer>
        </div>
        
        </div>
  )
}

export default RecommandationVideo