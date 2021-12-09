import {BrowserRouter, Route} from "react-router-dom";
import 'animate.css';
import './App.css';
import Header from './components/HomePageComponents/Header';
import HomePage from './components/HomePageComponents/HomePage';
import Footer from "./components/HomePageComponents/footerComponents/Footer";

// Works Components
import AnimeApp from './components/HomePageComponents/WorkDetailComponents/AnimeApp';


function App() {
  return (
    <div>      
      <>
        <BrowserRouter>
          <Header />
                    
          <Route path="/" exact component={() => <HomePage />} />

          {/* AnimeApp React JS */}
          <Route path="/works/:id" exact component={() => <AnimeApp />} />
          <Footer />
        </BrowserRouter>      
      </>
    </div>
  );
}

export default App;
