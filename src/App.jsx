import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import NavBar from './components/NavBar';
import './assets/styles/NavBar.css';


const App = () => (
  <div className="main-container">
    <NavBar />
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  </div>

);

export default App;