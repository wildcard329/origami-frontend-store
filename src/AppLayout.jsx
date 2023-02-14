import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/images/79Eignqkliu1bLJPO9jw--1--7vtfx.jpg';

const AppLayout = ({ children }) => 
  <div>
    <header className='app-header'>
      <div>
        <img className='logo' src={Logo} alt='logo' />
      </div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/origami'>Origami</Link>
      </div>
    </header>
    <div className='app-content'>
      {children}
    </div>
    <footer className='app-footer'>
      <p>2023 Online Origami Store</p>
    </footer>
  </div>

export default AppLayout;
