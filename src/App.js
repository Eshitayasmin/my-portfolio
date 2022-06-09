import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Home/About';
import Contact from './components/Home/Contact';
import Home from './components/Home/Home';
import Projects from './components/Home/Projects';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        
      
      </Routes>
    </div>
  );
}

export default App;
