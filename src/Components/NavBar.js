import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';


const NavBar = () => {
  return (
    <AppBar sx= {{backgroundColor: 'black' }} position="static"> 
      <Toolbar>
        <Button component={NavLink} style={{ textTransform: "none" }} to="/" exact sx={{color: 'white','&.active': {color: 'yellow',}}}>Home</Button>
        <Button component={NavLink} style={{ textTransform: "none" }} to="/about" exact sx={{color: 'white','&.active': {color: 'yellow',}}}>About</Button>
        <Button component={NavLink} style={{ textTransform: "none" }} to="/portfolio" exact sx={{color: 'white','&.active': {color: 'yellow',}}}>Portfolio</Button>
        <Button component={NavLink} style={{ textTransform: "none" }} to="/contact" exact sx={{color: 'white','&.active': {color: 'yellow',}}}>Contact Me</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
