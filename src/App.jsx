import React, { useState } from 'react';
import Navbar from './Navbar';
import MenuPage from './MenuPage';
import GalleryPage from './GalleryPage';
import OrderPage from './OrderPage';
import ContactPage from './ContactPage';
import FeedbackPage from './FeedbackPage';
import CustomizePage from './Customizepage';
import Footer from './Footer';

function App() {
  const [page, setPage] = useState('gallery');
  return (
    <div style={{ overflowX: 'hidden', width: '100%', margin: 0, padding: 0 }}>
      <Navbar setPage={setPage} activePage={page} />
      {page === 'menu'      && <MenuPage />}
      {page === 'gallery'   && <GalleryPage />}
      {page === 'order'     && <OrderPage />}
      {page === 'contact'   && <ContactPage />}
      {page === 'feedback'  && <FeedbackPage />}
      {page === 'customize' && <CustomizePage />}
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;