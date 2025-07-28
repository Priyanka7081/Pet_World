import React from 'react'
import {createTheme, ThemeProvider} from "@mui/material/styles"

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './Components/Header';
import MainFeaturedPost from './Components/MainFeaturedPost';
import { mainFeaturedPost } from './data';
import FeaturedPet from './Components/FeaturedPet';
import Grid from '@mui/material/Grid';
import Footer from './Components/Footer';

const theme = createTheme({
  fontFamily: `"Trebuchet MS", "Helvetica", "Arial", sans-serif`,
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500

})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="lg">

      <Header />
      <MainFeaturedPost mainFeaturedPost={mainFeaturedPost} />
      
      <Grid container spacing={8}>
         <FeaturedPet />
         <FeaturedPet />
      </Grid>

     
     
    </Container>
     <Footer title="Pet Adoption Center"
      description="Every Pet deserves a good Home..." />

  </ThemeProvider>
  );
  
  
};

export default App;