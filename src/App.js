import ScrollAnimation from 'react-animate-on-scroll';
import { useProgress } from "drei";
import { a, useTransition } from "@react-spring/web";
import 'animate.css';
import './App.css';
import Header from './components/HomePageComponents/Header';
import CanvasView from './components/HomePageComponents/3Dview';
import AboutMe from './components/HomePageComponents/AboutMe';


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
      <Header />
      <CanvasView />

      <div className="abouts_section">
        <ScrollAnimation animateIn="animate__fadeIn">
          <AboutMe />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default App;
