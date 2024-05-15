import React from 'react';
import './Header.css';
import epiengage_logo from './epiengage_logo.jpg';

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img src={epiengage_logo} alt="EpiEngage Logo" className="logo" />
        </div>
        <div className="text-container">
          <h1>epiENGAGE</h1>
        </div> 
        <div className="text-container">
          <h1>Flu Simulator</h1>
        </div>
      </div>
    );
  }
  
  export default Header;


