import './App.css';
import { NavBar, PageRoutes, Footer } from './components/exports';


function App() {
  return (
    <div className="App">
      <div className='navbar'>
      <NavBar />
      </div>
      <PageRoutes />
      <Footer />
    </div>
  );
}

export default App;
