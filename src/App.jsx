import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import About from "./pages/About";
import Tutorial from "./pages/Tutorial";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";


function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path='/tutorials/:tutorialId' element={<Tutorial />} />
        </Routes>

        <WhatsAppButton />
        <Footer />
    </Router>
  );
}

export default App