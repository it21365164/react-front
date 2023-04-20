import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AsterBanquetHall from './pages/AsterBanquetHall';
import Home from './pages/Home';
import Navbar from './layout/Navbar';

import TheGreenBanquets from './pages/TheGreenBanquets';
import KNIGHTSBRIDGE from './pages/KNIGHTSBRIDGE';
import HummingbirdHall from './pages/HummingbirdHall';
// import BasicSlider from './components/BasicSlider';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
        {/* <BasicSlider/> */}
        <Routes>
        
          <Route exact path="/" element={<Home />} />
          <Route exact path="/asterbanquethall" element={<AsterBanquetHall />} />
          <Route exact path="/thegreenbanquets" element={<TheGreenBanquets/>} />
          <Route exact path="/KNIGHTSBRIDGE" element={<KNIGHTSBRIDGE/>} />
           <Route exact path="/hummingbirdhall" element={<HummingbirdHall/>} />
          
          
          
          
        </Routes>

      </Router>
    </div>
  );
}

export default App;
