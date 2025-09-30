import { BrowserRouter, Routes, Route } from "react-router-dom";
import "animate.css";
import "./App.css";
import Header from "./components/HomePageComponents/Header";
import HomePage from "./components/HomePageComponents/HomePage";
import Footer from "./components/HomePageComponents/footerComponents/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* HomePage */}
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
