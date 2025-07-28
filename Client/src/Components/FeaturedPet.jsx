import React from 'react'

import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'


const FeaturedPet = () => {
  return <>
  <Grid item xs={12} md={6}>
    <Card sx={{
        display: 'flex'
    }}>
        <CardContent sx={{flex: 1, justifyContent:'center',alignItems:'center'}}>
            <Typography component="h2" variant='h4'>
                Bruno
            </Typography>
             <Typography  variant='subtitle1' color='text.secondary'>
                Breed- Husky
            </Typography>
              <Typography  variant='subtitle1' color='text.secondary'>
                Category- Dogs
            </Typography>
              <Typography  variant='subtitle1' color='text.secondary'>
                Age- 2 years
            </Typography>
              <Typography  variant='subtitle1' color='text.secondary'>
                Color- Black and White
            </Typography>
              <Typography  variant='subtitle1'paragraph>
                Bruno is a very loyal and friendly dog....
            </Typography>
              <Typography  variant='subtitle1' color='primary'>
                View details...!
            </Typography>
        </CardContent>
        <CardMedia component='img' sx={{
            width: 160
        }}
        image='src/assets/Pet1.png'
        
        />

    </Card>

  </Grid>
  </>
  
}

export default FeaturedPet