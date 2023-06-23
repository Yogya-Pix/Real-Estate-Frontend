import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Property from './pages/property/Property';
import VrPage from './pages/VrPage/VrPage';
import List from './pages/list/List';
import Propertyslider from './components/propertyslider/Propertyslider';
import AboutUs from './pages/AboutUs/AboutUs';
import SignUpPage1 from './pages/SignUpPage1/SignUpPage1';

function App() {
  return (
    <>


      {/* <SignUpPage1 /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explorevr/:id' element={<VrPage />} />
          <Route path='/property' element={<List />} />
          <Route path='/property/:id' element={<Property />} />
          <Route path='/propertyslider' element={<Propertyslider />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;