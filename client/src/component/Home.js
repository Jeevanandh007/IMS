import React from 'react';
import { Link } from 'react-router-dom';


import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className='homepage bg-light'>
        <h1 className='homepage__heading text-primary'>
          Optimize your inventory management
        </h1>
        <Link className="homepage__cta btn btn-info" to="/register">Get Started</Link>
        {/* <img src={dashboardImg} alt='Dashboard' className='homepage__dashboard-photo mt-4' /> */}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;