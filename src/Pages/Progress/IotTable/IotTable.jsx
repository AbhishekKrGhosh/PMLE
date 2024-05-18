

import { useState ,useEffect } from 'react';
import { useQuery } from 'react-query';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}







const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

 function IotTable() {


  
    const {data}=useQuery(['Activity'],async () =>{
      const response= await axios.get('https://aspirationanalysisserver.onrender.com/posts/iot')
      return response.data
   })

   console.log(data)

   const formatTimestamp = (timestamp) => {
    const date = parseISO(timestamp);
    const formattedDate = format(date, 'yyyy-MM-dd');
    const formattedTime = format(date, 'HH:mm:ss');
    return { formattedDate, formattedTime };
  };


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1320}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Date </TableCell>
           
            <TableCell sx={{ fontWeight: 'bold' }}  align="right">Activity</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row ,index) => (
            
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.createdDate}
              </TableCell>
              <TableCell align="right">{row.userState}</TableCell>
   
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default IotTable