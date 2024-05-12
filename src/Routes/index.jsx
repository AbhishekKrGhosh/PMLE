import {useRoutes , Navigate} from 'react-router-dom'

import MainRoutes from './MainRoutes'


function AllRoutes() {
    return useRoutes([MainRoutes]);
  };
  
  export default AllRoutes;