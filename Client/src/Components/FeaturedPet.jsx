import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid, Container } from '@mui/material';

const FeaturedPet = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={6}>
        {[1, 2].map((item) => (
          <Grid item xs={12} md={6} key={item}>
            <Card sx={{ display: 'flex', height: '100%' }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h4">
                  Bruno
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Breed - Husky
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Category - Dogs
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Age - 2 years
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Color - Black and White
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  Bruno is a very loyal and friendly dog....
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  View details...!
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 200, objectFit: 'cover' }}
                 image='src/assets/Pet1.png'
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedPet
