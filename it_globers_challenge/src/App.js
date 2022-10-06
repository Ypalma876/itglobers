import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} exact path="/" />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
