import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import HamburgerIcon from '../HamburgerIcon';

class MobSidenav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileSidebar: false
    }
  }
  componentWillMount() {
    const prevCount = localStorage.getItem('totalVisits');
    let counter = 0;
    if (prevCount) {
      counter = Number(prevCount) + 1;
      localStorage.setItem('totalVisits', counter);
    } else {
      counter++;
      localStorage.setItem('totalVisits', 1);
    }
    localStorage.setItem('totalVisits', counter);
    console.log(counter);
  }

  toggleSidebar = () => {
    // const {showMobileSidebar} = this.state;
    // this.setState({showMobileSidebar: !showMobileSidebar});
  }
  render() {
    console.log(this.state.showMobileSidebar);
    return (<div className='hamburger-sidenav-container'>
      {/* <HamburgerIcon clickHandler={this.toggleSidebar}/> */}



      <div className='mob-sidenav-container'>
        <div className='mob-sidenav'>
          <NavLink exact to="/" activeClassName='active-route'>Home</NavLink>
          <NavLink to='/reactjs' activeClassName='active-route'>ReactJS</NavLink>
          <NavLink to='/javascript' activeClassName='active-route'>JavaScript</NavLink>
          <NavLink to='/redux' activeClassName='active-route'>Redux</NavLink>
          <NavLink to='/scss' activeClassName='active-route'>SCSS</NavLink>
        </div>
      </div>
    </div>);
  }
}
export default MobSidenav;