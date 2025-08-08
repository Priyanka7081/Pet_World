
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = ({ allCategories }) => {
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
        {allCategories.map(category => {
          return (

            <Link key={category?.url} to={category?.url}>
              {category?.title}
            </Link>
          );

        })}


      </Toolbar>
    </>
  );
};

export default Header;
