import { useProgress } from "drei";
import { a, useTransition } from "@react-spring/web";
import {BrowserRouter, Route} from "react-router-dom";
import 'animate.css';
import './App.css';
import Header from './components/HomePageComponents/Header';
import HomePage from './components/HomePageComponents/HomePage';
import Footer from "./components/HomePageComponents/footerComponents/Footer";

// Works Components
import AnimeApp from './components/HomePageComponents/WorkDetailComponents/AnimeApp'
import SocialClone from "./components/HomePageComponents/WorkDetailComponents/SocialClone";


const Loader = () => {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });

  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className='loading' style={{ opacity }}>
          <div className='loading-bar-container'>
            <a.div className='loading-bar' style={{ width: progress }}></a.div>
            <a.div className='loading-text'>{progress}</a.div>
          </div>
        </a.div>
      )
  );
}

function App() {
  const { active, progress } = useProgress();

  return (
    <div className={active !== false || progress < 100 ? "full_website": "none"}>
      <Loader />
      
      {active === false || progress > 100 ?
        <>
          <BrowserRouter>
            <Header />         
            <Route path="/" exact component={() => <HomePage />} />

            {/* AnimeApp React JS */}
            <Route path="/works/0" exact component={() => <AnimeApp />} />

            {/* Social Site Clone */}
            <Route path="/works/1" exact component={() => <SocialClone />} />
          </BrowserRouter>      
        </>:
        <div></div>
      }

      <Footer />
    </div>
  );
}

export default App;
