import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

const App = () => {
  const product = {
    name: 'Producto 1',
    price: 29.99,
    image: 'https://via.placeholder.com/150'
  };

  return (
    <div>
      <Header />
      <div className="p-4">
        <ProductCard product={product} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
