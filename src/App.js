import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Market from './pages/market';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Profil from './pages/profil';

function Layout()
{
  return (
    <div className='main'>
      <Navbar />
      <Outlet/>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Layout />}>
          <Route path="market" element={<Market />} />
          <Route path="profil" element={ <Profil/>} />

        </Route>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
