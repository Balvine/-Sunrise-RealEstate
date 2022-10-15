import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
            
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SUNRISE ESTATE
          </Typography>
          
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Gallery</Button>
          <Button color="inherit">New Projects</Button>
          <Button color="inherit">Contacts</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
