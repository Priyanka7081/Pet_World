import React, { useEffect } from 'react'
import {createTheme, ThemeProvider} from "@mui/material/styles"

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './Components/Header';
import MainFeaturedPost from './Components/MainFeaturedPost';
import { mainFeaturedPost } from './data';
import FeaturedPet from './Components/FeaturedPet';
import Grid from '@mui/material/Grid';
import Footer from './Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategories } from './redux/actions/categories';

const theme = createTheme({
  fontFamily: `"Trebuchet MS", "Helvetica", "Arial", sans-serif`,
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500

})

const App = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state)=> state.categories.allCategories);
  console.log({allCategories});
  

  useEffect(()=>{
    fetchAllCategories({dispatch})
  },[]);
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