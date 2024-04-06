import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
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
      <Route path="/store" element={<Products />} />
      <Route path="/store/details/:productId" element={<Details />}
    </Routes>
  </div>

);

export default App;