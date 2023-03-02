import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Market from './pages/market';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="market" element={ <Market/>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
