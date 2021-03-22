import React, { Component } from 'react';
import TopActionBar from '../common/topnav/TopActionBar';

export default class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <TopActionBar heading={'ReactJS'} />
      <ul>
        <li className='li-section'>React is a front end library developed by Facebook
          <ul>
            <li>
              A libraby for building user interfaces
            </li>
          </ul>
        </li>
        <li>
          An open source JavaScript library
        </li>
        <li className='li-section'>It's used for handling view layer for web and mobile apps
          <ul>
            <li>
              React is used as the V layer in MVC
              </li>
          </ul>
        </li>
        <li className='li-section'>
          React encourages the building of composable user interfaces
          <ul>
            <li>
              We can create reusable UI components which present data that changes over time
            </li>
          </ul>
        </li>
        <li className='li-section'>
          React can also render on the server using Node
        </li>
        <li className='li-section'>
          React can power native apps using React Native
        </li>
        <li className='li-section'>
          React implements one-way/unidirectional data flow/binding
          <ul>
            <li>
              Makes it easy to predict the data flow
            </li>
            <li>
              Easy to identify and fix the bugs
            </li>
          </ul>
        </li>
      </ul>
    </div>)
  }
}




// React abstracts away the DOM from you, giving a simpler programming model and better performance. 

// React Advantages
// React uses virtual DOM which is JavaScript object. This will improve apps performance since JavaScript virtual DOM is faster than the regular DOM.

// React can be used on client and server side.

// Component and Data patterns improve readability which helps to maintain larger apps.

// React can be used with other frameworks.

// React Limitations
// React only covers view layer of the app so you still need to choose other technologies to get a complete tooling set for development.

// React is using inline templating and JSX. This can seem awkward to some developers.
// ReactJS allows us to create reusable UI components.