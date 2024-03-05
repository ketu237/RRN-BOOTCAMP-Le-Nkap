import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import HomeImage from '../Home/Homepage.png';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen relative bg-gray-200">
  <div className="absolute inset-0 bg-cover bg-center">
    <img className="h-full w-full object-cover" src={HomeImage} alt="yoo!" />
  </div>

  <div className="absolute inset-0 flex items-center justify-center text-blackcls text-center z-10">
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
        {/* Welcome to Le Nkap */}
      </h1>
           <Link
        to="/signup"
        className="bg-white hover:bg-red-300 hover:border-transparent hover:scale-10 duration-300 text-red-300 border border-red-400 hover:text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full"
      >
        Get Started
      </Link>
    </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
