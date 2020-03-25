import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
// import SideBar from './components/layout/Sidebar/Index';
// import MainSection from './components/layout/maincontent';
const App = () => {
  return (
    <Router>
      <NavBar />
      <main id='main'></main>
    </Router>
  );
};

export default App;
