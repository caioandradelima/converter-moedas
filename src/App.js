import logo from './logo.svg';
import './index.css'
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import RealDolar from './pages/RealDolar'
import DolarReal from './pages/DolarReal'
import EuroReal from './pages/EuroReal'
import BtcReal from './pages/BtcReal'


function App() {
  return (
    <div className="App">
      

     <Router>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/Menu" element={<Menu/>}></Route>
         <Route path="/RealDolar" element={<RealDolar/>}></Route>
         <Route path="/DolarReal" element={<DolarReal/>}></Route>
         <Route path="/EuroReal" element={<EuroReal/>}></Route>
         <Route path="/BtcReal" element={<BtcReal/>}></Route>
         
      </Routes>
     </Router>

     
    </div>
  );
}

export default App;
