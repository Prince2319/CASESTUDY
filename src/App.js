import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import News from './components/News';
import Contact from './components/Contact';
import Household from './components/Household';
import Vehicle from './components/Vehicle';
import Industrial from './components/Industrial';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/household' element={<Household/>}></Route>
          <Route exact path='/vehicle' element={<Vehicle/>}></Route>
          <Route exact path='/industrial' element={<Industrial/>}></Route>
          <Route exact path='/news' element={<News/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
