import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Topbar from './Components/Navbar/Topbar';
import Banner from './Components/Banner/Banner';

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
