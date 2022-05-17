import { BrowserRouter, Route } from "react-router-dom";
import 'animate.css';
import './App.css';
import Header from './components/HomePageComponents/Header';
import HomePage from './components/HomePageComponents/HomePage';
import Footer from "./components/HomePageComponents/footerComponents/Footer";

// Works Components
import Work from './components/HomePageComponents/WorkDetailComponents/Work';


function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Header />

          {/* HomePage     */}
          <Route path="/" exact component={() => <HomePage />} />

          {/* Works */}
          <Route path="/works/:id" exact component={() => <Work />} />
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
