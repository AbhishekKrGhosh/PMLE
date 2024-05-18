
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
        <div className=" h-full overflow-y-visible " style={{width: '100vw',
        overflowY: 'scroll',
        maxHeight: 'calc(100vh - 64px)'}}>
            <div className="w-[1477px] min-h-full px-3 py-8 flex-col overflow-y-visible ">
             <div className="flex  justify-evenly  ">
              <UserNamePlate></UserNamePlate>
                <MyCalendar></MyCalendar>
                </div>
                

            </div>
            

        </div>
    )
}
export default UserProfile