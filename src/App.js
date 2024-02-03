import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import Errorpage from "./Errorpage";
import Home from "./Home";
import SingleProduct from "./SingleProduct";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}
