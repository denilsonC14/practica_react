import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ProductDetailPage = () => {
  let { productId } = useParams();

  // Aquí deberías obtener el producto específico según productId
  const product = {
    id: productId,
    name: 'Producto Detalle',
    price: 59.99,
    image: 'https://via.placeholder.com/150'
  };

  return (
    <div>
      <Header />
      <div className="p-4">
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <p>${product.price}</p>
        <p>Detalles adicionales del producto...</p>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
