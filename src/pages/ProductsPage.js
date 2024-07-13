import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

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


const ProductsPage = () => {
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

export default ProductsPage;
