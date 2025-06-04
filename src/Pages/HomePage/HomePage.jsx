import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <Box minHeight="80vh" display="flex" alignItems="center" justifyContent="center">
    <Grid container spacing={6} alignItems="center" justifyContent="center">
      {/* Logo Column */}
      <Grid item xs={12} md={6} display="flex" justifyContent="center">
        <Box>
          <img
            src="https://img.freepik.com/premium-vector/restaurant-food-logo-design_1016155-13405.jpg?semt=ais_hybrid&w=740"
            alt="Senasel Logo"
            style={{ maxWidth: 250, width: '100%', height: 'auto', borderRadius: 16 }}
          />
        </Box>
      </Grid>
      {/* Content Column */}
      <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2" fontWeight="bold" gutterBottom color='#fff' >
          Welcome to Senasel Foods <br/>
          <Typography sx={{ fontSize: '2.2rem', color: '#ccc' }} component="span">
            A taste of African cuisine
          </Typography>
        </Typography>
        <Typography variant="h5" color="#cccccc" maxWidth={500} mb={3}>
          Visit our Menu, Enjoy delicious meals, make reservations, and contact us for more information. 
        </Typography>
        <Button
          component={Link}
          to="/menu"
          variant="contained"
          size="large"
        >
          View Menu
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default HomePage;