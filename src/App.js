import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Topbar from './Components/Navbar/Topbar';
import Banner from './Components/Banner/Banner';
import React from 'react';

function App() {
  return (
    <div className="App">
      
      <Topbar/>
   <Navbar/>
   <Banner/>
    </div>
  );
}

export default App;
