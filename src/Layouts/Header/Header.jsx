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
            <svg width="130" height="52" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect fill="#EC1D24" width="100%" height="100%"></rect><path fill="#FEFEFE" d="M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"></path><path fill="#EC1D24" d="M0 0h30v52H0z"></path><path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path></svg>
            </div>
        
              <div className="flex item-center gap-40  ">

              <div>
                <form className=" flex justify-end  items-center">
                    <input value={search} onChange={(e)=>{setSearch(e.target.value)}} type="text" placeholder="Search for Videos"  className="px-1 py-2 w-[520px] rounded-md text-slate-700 shadow-sm shadow-slate-700"></input>
                    <div className=" py-2 rounded-md px-1 ml-2 ">
                    <SearchRoundedIcon onClick={handleClick} fontSize="medium" className="mx-2hover:cursor-pointer hover:scale-125 duration-75  "></SearchRoundedIcon>
                    </div>
                </form>
              </div>
             


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