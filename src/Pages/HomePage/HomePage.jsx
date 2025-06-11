import React from 'react';
import { Box, Typography, Button, Grid, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const theme = useTheme();

  return (
    <Box 
      minHeight="80vh" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        transition: theme.transitions.create(['background-color', 'color'], {
          duration: theme.transitions.duration.standard,
        }),
      }}
    >
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        {/* Logo Column */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box
            sx={{
              padding: 2,
              borderRadius: 4,
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[4],
            }}
          >
            <img
              src="/data:image/png;base64,..." // Your existing base64 image
              alt="Senasel Logo"
              style={{ 
                maxWidth: 250, 
                width: '100%', 
                height: 'auto', 
                borderRadius: 16,
                filter: theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>

        {/* Content Column */}
        <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center">
          <Typography 
            variant="h2" 
            fontWeight="bold" 
            gutterBottom
            sx={{
              color: theme.palette.text.primary,
              textAlign: 'center',
            }}
          >
            Welcome to Senasel Foods
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            align="center" 
            maxWidth={500} 
            mb={3}
            sx={{
              color: theme.palette.text.secondary,
            }}
          >
            Visit our Menu, Enjoy delicious meals, make reservations, and contact us for more information.
          </Typography>
          <Button
            component={Link}
            to="/menu"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                transform: 'scale(1.05)',
              },
              transition: theme.transitions.create(['background-color', 'transform'], {
                duration: theme.transitions.duration.short,
              }),
              transform: 'scale(1)',
            }}
          >
            View Menu
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;