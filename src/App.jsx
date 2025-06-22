import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Packages from "./pages/Packages";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";


function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <WhatsAppButton />
        <Footer />
    </Router>
  );
}

export default App