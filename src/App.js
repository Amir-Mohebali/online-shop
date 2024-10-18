import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import { ToastContainer } from 'react-toastify'
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/products/:cat' element={<ProductList/>} />
        <Route path='/products/tv/:productId' element={<ProductDetails category="tv"/>} />
        <Route path='/products/phone/:productId' element={<ProductDetails category="phone"/>} />
        <Route path='/products/laptop/:productId' element={<ProductDetails category="laptop"/>} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
