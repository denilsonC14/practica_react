import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card style={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt={product.name}
        height="140"
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/product/${product.id}`}>Ver Detalles</Link>
        </Button>
        <Button size="small" color="primary">
          <Link to={`/product/${product.id}`}>Comprar</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;


