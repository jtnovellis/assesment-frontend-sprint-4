import About from './pages/About';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CartDetails from './pages/CartDetails';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/details/:productId' element={<ProductDetail />} />
        <Route path='/cart-details' element={<CartDetails />} />
      </Routes>
    </div>
  );
}

export default App;
