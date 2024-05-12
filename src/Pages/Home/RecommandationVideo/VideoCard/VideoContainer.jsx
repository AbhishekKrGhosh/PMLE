


import VideoCard from "./VideoCard"
function VideoContainer({data}){
   
   
    return(
        <div className="w-full h-full grid grid-cols-4 px-20  ">
            {data?.map((item,index)=>{
                return(
                    <div key={item._id}>
               <VideoCard videoTitle={item.videoTitle} ></VideoCard>
               </div>
                )
            })}
              
        </div>
    )
}
export default VideoContainer