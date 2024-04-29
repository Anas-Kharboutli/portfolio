import './App.css';
import { NavBar, PageRoutes } from './components/exports';


function App() {
  return (
    <div className="App">
      <div className='navbar'>
      <NavBar />
      </div>

      <PageRoutes />

    </div>
  );
}

export default App;
