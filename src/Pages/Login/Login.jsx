// import { useState } from "react"

// function Login ({onChange}){

//     const [check , setCheck]=useState(false)

//     function handleClick(e){
//        e.preventDefault()
//       if(check){
//         setCheck(false)
//       }

//       else{
//         setCheck(true)
//       }

//       onChange(check)


//     }



//       return(
//       <div className=" W-full h-screen bg-blue-400 flex justify-center items-center">
            
//             <div className="w-1/3 h-1/2 bg-slate-200 flex justify-center items-center rounded-md shadow-slate-400 shadow-lg">

//                 <form className="flex flex-col  w-[80%] h-[90%] items-center justify-evenly ">
//                     <label className="text-2xl font-semibold">Welcome </label>
//                     <input className="w-full h-14 border-2 border-black px-4 rounded-md" type="text" placeholder="Email"></input>
//                     <input className="w-full h-14 border-2 border-black px-4  rounded-md" type='text' placeholder="Password"></input>
//                     <button onClick={handleClick} className=" w-24 h-10 bg-purple-400 rounded-md">Login</button>

//                 </form>

                   

//             </div>



//       </div>   
//       )
// }

// export default Login


// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const LoginButton = () => {
//   const { loginWithRedirect , user,isAuthenticated} = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default LoginButton;