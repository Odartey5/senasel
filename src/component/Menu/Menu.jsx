import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Box, IconButton } from '@mui/material';
import { Add, Remove} from '@mui/icons-material';
import { Snackbar, Alert, Button as MuiButton } from '@mui/material';
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';



const foodItems = [
  {
    id: 'kelewele',
    name: 'Kelewele ',
    description: 'Fried ripe plantain',
    price: 80,
    image: 'https://placehold.co/600x400/D4EDDA/3C763D?text=Kelewele', // Placeholder image
  },
  {
    id: 'octopus',
    name: 'Octopus Tentacles',
    description: 'Provencal Sauce, Garlic Bread.',
    price: 180,
    image: 'https://placehold.co/600x400/F2DEDE/A94442?text=Octopus', // Placeholder image
  },
  {
    id: 'prawns',
    name: 'Prawns Tempura',
    description: 'Sriracha Mayo Dip.',
    price: 280,
    image: 'https://placehold.co/600x400/D9EDF7/31708F?text=Prawns', // Placeholder image
  },
  {
    id: 'bridgeview',
    name: 'BridgeView Combo',
    description: 'Burgers and Fries.', // Added a description for consistency
    price: 190,
    image: 'https://placehold.co/600x400/FCF8E3/8A6D3B?text=Combo', // Placeholder image
  },
  // Add more items if needed to test grid responsiveness
];

function App() {

  const [cart, setCart] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  //open cart modal handler
  const handleOpenCart = () => setCartModalOpen(true);

  //close cart modal handler
  const handleCloseCart = () => setCartModalOpen(false);

  //add to cart handler
  const handleAddToCart = (item) => {
      setCart(prevCart => {
        const existing = prevCart.find(ci => ci.id === item.id);
        if (existing) {
          return prevCart.map(ci =>
            ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
          );
        } else {
          return [...prevCart, { ...item, quantity: 1 }];
        }
    });    setSnackbarOpen(true);
  }

  //close snackbar handler
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return
    setSnackbarOpen(false);
  }

  //calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);



  return (
    <Box mt={20} mb={10} px={2}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
      >
        Menu
      </Typography>
      <Grid container spacing={6} justifyContent='center' alignItems='center' >
        {foodItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.name}
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/cccccc/ffffff?text=Image+Error"; }}
              />
              <CardContent sx={{flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Typography gutterBottom variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" minHeight='10'> {/* min-h to help align if descriptions are short */}
                  {item.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                  <Typography variant="h6" color="text.primary" className="font-bold">
                    {item.price} GHC
                  </Typography>
                </Box>
              </CardContent>
              <CardActions> 
                <Button
                  variant="contained"
                  aria-label={`Add ${item.name} to cart`}
                  onClick={() => handleAddToCart(item)}
                >
                  <Add sx={{}} />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

        {/* Cart Summary */}
      <Snackbar
        open={snackbarOpen}
        // autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >


        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          action={
            <MuiButton
              color="inherit"
              size="small"
              onClick={handleOpenCart}
            >
              Go to Cart
            </MuiButton>
          }
        >
          {`Cart: ${cart.length} item${cart.length !== 1 ? 's' : ''} | Total: ${totalPrice} GHC`}
        </Alert>
      </Snackbar>


      {/* cart Pages */}
      <Dialog open={cartModalOpen} onClose={handleCloseCart} fullWidth maxWidth="sm">
        <DialogTitle variant='h5' sx={{fontStyle: 'italic', textAlign: 'center'}}>Your Cart</DialogTitle>
        
        <DialogContent dividers>
          {cart.length === 0 ? (
            <Typography variant="body1">Your cart is empty.</Typography>
          ) : (
            <Box>
              {cart.map((item, id) => (
                <React.Fragment key={id}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography>{item.name}</Typography>
                    <Box display="flex" alignItems="center">
                      <IconButton
                        size="small"
                        onClick={() => {
                          setCart(prevCart =>
                            prevCart
                              .map(ci =>
                                ci.id === item.id
                                  ? { ...ci, quantity: Math.max(1, ci.quantity - 1) }
                                  : ci
                              )
                              .filter(ci => ci.quantity > 0)
                          );
                        }}
                      >
                        <Remove fontSize="small" />
                      </IconButton>
                      <Typography mx={1}>{item.quantity}</Typography>
                      <IconButton
                        size="small"
                        onClick={() => {
                          setCart(prevCart =>
                            prevCart.map(ci =>
                              ci.id === item.id
                                ? { ...ci, quantity: ci.quantity + 1 }
                                : ci
                            )
                          );
                        }}
                      >
                        <Add fontSize="small" />
                      </IconButton>
                      <Typography ml={2}>{item.price * item.quantity} GHC</Typography>
                       <IconButton
                          size="small"
                          color="error"
                          onClick={() => {
                            setCart(prevCart => prevCart.filter(ci => ci.id !== item.id));
                          }}
                          sx={{ ml: 1 }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Box>
                  </Box>
                  {id < cart.length - 1 && <Divider />}
                </React.Fragment>
              ))}
              <Box mt={2} display="flex" justifyContent="space-between" fontWeight="bold">
                <Typography sx={{ fontWeight: 'bolder' }}>Total:</Typography>
                <Typography>{totalPrice} GHC</Typography>
              </Box>
            </Box>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseCart} color="secondary">Close</Button>
          <Button
            variant="contained"
            color="primary"
            disabled={cart.length === 0}
            onClick={() => {
              // Replace with your checkout logic or navigation
              alert('Proceeding to checkout!');
              handleCloseCart();
            }}
          >
            Checkout
          </Button>
        </DialogActions>
      </Dialog>

      {/* next, work on the checkout page */}
    </Box>  
  );
}

export default App;
