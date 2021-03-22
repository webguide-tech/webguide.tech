import React, { Component } from 'react';
import TopActionBar from '../common/topnav/TopActionBar';

export default class Jsx extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <TopActionBar heading={'JSX'} />
      <ul>
        <li className='li-section'>
          JSX stands for JavaScipt Syntax Extension. As the same suggests, it's a syntax extension to JavaScipt
        </li>
        <li className='li-section'>
          JSX enables HTML and JavaScript to be combined to create elements
        </li>
        <li className='li-section'>
          React recommends the usage of JSX while development
          <ul>
            <li>
              It's not mandatory to use JSX
            </li>
            <li>
              React apps can also be developed without using JSX
            </li>
            <li>
              Using JSX makes React developoment easier
            </li>
          </ul>
        </li>
      </ul>
    </div>)
  }
}

// ##JSX##
// - JavaScript Syntax Extension
// const element = <h1>Hello, world!</h1>;
// - describes what the UI should look like
// - mixture of strings, html tags and JavaScript
// - similar to a templating launguage but with full power of JavaScript

// ##Why JSX?##
// - rendering logic is inherently coupled with other UI logic : how events are handled, how the UI changes over time, 
//     how the state changes over time, how the data is prepared for display
// - Before react, technologies were separated by putting markup and logic in separate files - Javascript and html
// - React separates the concerns with loosely coupled units calld components that contain both markup and logic

// ##JSX features##
// - React doesnot require JSX, but is helpful as visual aid when working with UI inside JavaScript
// - We can embed Javascript expressions in HTMl tags using JSX
//     - any valid JS expression
//     const name = 'Josh Perez';
//     const element = <h1>Hello, {name}</h1>;
//     ReactDOM.render(
//     element,
//     document.getElementById('root')
//     );
// - JSX is also an expression : after compilation JSX expressions becomes regular JS function calls and execute to JS objects
// - We can use JSX inside if else conditions, loops, assign it to variables, accept as arguments and return from functions
// - Use quotes or curly braces to specify attributes in JSX
// - Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes 
// (for string values) or curly braces (for expressions), but not both in the same attribute.
// - Since JSX is closer to JS than HTML, ReactDOM uses camelCase property naming convention instead of HTML attribute names
//     classname in HTML becomes className in JSX, tabindex becomes tabIndex

// - If a tag is empty, you may close it immediately with />, like XML:
// - JSX tags can contain children

// ##JSX Prevents Injection Attacks##
// It is safe to embed user input in JSX:
// const title = response.potentiallyMaliciousInput;
// // This is safe:
// const element = <h1>{title}</h1>;
// ReactDOM escapes any value before rendering them. This ensures that you can never inject anything that's not explicitly written in 
// your application. Everything is converted to string before rendering. This helps prevent XSS (cross-site-scripting) attacks.

// SX essentially allows us to write HTML in JavaScript! And also allows us to use JS within that by curly braces{}.


// React uses JSX for templating instead of regular JavaScript. It is not necessary to use it, but there are some pros that comes with it.

// JSX is faster because it performs optimization while compiling code to JavaScript.
// It is also type-safe and most of the errors can be caught during compilation.
// JSX makes it easier and faster to write templates if you are familiar with HTML.
// Using JSX
// JSX looks like regular HTML in most cases. We already used it in environment setup tutorial. Look at the code from App.jsx where we are returning div.

// App.jsx
// import React from 'react';

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             Hello World!!!
//          </div>
//       );
//    }
// }

// export default App;

// If you want to return more elements, you need to wrap it with one container element. Notice how we are using div as a wrapper for h1, h2 and p elements.

// App.jsx
// import React from 'react';

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Header</h1>
//             <h2>Content</h2>
//             <p>This is the content!!!</p>
//          </div>
//       );
//    }
// }

// export default App;

// Attributes
// You can use your own custom attributes in addition to regular HTML properties and attributes. When you want to add custom attribute, you need to use data- prefix. In example below we added data-myattribute as an attribute of p element.

// import React from 'react';

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Header</h1>
//             <h2>Content</h2>
//             <p data-myattribute = "somevalue">This is the content!!!</p>
//          </div>
//       );
//    }
// }

// export default App;

// JavaScript Expressions
// JavaScript expressions can be used inside of JSX. You just need to wrap it with curly brackets {}. Example below will render 2.

// import React from 'react';

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>{1+1}</h1>
//          </div>
//       );
//    }
// }

// export default App;

// You can not use if else statements inside JSX but you can use conditional (ternary) expressions instead. In example below variable i equals to 1 so the browser will render true, if we change it to some other value it will render false.

// import React from 'react';

// class App extends React.Component {
//    render() {

//       var i = 1;

//       return (
//          <div>
//             <h1>{i == 1 ? 'True!' : 'False'}</h1>
//          </div>
//       );
//    }
// }

// export default App;

// Styling
// React recommends using inline styles. When you want to set inline styles, you need to use camelCase syntax. React will also automatically append px after the number value on specific elements. You can see below how to add myStyle inline to h1 element.

// import React from 'react';

// class App extends React.Component {
//    render() {

//       var myStyle = {
//          fontSize: 100,
//          color: '#FF0000'
//       }

//       return (
//          <div>
//             <h1 style = {myStyle}>Header</h1>
//          </div>
//       );
//    }
// }

// export default App;

// Comments
// When writing comments you need to put curly brackets {} when you want to write comment within children section of a tag. It is good practice to always use {} when writing comments since you want to be consistent when writing the app.

// import React from 'react';

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Header</h1>
//             {//End of the line Comment...}
//             {/*Multi line comment...*/}
//          </div>
//       );
//    }
// }

// export default App;
// Naming Convention
// HTML tags are always using lowercase tag names, while React components starts with Uppercase.

// NOTE
// You should use className and htmlFor as XML attribute names instead of class and for.

// Since JSX is JavaScript, identifiers such as class and for are discouraged as XML attribute names. Instead, React DOM components expect DOM property names like className and htmlFor, respectively.

