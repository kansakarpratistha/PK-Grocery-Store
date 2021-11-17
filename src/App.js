import logo from "./logo.svg";
import "./App.css";
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
import Products from "./Components/Pages/Products";
import Services from "./Components/Pages/Services";
import HouseHold from "./Components/Pages/Household";
import Vegetables from "./Components/Pages/Vegetables";
import Kitchen from "./Components/Pages/Kitchen";
import FrozenFood from "./Components/Pages/FrozenFood";
import Beverages from "./Components/Pages/Beverages";
import PetFood from "./Components/Pages/PetFood";
import Bread from "./Components/Pages/Bread";
import Faq from "./Components/Pages/Faq";

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
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/household" element={<HouseHold />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/frozen" element={<FrozenFood />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/pet" element={<PetFood />} />
        <Route path="/bread" element={<Bread />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;
