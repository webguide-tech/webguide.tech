import React, {Component} from 'react';
import TopActionBar from '../common/topnav/TopActionBar';

export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div>
            <TopActionBar heading={'React Life cycle methods'} />
            <ul>
                <li>
                    Mounting - Component is rendered to the DOM for the first time
                </li>
                <li>
                    Updating
                </li>
                <li>
                    Unmounting - Component is being removed from the DOM
                </li>
            </ul>
        </div>)
    }
}

// ## Life cycle methods ##
// 2. Unmounting - Component is removed from the DOM
//     - free up resources taken by the component when it is destroyed

// Set State
// setState() method is used for updating the state of the component. This method will not replace the state but only add changes to original state.

// Force Update
// Sometimes you want to update the component manually. You can achieve this by using forceUpdate() method.

// import React from 'react';

// class App extends React.Component {
//    constructor() {
//       super();
//       this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
//    };

//    forceUpdateHandler() {
//       this.forceUpdate();
//    };

//    render() {
//       return (
//          <div>
//             <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
//             <h4>Random number: {Math.random()}</h4>
//          </div>
//       );
//    }
// }

// export default App;

// Find Dom Node
// For DOM manipulation, we can use ReactDOM.findDOMNode() method. First we need to import react-dom.

// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//    constructor() {
//       super();
//       this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
//    };

//    findDomNodeHandler() {
//       var myDiv = document.getElementById('myDiv');
//       ReactDOM.findDOMNode(myDiv).style.color = 'green';
//    }
	
//    render() {
//       return (
//          <div>
//             <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
//             <div id = "myDiv">NODE</div>
//          </div>
//       );
//    }
// }

// export default App;
// The color of myDiv element is changed to green, once the button is clicked.


// Lifecycle Methods
// componentWillMount is executed before rendering, on both server and client side.

// componentDidMount is executed after first render only on the client side. This is where AJAX requests and DOM or state updates should occur. This method is also used for integration with other JavaScript frameworks and any functions with delayed execution like setTimeout or setInterval. We are using it to update the state so we can trigger the other lifecycle methods.

// componentWillReceiveProps is invoked as soon as the props are updated before another render is called. We triggered it from setNewNumber when we updated the state.

// shouldComponentUpdate should return true or false value. This will determine if component will be updated or not. This is set to true by default. If you are sure that component doesn't need to render after state or props are updated, you can return false value.

// componentWillUpdate is called just before rendering.

// componentDidUpdate is called just after rendering.

// componentWillUnmount is called after the component is unmounted from the dom. We are unmounting our component in main.js.

