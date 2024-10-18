import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Supply House
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/schedule">
        View Schedules
      </Button>
    </Toolbar>
  </AppBar>
  )
}   

export default NavBar