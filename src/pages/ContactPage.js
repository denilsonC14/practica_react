import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className="p-4">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className="mt-2">Email: contact@ecomm.com</p>
        <p className="mt-2">Phone: +1 234 567 890</p>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2945919301165!2d-122.4194162846811!3d37.7749292797581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8b8d5d%3A0xa6e1e5b8b678a28e!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2s!4v1539293484016"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
