import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BuyPage = () => {
  let { productId } = useParams();

  const products = [
    {
      id: '1',
      name: 'Producto 1 - Cosméticos',
      price: 29.99,
      description: 'Descripción detallada de varios cosméticos.'
    },
    {
      id: '2',
      name: 'Producto 2 - Celulares',
      price: 699.99,
      description: 'iPhone 10: un teléfono inteligente con características avanzadas.'
    },
    {
      id: '3',
      name: 'Producto 3 - Ceviche',
      price: 15.99,
      description: 'Ceviche fresco y delicioso.'
    },
  ];

  const product = products.find(item => item.id === productId);

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <div>
      <Header />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="mt-2">${product.price}</p>
        <p className="mt-2">{product.description}</p>
        <h3 className="mt-4">Detalles de Compra</h3>
        <p>Precio promedio en el mercado: ${product.price * 1.1}</p>
        <p>¡Nuestro precio es el mejor!</p>
        <button className="mt-4 bg-blue-500 text-white p-2 rounded">Añadir al carrito</button>
      </div>
      <Footer />
    </div>
  );
}

export default BuyPage;
