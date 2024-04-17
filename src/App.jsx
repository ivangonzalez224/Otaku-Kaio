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

store.dispatch(getLandings());

const App = () => (
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

export default App;