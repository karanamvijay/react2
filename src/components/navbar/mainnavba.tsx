import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
export const Mainnavbar: React.FC<{}> = () => {
  return <>
    <Box sx={{ gridGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <center>
              E-commerce website from React (K.VIJAYKUMAR)
            </center>
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Add to Cart 🛒</Button>
        </Toolbar>
      </AppBar>
    </Box>
  </>
};

