import React, { Component } from 'react';
import TopActionBar from '../common/topnav/TopActionBar';

export default class Element extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <TopActionBar heading={'React Element'} />
      <ul>
        <li>
          Elements are the smallest building blocks of React apps
                </li>
        <li>
          An element describes what you want to see on the screen
                </li>
        <li>
          Example:
                    <ul>
            <li>
              <code>
                {'const element = <h1>Hello, world</h1>;'}
              </code>
            </li>
          </ul>
        </li>
        <li>
          Unlike browser DOM elements, React elements are plain objects, and are cheap to create.
                </li>
        <li>
          React DOM takes care of updating the DOM to match the React elements
                </li>
        <li>
          Elements are what components are “made of”
        </li>
        <li>
          React elements are immutable. Once you create an element, you can’t change its children or attributes
          <ul>
            <li>
              An element is like a single frame in a movie: it represents the UI at a certain point in time
            </li>
            <li>
              The only way to update the UI is to create a new element, and pass it to ReactDOM.render().
            </li>
          </ul>
        </li>
      </ul>
    </div>)
  }
}

// * building blocks of React apps: elements and components
// * can create complex apps from smaller reusable pieces of code

// ## JSX elements ##
// - the smallest building blocks of React apps
// - describes what we want to see on the screen
// - they are basically JS objects
// - React reads these elements/objects and uses them to construct or update the DOM
// - Unlike browser DOM elements, React elements are plain objects and are cheap to create
// - React DOM takes care of updating the DOM to match react elements
// - elements are what components are made of
// - elements can also represent user defined components
//     const element = <Welcome name="Sara" />;
// - React elements are immutable
//     - Once we create an element, we can't change its children or attributes
//     - An element is like a single frame in movie; it represents the UI at certain point of time
//     - the only way to update UI is to create a new element and pass it to ReactDOM.render()
