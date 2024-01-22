import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

const App = () => (
  <div className="main-container">
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  </div>

);

export default App;