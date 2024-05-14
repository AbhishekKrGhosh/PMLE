
import { useContext, useState } from "react";
import { UserContext } from "../../Context/Context"

import UserNamePlate from "./UserNamePlate/UserNamePlate";
import MyCalendar from "./Calendar/MyCalendar";
import UserActivityGraph from "./UserActivityGraph/UserActivityGraph";

function UserProfile(){

    const [userProfile ,setUserProfile] =useState()

    const userState = useContext(UserContext)
    
    console.log(userState.user)

    return (
        <div className=" h-full overflow-y-visible ">
            <div className="w-[1477px] min-h-full px-3 py-10 flex-col overflow-y-visible ">
             <div className="flex  justify-evenly  ">
              <UserNamePlate></UserNamePlate>
                <MyCalendar></MyCalendar>
                </div>
                 <div className="flex justify-center px-10 mt-3">
                <UserActivityGraph></UserActivityGraph>
                </div>
                

            </div>
            

        </div>
    )
}
export default UserProfile