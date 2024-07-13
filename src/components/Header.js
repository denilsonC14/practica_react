import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Mi Tienda
        </Typography>
     
        <Link to="/">
        <Button color="inherit">Inicio</Button>
    
        </Link>
        <Link to="/products">
        <Button color="inherit">Productos</Button>
        </Link>
        <Link to="/contact">
        <Button color="inherit">Contacto</Button>
        </Link>
       
      </Toolbar>
    </AppBar>
  );
}

export default Header;



