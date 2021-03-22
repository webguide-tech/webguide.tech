import React from 'react';
import TopNav from './topnav/Topnav';
import MobileNav from '../common/mobnav/MobileHeader';

const Navbar = (props) => {
  return (
    <div className='nav-container'>
      <TopNav />
      <MobileNav />
    </div>
  )
}

export default Navbar;