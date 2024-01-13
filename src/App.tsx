
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutTeam from './components/AboutTeam';
import Fullerton from './components/Fullerton';
import Signup from './components/Signup';
import Vision from './components/Vision';
import Home from './components/Home';
import Footer from './components/Footer';
import StepperForm from './components/StepperForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
        <Routes>
          <Route path='/' element={<Signup/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/vision' element={<Vision/>} />
          <Route path='/fullerton' element={<Fullerton/>} />
          <Route path='/about_team' element={<AboutTeam/>} />
          <Route path='/form' element={<StepperForm/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
