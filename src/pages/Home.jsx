
import Grid from '@mui/material/Grid2';
import React, { useEffect, useState } from 'react'
import avatar from '../assets/images/1.jpg'
import { Avatar, Box, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EmailIcon from '@mui/icons-material/Email';
import { JsonData, weekScheduleObj } from '../assets/Data';

const isSameDate = (date1, date2) => {
  return date1.getFullYear() === date2.getFullYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate();
}
const Home = () => {
  const [currentSchedule, setCurrentSchedule] = useState({});

  useEffect(()=>{
    const obj= JsonData.find((item) => {
      return isSameDate(new Date(item.date), new Date());
    });
    setCurrentSchedule(obj);
  },[])

  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      sx={{ height: '100vh' }}
    >
      <Grid className = "maingrid" item size={6} sx={{  backgroundColor: "#f2dbd5" }}>
        <Grid display="flex" flexDirection="column" item size={4} alignItems="center">
          <Avatar src={avatar} sx={{ width: 100, height: 100 }} />
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            Questions?
          </Typography>
          <Typography textAlign="center">
            Our Customer Support will be opening late today. We apologize for any inconvenience.
          </Typography>
        </Grid>
      </Grid>
      <Grid className = "maingrid" item size={6} sx={{  backgroundColor: "#d5e8f2" }}>
        <Grid display="flex" flexDirection="column" item size={3}>
          <Box display="flex" alignItems="center" >
            <CallIcon fontSize='large' sx={{ marginRight: 1 }} />
            <Box>
              <Typography><span style={{ fontWeight: 'bold', fontSize: "18px", color: "#94acb3" }}>Call</span> 888-551-7600</Typography>
              <Typography>Available 8am</Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center">
            <ChatIcon fontSize='large' sx={{ marginRight: 1 }} />
            <Box>
              <Typography>
                <span style={{ fontWeight: 'bold', fontSize: "18px", color: "#94acb3" }}>Text</span> 888-551-7600
              </Typography>
              <Typography>
                Available 8am
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center">
            <QuestionAnswerIcon fontSize='large' sx={{ marginRight: 1 }} />
            <Box>
              <Typography sx={{ fontWeight: 'bold', fontSize: "18px", color: "#94acb3" }}>
                Live Chat
              </Typography>
              <Typography>
                Available 8am
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center">
            <EmailIcon fontSize='large' sx={{ marginRight: 1 }} />
            <Box>
              <Typography sx={{ fontWeight: 'bold', fontSize: "18px", color: "#169cc4" }}>
                Email
              </Typography>
              <Typography>
                Response by Sun
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid className = "maingrid" item size={6} sx={{  backgroundColor: "#f2dbd5"}}>
        <Grid display="flex" flexDirection="column" item size={3} marginLeft={"90px"}>
       {
        currentSchedule &&(<>
         <Typography variant='body1' color='red' sx={{ fontWeight: 'bold' }}>
        Special Hours
      </Typography>
      <Typography variant='body1' color='red'>
        {currentSchedule.startTime} - {currentSchedule.endTime}
      </Typography>
        </>)
       }
          {weekScheduleObj.map((item, index) => (
            <div key={index}>
          <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
            {item.daydata}
          </Typography>
            <Typography variant='body1'>
              {item.startTime} - {item.endTime}
            </Typography>
          </div>))}
      
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home