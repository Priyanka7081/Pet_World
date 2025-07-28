
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <>
      {/* Top toolbar with centered logo + title */}
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 2,
        }}
      >
        <img src={logo} alt="Logo" style={{ height: '65px', marginBottom: '5px' }} />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
        >
          
        </Typography>
      </Toolbar>

      {/* Navigation toolbar */}
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        <a href="#">Option1</a>
        <a href="#">Option2</a>
        <a href="#">Option3</a>
        <a href="#">Option4</a>
        <a href="#">Option5</a>
      </Toolbar>
    </>
  );
};

export default Header;
