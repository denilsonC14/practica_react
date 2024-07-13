import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetailPage = () => {
  let { productId } = useParams();

  const products = [
    {
      id: '1',
      name: 'Producto 1 - Cosméticos',
      price: 29.99,
      image: 'https://oca.com.ec/wp-content/uploads/2023/06/coleccion-productos-maquillaje-belleza-1024x706.jpeg',
      description: 'Descripción detallada de varios cosméticos, incluyendo sus beneficios y características.'
    },
    {
      id: '2',
      name: 'Producto 2 - Celulares',
      price: 699.99,
      image: 'https://cdn.forbes.com.mx/2023/06/celulares-iphone-samsung-768x432.webp',
      description: 'iPhone 10: un teléfono inteligente con un diseño elegante y características avanzadas.'
    },
    {
      id: '3',
      name: 'Producto 3 - Ceviche',
      price: 15.99,
      image: 'https://cocina-casera.com/wp-content/uploads/2018/06/comida-ecuatoriana-770x485.jpg',
      description: 'Ceviche fresco, preparado con pescado de alta calidad y mariscos, ideal para cualquier ocasión.'
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
        <div className="flex">
          <img src={product.image} alt={product.name} className="w-1/2" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="mt-2">${product.price}</p>
            <p className="mt-2">{product.description}</p>
            <button className="mt-4 bg-blue-500 text-white p-2 rounded">
              <Link to={`/buy/${product.id}`}>Comprar</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
