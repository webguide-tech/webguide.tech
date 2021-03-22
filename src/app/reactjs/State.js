import React, { Component } from 'react';
import TopActionBar from '../common/topnav/TopActionBar';

export default class StateComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <TopActionBar heading={'React State'} />
      <ul>
        <li>
          State is the place where the data comes from. You should always try to make your state as simple as possible and minimize number of stateful components.
        </li>
        <li>
          local or encapsulated in the component
        </li>
        <li>
          not usually accessible to any component other than the one that owns it
        </li>
        <li>
          a component may choose to pass its state down as props to its child components
        </li>
        <li>
          allows React components to change their output over time in response to user actions, netwrork responses etc,
        </li>
        <li>
          do not modify state directly using this.state=, always use this.setState({})
        </li>
        <li>
          The only place where you can assign this.state is the constructor
        </li>
        <li>
          State is reserved only for interactivity, that is, data that changes over time
        </li>
      </ul>
    </div>)
  }
}

// ## State ##

// - State updates may be asynchronous
//     - React may batch multiple setState() calls into a single update for performance
//     - Because this.props and this.state may be updated asynchronously, you should not rely on their values 
//         for calculating the next state.
//         // Wrong
//         this.setState({
//         counter: this.state.counter + this.props.increment,
//         });
//     - to fix this use the second form of setState() that accepts function as an argument rather than an object.
//         This function will receive previous state as the first argument, and the props at the time the update is 
//         applied as the second argument:
//         // Correct
//         this.setState((state, props) => ({
//         counter: state.counter + props.increment
//         }));
// - State updates are merged
//     - when we call setState(), React merges the object you provide with the current state object
//     - the meging is shallow, it only replaces the given objects keys and leaves the other keys unchanged






//  If you have, for example, ten components that need data from the state, you should create one container component that will keep the state for all of
//  them.

// The main difference between state and props is that props are immutable. This is why container component should define state that can be updated and 
// changed, while the child components should only pass data from the state using props.

// Default Props
// You can also set default property values directly on the component constructor instead of adding it to reactDom.render() element.

// App.jsx
// import React from 'react';

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>{this.props.headerProp}</h1>
//             <h2>{this.props.contentProp}</h2>
//          </div>
//       );
//    }
// }

// App.defaultProps = {
//    headerProp: "Header from props...",
//    contentProp:"Content from props..."
// }

// export default App;


// We are setting state in our parent component and passing it down the component tree using props. Inside render function, we are setting headerProp 
// and contentProp that are used in child components.

// the source of our data, which is now originally coming from the state. When we want to update it, we just need to update state, and all child 
// components will be updated

// Properties validation is useful way to force correct usage of your components. This will help you during development to avoid future bugs and problems
//  once your app become larger. It also makes code more readable since you can see how each component should be used.

// Validating Props
// In this example we are creating App component with all the props that we need. App.propTypes is used for props validation. If some of the props aren't
//  using correct type that we assigned, we will get console warning. After we specified validation patterns, we are setting App.defaultProps.


// import React from 'react';

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <h3>Array: {this.props.propArray}</h3>
//             <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
//             <h3>Func: {this.props.propFunc(3)}</h3>
//             <h3>Number: {this.props.propNumber}</h3>
//             <h3>String: {this.props.propString}</h3>
//             <h3>Object: {this.props.propObject.objectName1}</h3>
//             <h3>Object: {this.props.propObject.objectName2}</h3>
//             <h3>Object: {this.props.propObject.objectName3}</h3>
//          </div>
//       );
//    }
// }

// App.propTypes = {
//    propArray: React.PropTypes.array.isRequired,
//    propBool: React.PropTypes.bool.isRequired,
//    propFunc: React.PropTypes.func,
//    propNumber: React.PropTypes.number,
//    propString: React.PropTypes.string,
//    propObject: React.PropTypes.object
// }

// App.defaultProps = {
//    propArray: [1,2,3,4,5],
//    propBool: true,
//    propFunc: function(e){return e},
//    propNumber: 1,
//    propString: "String value...",

//    propObject: {
//       objectName1:"objectValue1",
//       objectName2: "objectValue2",
//       objectName3: "objectValue3"
//    }
// }

// export default App;

