
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Progress from "../Pages/Progress/Progress";
import Game from "../Pages/Game/Game";

const MainRoutes ={
    path:"/",
    element:<MainLayout/>,
    children:[
        {
            path:"/Home",
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

    ]
}

export default MainRoutes