import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Carousel from './Components/Carousel';
import Home from './Components/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Carousel />} exact path="/" />
        <Route element={<Home />} path="/r" />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
