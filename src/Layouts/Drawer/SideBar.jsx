
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, Stack } from '@mui/material';
import { blue, purple } from '@mui/material/colors';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useNavigate } from 'react-router-dom';


function SideBar (){
   


    const navigate = useNavigate();
    function handleHome(){
       navigate('/')
       
       
    }
    function handleGame(){
        navigate('/Game')
       
     }
     function handleProgress(){
        navigate('/Progress')
     }
     function handleSettings(){
        navigate('/Settings')
     }
     function handleUserProfile(){

        navigate('/UserProfile')
     }
     function handleCourses(){
        navigate('/Courses')
     }

   



    return (
        <div className="w-14 h-screen bg-gradient-to-b from-zinc-100 via-gray-200 to-zinc-400 flex flex-col justify-start gap-60  border-gray-700 border-t-[1px]">
        {/* Side Bar Content Goes Here */}
        <Stack direction={'column'} gap={5} className='px-2 py-6'> 
        <HomeIcon className='hover:cursor-pointer hover:scale-125 duration-75 hover:rounded-md   hover:shadow-lg hover:shadow-slate-500 ' fontSize='large' sx={{color:'#003C43'}} onClick={handleHome}>

        </HomeIcon>
        <AssessmentIcon className='hover:cursor-pointer hover:scale-125 duration-75 hover:rounded-md  hover:shadow-lg hover:shadow-slate-500'  fontSize='large' sx={{color: '#8644A2'}} onClick={handleCourses}></AssessmentIcon>
        <SportsEsportsIcon className='hover:cursor-pointer hover:scale-125 duration-75 hover:rounded-md hover:shadow-lg hover:shadow-slate-500'  fontSize='large' sx={{color: '#5AB2FF'}} onClick={handleGame}></SportsEsportsIcon>
       
        <AnalyticsIcon  className='hover:cursor-pointer hover:scale-125 duration-75 hover:rounded-md  hover:shadow-lg hover:shadow-slate-500' fontSize='large' sx={{color: '#FF8A08'}} onClick={handleProgress} ></AnalyticsIcon>
        <AccountBoxIcon  className='hover:cursor-pointer hover:scale-125 duration-75 hover:rounded-md  hover:shadow-lg hover:shadow-slate-500' fontSize='large' sx={{color:'#C65BCF'}} onClick={handleUserProfile}></AccountBoxIcon>
       
        </Stack>
        <Stack className='px-2 py-4 '>
        <SettingsIcon  className='hover:cursor-pointer hover:scale-125 duration-75 hover:rounded-md  hover:shadow-lg hover:shadow-slate-500' fontSize='large' onClick={handleSettings} >
        
        </SettingsIcon>
        </Stack>
            
        </div>
    )
}
export default SideBar