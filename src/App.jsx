import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import NavBar from './components/NavBar';
import './App.css';


const App = () => (
  <div className="main-container">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>

);

export default App;