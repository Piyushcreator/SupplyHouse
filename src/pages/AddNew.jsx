import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { serverapi } from '../common/staticData';

const AddNew = (props) => {
    const { handleClose, open, rows, setRows } = props;
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleDateChange = (e) => setDate(e.target.value);
    const handleStartTimeChange = (e) => setStartTime(e.target.value);
    const handleEndTimeChange = (e) => setEndTime(e.target.value);


    const convertTo12HourFormat = (time) => {
        let [hours, minutes] = time.split(':');
        let period = 'AM';
        hours = parseInt(hours);
        if (hours >= 12) {
            period = 'PM';
            if (hours > 12) hours -= 12;
        }
        if (hours === 0) {
            hours = 12;
        }
        return `${hours}:${minutes} ${period}`;
    };
    const handleSubmit = () => {

        const arrObj = [...rows];
        let index = rows.length + 1;
        arrObj.push({ id: index, date, startTime: convertTo12HourFormat(startTime), endTime: convertTo12HourFormat(endTime) })
        setRows(arrObj);
        handleClose();
    }

    const postData = async () => {
        try {
            const jsonObj = {
                date, startTime, endTime
            }
            const res = await axios.post(
                serverapi+"updateschedule",
                jsonObj,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <Dialog onClose={handleClose} open={open}
            aria-labelledby="alert-dialog-title"
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    minHeight: '400px',
                },
            }}

        >
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 400 }}>Custom Dialog Title</Typography>
                <IconButton onClick={handleClose} aria-label="close">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <form>
                    <Typography>Date</Typography>
                    <TextField
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                        fullWidth
                        margin="normal"
                    />
                    <Typography>Start Time</Typography>
                    <TextField
                        type="time"
                        value={startTime}
                        onChange={handleStartTimeChange}
                        fullWidth
                        margin="normal"
                    />
                    <Typography>End Time</Typography>
                    <TextField
                        type="time"
                        value={endTime}
                        onChange={handleEndTimeChange}
                        fullWidth
                        margin="normal"

                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button variant="contained" onClick={handleSubmit}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddNew