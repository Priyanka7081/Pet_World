import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid, Container } from '@mui/material';
import { BACKEND_URI } from '../Utils/constants';

const FeaturedPet = ({ pet }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, px: 4 }}>
      <Grid container spacing={6}>
        {[1, 2].map((item) => (
          <Grid item xs={12} md={6} key={item}>
            <Card sx={{ display: 'flex', height: '100%' }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h4">
                  {pet.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Breed - {pet.breed}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Category - {pet.category.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Age - {pet.age}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Color - {pet.color}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {pet.description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  View details...!
                </Typography>
              </CardContent>
              <CardMedia
                component="img"

                src={`${BACKEND_URI}/${pet.image}`} alt='Pet'

                sx={{
                  width: 200,
                  display: { xs: "none", sm: "block" }
                }} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedPet
