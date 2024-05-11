
import ImageCoursel from "./ImageCoursel/ImageCoursel"
import RecommandationVideo from "./RecommandationVideo/RecommandationVideo"
function Home(){
    return (
        <div className="w-full h-full  ">
            
            <ImageCoursel></ImageCoursel>
            <RecommandationVideo></RecommandationVideo>

        </div>
    )
}

export default Home