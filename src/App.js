import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import FruitsWebDetail from './components/Details/FruitsWebDetail';
import PartsWebDetails from './components/Details/PartsWebDetails';
import PhotographyWebDetail from './components/Details/PhotographyWebDetail';
import Home from './components/Home/Home';
import Navbar from './components/Shared/Navbar';
import Welcome from './components/Shared/Welcome';

function App() {
  return (
    <div>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/welcome" element={<Welcome></Welcome>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/partsWebDetail" element={<PartsWebDetails></PartsWebDetails>}></Route>
        <Route path="/fruitsWebDetail" element={<FruitsWebDetail></FruitsWebDetail>}></Route>
        <Route path="/photographyWebDetail" element={<PhotographyWebDetail></PhotographyWebDetail>}></Route>
        
      
      </Routes>
   
    </div>
  );
}

export default App;
