import React from 'react';

const HamburgerIcon = (props) => {

  return (<div className='hamburger-container' onClick={props.clickHandler}>
    <div className='hamburger-line'></div>
    <div className='hamburger-line'></div>
    <div className='hamburger-line'></div>
  </div>);
}
export default HamburgerIcon;
