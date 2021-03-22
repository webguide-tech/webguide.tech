import React, { Component } from 'react';
import Hamburger from '../HamburgerIcon';
import MobSideNav from './MobileSidenav';
import { NavLink } from 'react-router-dom';

class MobileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobNav: false
    }
  }

  handleHamburgerClick = () => {
    let { showMobNav } = this.state;
    this.setState({ showMobNav: !showMobNav })
  }

  render() {
    console.log(this.state.showMobNav)
    return (<div className='mobile-header-container'>
      <NavLink exact to="/" activeClassName='active-route'> <div className='name-thumbnail'>Web Guide</div></NavLink>
      <Hamburger clickHandler={this.handleHamburgerClick} />
      {
        this.state.showMobNav &&
        <div id="myModal" class="modal" onClick={this.handleHamburgerClick}>
          <div class="modal-content">
            <span class="close">&times;</span>
            <p>Some text in the Modal..</p>
            <MobSideNav />
          </div>
        </div>
      }

    </div>);
  }

}
export default MobileHeader;

