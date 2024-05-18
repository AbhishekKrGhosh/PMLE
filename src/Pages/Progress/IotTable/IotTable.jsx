import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

const GetActivityData = async () => {
  const response = await axios.get('https://aspirationanalysisserver.onrender.com/posts/iot');
  return response.data;
};

const IotTable = () => {
  const { data, error, isLoading } = useQuery('Activity', GetActivityData);



  const formatTimestamp = (timestamp) => {
    if (!timestamp) return { formattedDate: 'N/A', formattedTime: 'N/A' };
    try {
      const date = parseISO(timestamp);
      const formattedDate = format(date, 'yyyy-MM-dd');
      const formattedTime = format(date, 'HH:mm:ss');
      return { formattedDate, formattedTime };
    } catch (e) {
      return { formattedDate: 'Invalid Date', formattedTime: 'Invalid Time' };
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1320 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}}>Date</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Time</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">Activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => {
            const { formattedDate, formattedTime } = formatTimestamp(row.createdDate);
            return (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {formattedDate}
                </TableCell>
                <TableCell>{formattedTime}</TableCell>
                <TableCell align="right">{row.userState}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IotTable;


