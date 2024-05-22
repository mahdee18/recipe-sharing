import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation2 } from '../components/NavMenu';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <>
    <Navigation2></Navigation2>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  );
};

export default Main;

