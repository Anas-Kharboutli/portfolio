import './App.css';
import { NavBar, EyesShape, Hero, Skills, AboutMe, Projects, WorkExperience, Contact, Footer, PageRoutes } from './components/exports';


function App() {
  return (
    <div className="App">
      <div className='navbar'>
      <NavBar />
      
      </div>
      <EyesShape />
      <Hero />
      <Skills />
      <Projects />
      <PageRoutes />
      <AboutMe />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
