import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import profilePic from './images/profile-pic.jpeg';


function Profile() {
  const name = "Nahom Alemu!";

  return (
    <Box sx={{ margin: '20px', display: 'flex', alignItems: 'center', gap: '80px',  color: 'black' }}>
      <Box sx={{
        borderRadius: '50%',
        width: '200px', 
        height: '200px', 
        overflow: 'hidden',
        '& > img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }
      }}>
        <img src={profilePic} alt="Profile"/>
      </Box>
      <Typography variant="h4" component="div">Hello, my name is {name}</Typography>
    </Box>
  );
}

export default Profile;