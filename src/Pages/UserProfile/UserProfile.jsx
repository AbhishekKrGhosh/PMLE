
import { useContext, useState } from "react";
import { UserContext } from "../../Context/Context"

import UserNamePlate from "./UserNamePlate/UserNamePlate";
import MyCalendar from "./Calendar/MyCalendar";

function UserProfile(){

    const [userProfile ,setUserProfile] =useState()

    const userState = useContext(UserContext)
    
    console.log(userState.user)

    return (
        <div className=" h-full ">
            <div className="w-[1477px] h-full px-3 py-10 flex justify-evenly ">

              <UserNamePlate></UserNamePlate>
                <MyCalendar></MyCalendar>

            </div>

        </div>
    )
}
export default UserProfile