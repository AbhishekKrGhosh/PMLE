
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Progress from "../Pages/Progress/Progress";
import Game from "../Pages/Game/Game";
import Settings from "../Pages/Settings/Settings";
import Courses from "../Pages/Courses/Courses";
import IndividualCourses from "../Pages/Courses/IndividualCourses";
import DetailedCourse from "../Pages/Courses/DetailedCourse";
import VideoView from "../Pages/VideoView/VideoView";

const MainRoutes ={
    path:"/",
    element:<MainLayout/>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        }
        ,{
            path:"/Game",
            element:<Game/>
        },
        {
            path:"/progress",
            element:<Progress/>
        },
        {
            path:"/UserProfile",
            element:<UserProfile/>
        },
        {
            path:"/Settings",
            element:<Settings/>
        },
        {
            path:"/Courses",
            element:<Courses/>
        },
        {
            path:'/individualCourses',
            element:<IndividualCourses/>
        },
        {
            path:'/detailedCourse',
            element:<DetailedCourse/>
        },
        {
            path:'/videoView',
            element:<VideoView/>
        }

    ]
}

export default MainRoutes