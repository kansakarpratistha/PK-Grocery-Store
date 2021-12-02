import logo from "./logo.svg";
import "./App.css";
import "@fontsource/ubuntu";
import "@fontsource/open-sans";
import Index from "./Components/Pages/Index";
import AboutUs from "./Components/Pages/AboutUs";
import Privacy from "./Components/Pages/Privacy";
import Events from "./Components/Pages/Events";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Pages/Login";
import Newsletter from "./Components/Newsletter";
import Mail from "./Components/Pages/Mail";
import Services from "./Components/Pages/Services";
import Faq from "./Components/Pages/Faq";
import Single from "./Components/Pages/Single";
import Checkout from "./Components/Pages/Checkout";
import Payment from "./Components/Pages/Payment";
import Deals from "./Components/Pages/Deals";
import Products from "./Components/Pages/Products";
import Logout from "./Components/Pages/Logout";
import ForgotPassword from "./Components/Pages/ForgotPassword";
import MyProfile from "./Components/Pages/MyProfile";
import ProductSearch from "./Components/Pages/ProductSearch";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Mail />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/services" element={<Services />} />
        <Route path="/category/:id" element={<Products />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/single" element={<Single />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/product-search/:searchKey" element={<ProductSearch />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;
