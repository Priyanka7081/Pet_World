

import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const MainFeaturedPost = ({ mainFeaturedPost }) => {
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${mainFeaturedPost.image})`,
        height: { xs: 250, md: 300 }, // ✅ Optional height
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, .3)',
        }}
      />

      {/* Text Content */}
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {mainFeaturedPost.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {mainFeaturedPost.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MainFeaturedPost;
