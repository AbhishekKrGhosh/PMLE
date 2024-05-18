import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { parseISO, format } from 'date-fns'; // Import parseISO and format from date-fns
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

function IotTable() {
  const { data, isError, error } = useQuery(['Activity'], async () => {
    const response = await axios.get('https://aspirationanalysisserver.onrender.com/posts/iot');
    return response.data;
  });

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Function to format timestamp to a human-readable format
  const formatTimestamp = (timestamp) => {
    const date = parseISO(timestamp);
    const formattedDate = format(date, 'MMMM dd, yyyy');
    const formattedTime = format(date, 'h:mm:ss a');
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1320 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', width: '50%' }}>Date and Time</TableCell>
            <TableCell sx={{ fontWeight: 'bold', width: '50%' }} align="right">Activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {formatTimestamp(row.createdDate)}
              </TableCell>
              <TableCell align="right">{row.userState}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default IotTable;
