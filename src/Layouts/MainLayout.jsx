
import { Outlet } from 'react-router-dom'

function MainLayout (){
    return (
       <>
        <div>
            <h1>Main</h1>
        </div>

          <Outlet></Outlet>
       
       
       </>
        
    )
}
export default MainLayout