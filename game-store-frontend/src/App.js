
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Stats from './pages/Stats'
import Games from './pages/Games'
import Workers from './pages/Workers'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="h-screen w-screen flex">
      <Router>
      <SideBar />
      <Routes>
        <Route exact path='/' element={<Stats />} />
        <Route exact path='/games' element={<Games />} />
        <Route exact path='/workers' element={<Workers />} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
