
import { useContext , useState } from "react"
import { UserContext } from "../../../Context/Context"

function UserNamePlate(){
   
     const UserPlate =useContext(UserContext)
      


    return (

        <div className="w-[65%] h-[45%]  px-10 py-10 flex gap-4 rounded-md bg-slate-200 shadow-xl shadow-slate-400 ">
            <div className="w-[35%] h-full border-r-2 border-black flex justify-center flex-col items-center gap-3 ">
                <img className="w-[55%] rounded-full" src={UserPlate.user?.picture}></img>
                <h1 className="text-2xl font-sans">{UserPlate.user?.name}</h1>
            </div>

            <div className="w-[65%] h-full ">

                <div className="flex gap-3 py-1">
                <label className="text-xl">First Name :</label>
                <h1 className="text-xl font-medium">{UserPlate.user?.given_name}</h1>
                </div>

                <div className="flex gap-3 py-1">
                <label className="text-xl">Last Name :</label>
                <h1 className="text-xl font-medium">{UserPlate.user?.family_name}</h1>
                </div>


                <div className="flex gap-3 py-1">
                <label className="text-xl">Email :</label>
                <h1 className="text-xl font-medium">{UserPlate.user?.email}</h1>
                </div>

                <div className="flex gap-3 py-1">
                <label className="text-xl">UserName :</label>
                <h1 className="text-xl font-medium">{UserPlate.user?.nickname}</h1>
                </div>


            </div>

        </div>


    )
}

export default UserNamePlate