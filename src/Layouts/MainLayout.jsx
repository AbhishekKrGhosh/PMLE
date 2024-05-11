
import { Outlet } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Header from './Header/Header';

import SideBar from './Drawer/SideBar';
import Footer from './Footer/Footer';


function MainLayout() {
    return (
      <div className="relative  w-full">
        <Header />
        <div className="flex">
          <SideBar />
          <div className="flex-1">
            <div className="w-full h-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MainLayout;
  

