// ## Controlled components ##
// - form data is handled by a react component through its state
// - it’s convenient to have a JavaScript function that handles the submission of the form and has access to the 
// data that the user entered into the form. The standard way to achieve this is with a technique called 
// “controlled components”.
// - In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and 
// update it based on user input. In React, mutable state is typically kept in the state property of components, 
// and only updated with setState().
// - React state serves as a single source of truth.
// - the React component that renders a form also controls what happens in that form on subsequent user input.
// An input form element whose value is controlled by React in this way is called a “controlled component”.
// - With a controlled component, the input’s value is always driven by the React state. While this means you 
// have to type a bit more code, you can now pass the value to other UI elements too, or reset it from other 
// event handlers.
// - in HTML <textarea> has it's value as children
// <textarea>Some text</textarea>
// - in HTML <select><option value='' selected/></select>
// - in React all these form elements work similarly, they have a value and a changeHandler
// - We can also pass an array to the value attribute, allowing to select multiple elements in the dropdown
// <select multiple={true} value={['B', 'C']}>
// - in HTML <input type='file'/> lets the user select one or more file from their device storage to be uploaded 
// to a server pr manipulated by JavaScript via the File API

// - When you need to handle multiple controlled input elements, you can add a name attribute to each element 
// and let the handler function choose what to do based on the value of event.target.name.
// - Specifying the value prop on a controlled component prevents the user from changing the input unless you desire so. If you’ve specified a value but the input is still editable, you may have accidentally set value to undefined or null.
// - more code but cleaner way of implementing forms


// import React from 'react';

// class App extends React.Component {

//    constructor(props) {
//       super(props);
		
//       this.state = {
//          data: 'Initial data...'
//       }

//       this.updateState = this.updateState.bind(this);

//    };

//    updateState(e) {
//       this.setState({data: e.target.value});
//    }

//    render() {
//       return (
//          <div>
//             <input type = "text" value = {this.state.data} 
//                onChange = {this.updateState} />
//             <h4>{this.state.data}</h4>
//          </div>
//       );
//    }
// }

// export default App;

// ==>Controlled components

// Child Events
// When you need to update state of the parent component from its child, you can create event handler (updateState) in the parent component and pass it as 
// a prop (updateStateProp) to your child component where you can just call it.

