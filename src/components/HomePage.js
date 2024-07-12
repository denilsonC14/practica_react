import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Producto 1', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Producto 2', price: 39.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Producto 3', price: 49.99, image: 'https://via.placeholder.com/150' },
];

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
