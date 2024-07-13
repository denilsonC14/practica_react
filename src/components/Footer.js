import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 Mi Sitio. Todos los derechos reservados.</p>
      <div className="mt-2">
        <a href="https://facebook.com" className="mr-2">Facebook</a>
        <a href="https://twitter.com" className="mr-2">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;

