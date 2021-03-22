import React, { Component } from 'react';
import Main from './Main';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div className='mainpage-container'>
      <Main users={this.props.users && this.props.users} />
    </div>);
  }
}
export default MainPage;
