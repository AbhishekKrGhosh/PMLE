
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import { Stack } from '@mui/material';
function SideBar (){

    return (
        <div className="w-20 h-screen bg-slate-300 flex flex-col justify-between">
        {/* Side Bar Content Goes Here */}
        <Stack direction={'column'} gap={5} className='px-5 py-6'> 
        <HomeIcon fontSize='large'></HomeIcon>
        <SportsEsportsIcon fontSize='large'></SportsEsportsIcon>
        <AnalyticsIcon fontSize='large'></AnalyticsIcon>
        <AccountBoxIcon fontSize='large'></AccountBoxIcon>
       
        </Stack>
        <Stack className='px-5 py-4'>
        <SettingsIcon fontSize='large'></SettingsIcon>
        </Stack>
            
        </div>
    )
}
export default SideBar