import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tienda from './pages/Tienda';
import Login from './pages/Login';
import Register from './pages/Register'
// import {UserProvider} from './context/userContext'

function App() {
  return (
    <>
      {/*<UserProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registro' element={<Register />} />
            {/*<Route element={<PrivateRoute />}>*/}
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='tienda' element={<Tienda />} />
            <Route path='home' element={<Home />} />
            {/*</Route>*/}
          </Route>
        </Routes>
      </BrowserRouter>
      {/*</UserProvider> */}
    </>
  );
}

export default App;
