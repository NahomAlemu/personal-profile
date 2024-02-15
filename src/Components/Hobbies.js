import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function Hobbies() {
  return (
    <Box sx={{ marginTop: '60px', padding: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Hobbies
      </Typography>
      <List>
        <ListItem>
          <Typography variant="body1">My Hobby 1</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">My Hobby 2</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">My Hobby 3</Typography>
        </ListItem>
      </List>
    </Box>
  );
}

export default Hobbies;
