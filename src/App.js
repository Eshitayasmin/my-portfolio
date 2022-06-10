import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Welcome from './components/Shared/Welcome';

function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/welcome" element={<Welcome></Welcome>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        
      
      </Routes>
   
    </div>
  );
}

export default App;
