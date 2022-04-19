import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Error from './Pages/Shared/Error/Error'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RequreAuth from './Pages/Login/RequreAuth/RequreAuth';
import Checkout from './Pages/Checkout/Checkout';
import AboutMe from './Pages/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/Checkout' element={<RequreAuth><Checkout></Checkout></RequreAuth>}></Route>
       

      

       <Route path='*' element={<Error></Error>}></Route>
      
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
