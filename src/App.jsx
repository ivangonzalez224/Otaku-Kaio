import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Offers from './components/pages/Offers';
import Products from './components/pages/Products';
import Details from './components/pages/Details';
import Cart from './components/pages/Cart';
import NavBar from './components/NavBar';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import UserProfile from './components/pages/UserProfile';
import store from './redux/store'
import './App.css';
import { getLandings } from './redux/landings/LandingsSlice';
import { setUser } from './redux/user/UserSlice';
import { loginUser } from './utils';

store.dispatch(getLandings());

const App = () => {
  const user = useSelector((state) => state.user.userInfo);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      store.dispatch(setUser(JSON.parse(storedUser)));
    } else {
        const demoEmail = 'demo_user@example.com';
        const demoPassword = 'password123';
        // login as a demo user
        loginUser(demoEmail, demoPassword);
    }
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
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default App;