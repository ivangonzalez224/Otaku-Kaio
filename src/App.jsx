import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Offers from './components/pages/Offers';
import Products from './components/pages/Products';
import Details from './components/pages/Details';
import Cart from './components/pages/Cart';
import NavBar from './components/NavBar';
import store from './redux/store'
import './App.css';
import { getLandings } from './redux/landings/LandingsSlice';
import { generateRandomString } from './utils';

store.dispatch(getLandings());

// Create a new user
async function createUser() {
  const num = Math.floor(Math.random() * 1000); // Generate a random number for user name and email
  const userData = {
    name: `user${num}`,
    email: `user${num}@example.com`,
    password: generateRandomString(8)
  };

  try {
    const response = await fetch('http://127.0.0.1:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      throw new Error('Failed to create user');
    }

    const data = await response.json();
    console.log('User created successfully:', data); // Log user data
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

const App = () => {
  useEffect(() => {
    createUser();
  }, []);
  
  return (
    <div className="main-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Products />} />
        <Route path="/store/details/:productId" element={<Details />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;