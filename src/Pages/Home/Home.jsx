
import ImageCoursel from "./ImageCoursel/ImageCoursel"
import RecommandationVideo from "./RecommandationVideo/RecommandationVideo"
import { useQuery } from 'react-query';
import { useEffect } from "react";
import axios from "axios";
function Home(){





    const {data}=useQuery(['video'],async () =>{
       const response= await axios.get('https://aspirationanalysisserver.onrender.com/posts/course')
       return response.data
    })

   console.log(data)

    return (
        <div className="w-full h-full  ">
            
            <ImageCoursel></ImageCoursel>
            <RecommandationVideo data={data}></RecommandationVideo>

        </div>
    )
}

export default Home