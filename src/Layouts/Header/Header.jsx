import { Toolbar } from "@mui/material"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/Context";
import Tooltip from '@mui/material/Tooltip';
import logoLight from '../../assets/logo-light.png'



function Header (){

    const [search ,setSearch]=useState("")

    const navigate =useNavigate()
    function handleClick(e){
      
        console.log(search)
        setSearch("")
    

    }

    const { loginWithRedirect , user,isAuthenticated} = useAuth0();

    const userState =useContext(UserContext)
      
    userState.setUser(user)
    console.log(userState)

     

  const { logout } = useAuth0();

  function HandleProfile(){
    navigate('/UserProfile')
  }

  
    
  



    return (
        <div>
             <div className="w-full h-20 bg-gradient-to-t from-gray-200 via-gray-200 to-slate-400 flex justify-between items-center px-10 ">
                 {/* Header Content goes Here */}
            <div className="">
            <img src={logoLight} alt="logo" style={{height:'80px'}}/>
            </div>
        
              <div className="flex item-center gap-40  ">

              
             


            {isAuthenticated?( <div className="">
              <Tooltip title="User Profile" arrow>
                <Avatar  onClick={HandleProfile} className="hover:cursor-pointer" src={user.picture}></Avatar>
              
                
                
                </Tooltip> </div>  ):(
                
                <div className="">
                  <Tooltip title="Please Log In" arrow>
    <Avatar  src=""></Avatar>
    
    
    
    </Tooltip> </div> )} 
               
            

     

         {isAuthenticated?(
         <div className="bg-slate-700 text-slate-200 rounded-md shadow-xl shadow-purple-300"><button className="px-4 py-2" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button></div>): (<div className=" bg-slate-700  text-slate-200 rounded-md shadow-lg "><button className="px-4 py-2" onClick={() => loginWithRedirect()}>Log In</button></div>)}

            
             </div>
        </div>
        </div>
    )
}

export default Header