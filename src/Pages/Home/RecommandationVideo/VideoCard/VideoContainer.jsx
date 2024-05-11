


import VideoCard from "./VideoCard"
function VideoContainer(){
    const d=[1,2,4,4,5,6,6,6,6,4,3,4,5]
    return(
        <div className="w-full h-full grid grid-cols-4 px-20  ">
            {d.map((item,index)=>{
                return(
                    <div className="  ">
               <VideoCard></VideoCard>
               </div>
                )
            })}
              
        </div>
    )
}
export default VideoContainer