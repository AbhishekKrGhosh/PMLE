
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

const MainRoutes ={
    path:"/",
    element:<MainLayout/>,
    children:[
        {
            path:"/Home",
            element:<Home></Home>
        }

    ]
}

export default MainRoutes