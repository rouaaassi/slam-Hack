import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../src/compenets/nav/navbar'; 
import Footer from '../src/pages/footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
