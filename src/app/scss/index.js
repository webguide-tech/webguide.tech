import React, { Component } from 'react';
import TopActionBar from '../common/topnav/TopActionBar';

export default class Page4 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className='body-container'>
      <TopActionBar heading='SCSS' />
      {/* <SideNav /> */}
    </div>
    );
  }
}