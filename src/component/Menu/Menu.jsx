import { Card, CardContent, CardMedia, Typography, Grid, CardActions, Button } from "@mui/material";
import "./Menu.css";

const menuItems = [
  {
    name: "Talia and Egg",
    description: "Classic pizza with tomato, mozzarella, and basil.",
    price: "$12",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIR3gh1KX-rwMxzFQC-vSjeArftxR750Awog&s"
  },
  {
    name: "Indomie",
    description: "Romaine lettuce, parmesan, croutons, and Caesar dressing.",
    price: "$8",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIR3gh1KX-rwMxzFQC-vSjeArftxR750Awog&s"
  },
  {
    name: "Macaroni and Cheese",
    description: "Pasta with pancetta, egg, and parmesan.",
    price: "$14",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIR3gh1KX-rwMxzFQC-vSjeArftxR750Awog&s"
  },
  {
    name: "Spaghetti",
    description: "Coffee-flavored Italian dessert.",
    price: "$6",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIR3gh1KX-rwMxzFQC-vSjeArftxR750Awog&s"
  },
   {
    name: "Talia and Egg",
    description: "Classic pizza with tomato, mozzarella, and basil.",
    price: "$12",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIR3gh1KX-rwMxzFQC-vSjeArftxR750Awog&s"
  },
  {
    name: "Indomie",
    description: "Romaine lettuce, parmesan, croutons, and Caesar dressing.",
    price: "$8",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIR3gh1KX-rwMxzFQC-vSjeArftxR750Awog&s"
  },
  {
    name: "Macaroni and Cheese",
    description: "Pasta with pancetta, egg, and parmesan.",
    price: "$14",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIR3gh1KX-rwMxzFQC-vSjeArftxR750Awog&s"
  },
  {
    name: "Spaghetti",
    description: "Coffee-flavored Italian dessert.",
    price: "$6",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIR3gh1KX-rwMxzFQC-vSjeArftxR750Awog&s"
  },
  
];

function Menu() {
  return (
    <div className="menu-container">
      <Typography variant="h3" gutterBottom marginLeft={6}>
        Our Menu
      </Typography>
      <Grid container spacing={6} style={{ display: "flex", justifyContent: "center" }}>  
        {menuItems.map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card justifyContent={"space-evenly"} className="menu-card">
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                className="menu-image"
              />
              <CardContent className="menu-card-content">
                <div className="menu-title-row">
                  <Typography variant="h6" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                   <span className="price">Price:</span> {item.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </div>
              </CardContent>
              <CardActions className="menu-card-actions">
                <Button
                  variant="contained"
                  color="primary"
                  halfWidth
                  className="buy-btn">
                  BUY
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Menu;