import { Button, Grid2, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import { JsonData } from '../assets/Data';
import AddNew from './AddNew';
import axios from 'axios';
import { serverapi } from '../common/staticData';

const View = () => {
    const [rows,setRows] = useState(JsonData);
    const [open,setOpen] = useState(false);
    const handleClose =()=>{
        setOpen(false);
    }
    const handleClick=()=>{
        setOpen(true);
    }

    const getData = async() =>{
        try {
           const res= await axios.get(serverapi+"getallschedule") 
           if (res && res.length>0){
            setRows(res);
           }
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <section>
        <Grid2 container justifyContent={"center"}>
        <Grid2 display="flex" item size={11} marginTop={"20px"} justifyContent="space-between" >
            <Typography variant='h5' sx={{fontWeight:400, marginLeft:"30px"}}>Upcomming Schedules</Typography>
            <Button variant='contained' sx={{float:"right"}} onClick={handleClick}>Add New</Button>
            </Grid2>
<Grid2 display="flex" item size={10} marginTop={"30px"}>
            <TableContainer>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell >Id</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Start Time</TableCell>   
            <TableCell align="right">End Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.startTime}</TableCell>
              <TableCell align="right">{row.endTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid2>
        </Grid2>
        <AddNew handleClose={handleClose} open={open} rows={rows} setRows={setRows}/>
    </section>
  )
}

export default View