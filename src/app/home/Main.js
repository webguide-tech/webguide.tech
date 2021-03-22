import React, { Component } from 'react';
import TopActionBar from '../common/topnav/TopActionBar';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { showLogin: false, showRegister: false };
  }

  render() {
    return (<div className='main-container'>
      <TopActionBar heading='Home' />
    </div>);
  }
}
