import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import NavBar from './components/NavBar';
import './App.css';


const App = () => (
  <div className="main-container">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Products />} />
    </Routes>
  </div>

);

export default App;