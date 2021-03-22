import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import HamburgerIcon from '../HamburgerIcon';

class MobileSubNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileSidebar: false
    }
  }

  render() {
    console.log(this.state.showMobileSidebar);
    const { tabs } = this.props;
    return (<div className='hamburger-sidenav-container'>
      {/* <HamburgerIcon clickHandler={this.toggleSidebar}/> */}



      <div className='mob-sidenav-container'>
        <div className='top-sidenav'>
          {
            tabs.map((tab) => <NavLink to={tab.id} activeClassName='active-route'>{tab.title}</NavLink>)
          }
        </div>
      </div>
    </div>);
  }
}
export default MobileSubNav;