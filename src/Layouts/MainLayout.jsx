
import { Outlet } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Header from './Header/Header';

import SideBar from './Drawer/SideBar';

function MainLayout (){
    return (
       <>
        <div className='relative h-screen w-screen'>
             <Header></Header>
             <SideBar></SideBar>
             <div className='absolute top-20 left-24 mx-10 my-5'>
             <Outlet></Outlet>
             </div>
             
        </div>
     
    </>
        
    )
}
export default MainLayout