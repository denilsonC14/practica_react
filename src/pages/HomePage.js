import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="text-center p-10 bg-gray-800 text-white">
        <h1 className="text-4xl font-bold">Welcome to Ecomm</h1>
        <p className="mt-4">Your one-stop shop for all your e-commerce needs!</p>
        <Link to="/products">
          <Button variant="contained" color="primary" className="mt-4">
            Shop Now
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

