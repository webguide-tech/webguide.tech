import React, { Component } from 'react';
import TopActionBar from '../common/topnav/TopActionBar';

export default class Page2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='body-container'>
        <TopActionBar heading='JavaScript' />
        {/* <SideNav /> */}
      </div>
    )
  }
}