import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Box, IconButton, TextField } from '@mui/material';
import { Add, Remove} from '@mui/icons-material';
import { Snackbar, Alert, Button as MuiButton } from '@mui/material';
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';




const foodItems = [
  {
    id: '1',
    name: ' Banku and Tilapia',
    description: 'Soft banku with grilled tilapia, served with spicy pepper sauce.',
    price: 80,
    image: 'https://mall.ghverified.com/admin/uploads/banku-and-tilapia-2.jpg', // Placeholder image
  },
  {
    id: '2',
    name: 'Kelewele',
    description: 'Spicy and Hot mixed with pure African spcies.',
    price: 20,
    image: 'https://static.wixstatic.com/media/33152a_12f09204d240405a882c7ae50a48c8fb~mv2.jpg/v1/fill/w_980,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/33152a_12f09204d240405a882c7ae50a48c8fb~mv2.jpg', // Placeholder image
  },
  {
    id: '3',
    name: 'Jollof Rice',
    description: 'Delicious Jollof Rice with a side of fried plantain and chicken.',
    price: 100,
    image: 'https://t4.ftcdn.net/jpg/08/36/33/67/360_F_836336748_QSgGUTSRyytsh6vER8Qi6mOqmLQUUKv8.jpg', // Placeholder image
  },
  {
    id: '4',
    name: 'Attieke and Tilapia',
    description: 'A traditional dish made with cassava, served with grilled fish and vegetables.',
    price: 150,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFA3BsXE0Huiu-OEl1-NawFbZnAipU3kbLJg&s', // Placeholder image
  },
  {
    id: '5',
    name: 'Kelewele ',
    description: 'Fried ripe plantain',
    price: 80,
    image: 'https://placehold.co/600x400/D4EDDA/3C763D?text=Kelewele', // Placeholder image
  },
  {
    id: '6',
    name: 'Octopus Tentacles',
    description: 'Provencal Sauce, Garlic Bread.',
    price: 180,
    image: 'https://placehold.co/600x400/F2DEDE/A94442?text=Octopus', // Placeholder image
  },
  {
    id: '7',
    name: 'Prawns Tempura',
    description: 'Sriracha Mayo Dip.',
    price: 280,
    image: 'https://placehold.co/600x400/D9EDF7/31708F?text=Prawns', // Placeholder image
  },
  {
    id: '8',
    name: 'BridgeView Combo',
    description: 'Burgers and Fries.', // Added a description for consistency
    price: 190,
    image: 'https://placehold.co/600x400/FCF8E3/8A6D3B?text=Combo', // Placeholder image
  },
  {
    id: '9',
    name: 'BridgeView Combo',
    description: 'Burgers and Fries.', // Added a description for consistency
    price: 190,
    image: 'https://placehold.co/600x400/FCF8E3/8A6D3B?text=Combo', // Placeholder image
  },
  {
    id: '10',
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
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showCashDialog, setShowCashDialog] = useState(false);
  const [showCardDialog, setShowCardDialog] = useState(false);


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
    <Box mt={10} mb={10} px={2} textAlign={'center'}>

      <Typography
        variant="h4 "
        component="h1"
        align="center"
        gutterBottom
        fontFamily={"'Comic', sans"}
        color={'#333'}
        backgroundColor={'#f5f5f5'}
        padding={1}
        borderRadius={2}
        display={'inline-block'}
        textTransform={'uppercase'}
      >
        Menu
      </Typography>
      <Grid container spacing={6} justifyContent='center' alignItems='center' >
        {foodItems.map((item) => (
          <Grid size={{ xs:10, sm:6, md:4, lg:2.7}} key={item.id} >
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.name}
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/cccccc/ffffff?text=Image+Error"; }}
              />
              <CardContent sx={{flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Typography gutterBottom variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" minHeight='10' textAlign= 'left'> {/* min-h to help align if descriptions are short */}
                  {item.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                  <Typography variant="h6" color="text.primary">
                    GHC {item.price} 
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
          sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '50px', padding: '15px 20px' }}
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
          {`Cart: ${cart.length} item${cart.length !== 1 ? 's' : ''} || Total: GHC${totalPrice}`}
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
                      <Typography ml={2}>GHC {item.price * item.quantity} </Typography>
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
                <Typography>GHC {totalPrice} </Typography>
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
              setCheckoutOpen(true);
              handleCloseCart();
            }}
          >
            Checkout
          </Button>
        </DialogActions>
      </Dialog>

      {/* next, work on the checkout page */}
      <Dialog open={checkoutOpen} onClose={() => setCheckoutOpen(false)} fullWidth maxWidth="xs">
        <DialogTitle sx={{textAlign: 'center', fontSize: '1.5rem'}}>Checkout</DialogTitle>
        <DialogContent dividers>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Full Name"
              value={buyerName}
              onChange={e => setBuyerName(e.target.value)}
              required
            />
            <TextField
              label="Phone Number"
              value={buyerPhone}
              onChange={e => setBuyerPhone(e.target.value)}
              required
            />
            <TextField
              label="Delivery"
              value={destination}
              onChange={e => setDestination(e.target.value)}
              required
            />
            <Typography variant="subtitle1" sx={{ mt: 1 }}>Payment Method</Typography>
            <Box>
              <Button
                variant={paymentMethod === 'Cash' ? 'contained' : 'outlined'}
                onClick={() => {
                  setPaymentMethod('Cash');
                  setShowCashDialog(true);
                }}
                sx={{ mr: 1 }}
              >
                Cash
              </Button>
              <Button
                variant={paymentMethod === 'Card' ? 'contained' : 'outlined'}
                onClick={() => {
                  setPaymentMethod('Card');
                  setShowCardDialog(true);
                }}
              >
                Card
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCheckoutOpen(false)} color="secondary">Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            disabled={
              !buyerName || !buyerPhone || !destination || !paymentMethod
            }
            onClick={() => {
              Swal.fire({
                icon: 'success',
                title: 'Order Placed!',
                html: `
                  <div style="text-align:left">
                    <b>Name:</b> ${buyerName}<br/>
                    <b>Phone:</b> ${buyerPhone}<br/>
                    <b>Destination:</b> ${destination}<br/>
                    <b>Payment:</b> ${paymentMethod}
                  </div>
                `,
                confirmButtonText: 'OK'
              });
              setCheckoutOpen(false);
            }}
          >
            Confirm Order
          </Button>
        </DialogActions>
      </Dialog>


            {/* code to check for payment via cash */}
      <Dialog
        open={showCashDialog}
        onClose={() => setShowCashDialog(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ textAlign: 'center', fontWeight:'bold' }}>Please send your payment to</DialogTitle>
        <DialogContent dividers>
          <Typography variant="h6" align="center" color="primary" sx={{ fontWeight: 'bold' }}>
            0200 123 456
          </Typography>
          <Typography variant="body2" align="center" mb= {2}>
            (Telecel Cash)
          </Typography>
          <Typography variant="h6" align="center" color="primary" sx={{ fontWeight: 'bold' }}>
            0244 123 456
          </Typography>
          <Typography variant="body2" align="center" mb= {2}>
            (MTN Mobile Money Number)
          </Typography>
          <Typography variant="h6" align="center" color="primary" sx={{ fontWeight: 'bold',}}>
            0277 123 456
          </Typography>
          <Typography variant="body2" align="center" mb= {2}>
            (AT Cash)
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCashDialog(false)} color="primary" variant="contained" fullWidth>
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {/* making payment via card */}
      <Dialog
        open={showCardDialog}
        onClose={() => setShowCardDialog(false)}
        maxWidth="xs"
        fullWidth
      >

        <DialogTitle sx={{ textAlign: 'center', fontWeight:'bold' }}>Payment via Card</DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1" align="center" mb={2}>
            Please enter your card details to proceed with the payment.
          </Typography>
          <TextField
            label="Card Number"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Expiry Date (MM/YY)"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="CVV"
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCardDialog(false)} color="secondary">Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              // Handle card payment confirmation here
              alert('Card payment processed successfully!');
              setShowCardDialog(false);
            }}
          >
            Pay Now
          </Button>
        </DialogActions>
      </Dialog>
    </Box>  
  );
}

export default App;
