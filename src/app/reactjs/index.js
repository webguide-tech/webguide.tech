import React, { Component, Fragment } from 'react';
import TopActionBar from '../common/topnav/TopActionBar';
import SideNav from '../common/sidenav/Sidenav';
import Intro from './Intro';
import JsxComponent from './Jsx';
import Vdom from './Vdom';
import Element from './Element';
import Components from './Component';
import StateComponent from './State';
import PropComponent from './Props';
import LifeCycle from './LifeCycle';
import Keys from './Keys';
import Refs from './Refs';
import Hoc from './HOC';
import Best from './BestPractices';
import Interview from './Interview';
import Hooks from './Hooks';
import Error from './ErrorBoundary';
import ReactDomComponent from './ReactDOM';
export default class Page1 extends Component {
  constructor(props) {
    super(props);
  }

  getRenderUI = () => {
    const { page } = this.props;
    console.log(page);
    if (page === 'page1') {
      return <Intro/>
    } else if (page === 'page2') {
      return <JsxComponent/>
    }
    else if (page === 'page3') {
      return <Vdom/>
    }
    else if (page === 'page4') {
      return <Element/>
    }
    else if (page === 'page5') {
      return <Components/>
    } else if (page === 'page6') {
      return <StateComponent/>
    } else if (page === 'page7') {
      return <PropComponent/>
    } else if (page === 'page8') {
      return <LifeCycle/>
    } else if (page === 'page9') {
      return <Keys/>
    } else if (page === 'page10') {
      return <Refs/>
    } else if (page === 'page11') {
      return <Hoc/>
    } else if (page === 'page12') {
      return <Best/>
    } else if (page === 'page13') {
      return <Interview/>
    } else if (page === 'page14') {
      return <Hooks/>
    } else if (page === 'page15') {
      return <Error/>
    }
    else if (page === 'page16') {
      return <ReactDomComponent/>
    }

    return null;
  }

  render() {

    const tabs = [
      { id: '/reactjs/intro', title: 'Introduction' },
      { id: '/reactjs/jsx', title: 'JSX' },
      { id: '/reactjs/reactdom', title: 'ReactDOM' },
      { id: '/reactjs/vdom', title: 'Virtual DOM' },
      { id: '/reactjs/element', title: 'Element' },
      { id: '/reactjs/component', title: 'Component' },
      { id: '/reactjs/state', title: 'State' },
      { id: '/reactjs/props', title: 'Props' },
      { id: '/reactjs/lifecycle', title: 'Life cycle methods' },
      { id: '/reactjs/keys', title: 'Keys' },
      { id: '/reactjs/refs', title: 'Refs' },
      { id: '/reactjs/hoc', title: 'HOC' },
      { id: '/reactjs/best', title: 'Best practices' },
      { id: '/reactjs/interview', title: 'Interview questions' },
      { id: '/reactjs/error', title: 'Error boundary' },
      { id: '/reactjs/hooks', title: 'Hooks' }
      //events
      //top-down
      //controlled
      //uncontrolled
      //forms?
      // Lifting state up
      // accessibility
      // setup

    ];

    return (
      <div className='skills-wrapper'>
        <SideNav tabs={tabs} />
        <div className='page1-container'>
          {
            this.getRenderUI()
          }
        </div>
      </div>
    );
  }
}

// react
// 1) fast rendering
// 2) modular
// 3) reusable
// 4) controlled components: xss injections
// 5) jsx
// how to write conditional rendering



// jsx
// 1) elements can be used like variables/js expresssions
// 2) can write html in js file
//  a JSX element can be saved in a variable, passed to a function, stored in an object or array
//  like html: can have attricutes, nested elements
 
// ReactDOM is the name of a JavaScript library. This library contains several React-specific methods, all of which deal with the DOM in some way or another.
// ReactDOM.render() is the most common way to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM. That is the way to make a JSX expression appear onscreen.
// ReactDOM.render()'s first argument should be a JSX expression, and it will be rendered to the screen.
// The first argument is appended to whatever element is selected by the second argument.
// That element acted as a container for ReactDOM.render()'s first argument!

// ReactDOM.render()'s first argument should evaluate to a JSX expression, it doesn't have to literally be a JSX expression.

// The first argument could also be a variable, so long as that variable evaluates to a JSX expression.

//  JSX gets translated into JavaScript, and class is a reserved word in JavaScript.

// When JSX is rendered, JSX className attributes are automatically rendered as class attributes.
// JSX: self closing tags- end tags are must

// Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript! JSX doesn't add numbers - it reads them as text, just like HTML.

// You need a way to write code that says, "Even though I am located in between JSX tags, treat me like ordinary JavaScript and not like JSX."

// You can do this by wrapping your code in curly braces.


// A key is a JSX attribute. The attribute's name is key. The attribute's value should be something unique, similar to an id attribute.

// keys don't do anything that you can see! React uses them internally to keep track of lists. If you don't use keys when you're supposed to, React might accidentally scramble your list-items into the wrong order.

// Not all lists need to have keys. A list needs keys if either of the following are true:

// The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must "remember" whether it was checked off. The items shouldn't get amnesia when they render.
// A list's order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
// If neither of these conditions are true, then you don't have to worry about keys. If you aren't sure then it never hurts to use them!

// A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML
// The methods imported from 'react-dom' are meant for interacting with the DOM

// The methods imported from 'react' don't deal with the DOM at all. They don't engage directly with anything that isn't part of React.

// To clarify: the DOM is used in React applications, but it isn't part of React. After all, the DOM is also used in countless non-React applications. Methods imported from 'react' are only for pure React purposes, such as creating components or writing JSX elements.

// Component class variable names must begin with capital letters!

// This adheres to JavaScript's class syntax. It also adheres to a broader programming convention in which class names are written in UpperCamelCase.

// In addition, there is a React-specific reason why component class names must always be capitalized. 
// JSX elements can be either HTML-like, or component instances. JSX uses capitalization to distinguish between the two! That is the React-specific reason why component class names must begin with capital letters. In a JSX element, that capitalized first letter says, "I will be a component instance and not an HTML tag."

// a multi-line JSX expression should always be wrapped in parentheses
// this refers to an instance of your component class,

// component is a like factory; multiple instances can be generated

// named export and default export
// When you use named exports, you always need to wrap your imported names in curly braces, such as import { faveManifestos, alsoRan } from './Manifestos';.

// components interaction
// 1) render each other
// 2) props: info passed from one component to other
// pass props to a component through attributes




// Login::::::::::::;
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Greeting } from './Greeting';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>
//           Hullo and, "Welcome to The Newzz," "On Line!"
//         </h1>
//         <Greeting name="Alison" signedIn={false}/>
//         <article>
//           Latest:  where is my phone?
//         </article>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <App />, 
//   document.getElementById('app')
// );



// import React from 'react';
// import ReactDOM from 'react-dom';

// export class Greeting extends React.Component {
//   render() {
//   	if (this.props.signedIn == false) {
//   	  return <h1>GO AWAY</h1>;
//   	} else {
//   	  return <h1>Hi there, {this.props.name}!</h1>;
//   	}
//   }
// }


// Names like onClick only create event listeners if they're used on HTML-like JSX elements. Otherwise, they're just ordinary prop names.

// this.props.children will return everything in between a component's opening and closing JSX tags.

// So far, all of the components that you've seen have been self-closing tags, such as <MyComponentClass />. They don't have to be! You could write <MyComponentClass></MyComponentClass>, and it would still work.

// this.props.children would return everything in between <MyComponentClass> and </MyComponentClass>.


// import React from 'react';
// import { LilButton } from './LilButton';

// class BigButton extends React.Component {
//   render() {
//     console.log(this.props.children);
//     return <button>Yo I am big</button>;
//   }
// }


// // Example 1
// <BigButton>
//   I am a child of BigButton.
// </BigButton>


// // Example 2
// <BigButton>
//   <LilButton />
// </BigButton>


// // Example 3
// <BigButton />
// Look at BigButton.js. In Example 1, <BigButton>'s this.props.children would equal the text, "I am a child of BigButton."

// In Example 2, <BigButton>'s this.props.children would equal a <LilButton /> component.

// In Example 3, <BigButton>'s this.props.children would equal undefined.


// If a component has more than one child between its JSX tags, then this.props.children will return those children in an array. However, if a component has only one child, then this.props.children will return the single child, not wrapped in an array.

// defaultProps
// proptypes

// why super(props)


// this.setState() takes an object, and merges that object with the component's current state. If there are properties in the current state that aren't part of that object, then those properties remain how they were.

// Patterns in ReactJS
// 1)Stateless components inherit from stateful components
// Stateful" describes any component that has a state property; "stateless" describes any component that does not.

// In our pattern, a stateful component passes its state down to a stateless component.
// A component should never update this.props
// A React component should use props to store information that can be changed, but can only be changed by a different component.

// A React component should use state to store information that the component itself can change.

// bind methods to that instance of component

// "properties flow down; actions flow up"


// What is React?

// React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications.

// The key point in this answer is that React’s core purpose is to build UI components; it is often referred to as just the “V” (View) in an “MVC” 
// architecture. Therefore it has no opinions on the other pieces of your technology stack and can be seamlessly integrated into any application.

// React focuses exclusively on the creation of components, and has few (if any) opinions about an application’s architecture. This allows a developer an
//  incredible amount of flexibility in choosing the architecture they deem “best” — though it also places the responsibility of choosing (or building) 
//  those parts on the developer.

// Question #2: What happens during the lifecycle of a React component?

// High-Level Component Lifecycle

// At the highest level, React components have lifecycle events that fall into three general categories:

// Initialization
// State/Property Updates
// Destruction
// Every React component defines these events as a mechanism for managing its properties, state, and rendered output. Some of these events only happen 
// once, others happen more frequently; understanding these three general categories should help you clearly visualize when certain logic needs to be 
// applied.

// For example, a component may need to add event listeners to the DOM when it first mounts. However, it should probably remove those event listeners 
// when 
// the component unmounts from the DOM so that irrelevant processing does not occur.

// class MyComponent extends React.Component {
//     // when the component is added to the DOM...
//     componentDidMount() {
//         window.addEventListener(‘resize’, this.onResizeHandler);
//     }

//     // when the component is removed from the DOM...
//     componentWillUnmount() {
//         window.removeEventListener(‘resize’, this.onResizeHandler);
//     }

//     onResizeHandler() {
//         console.log(‘The window has been resized!’);
//     }
// }


// https://s3.amazonaws.com/codementor_content/2016-Jul/reactjs-qs1.png

// Take a look at the diagram above. The events under “Initialization” only happen when a component is first initialized or added to the DOM. Similarly, 
// the events under “Destruction” only happen once (when the component is removed from the DOM). However, the events under “Update” happen every time the properties or state of the component change.

// life cycle methods help improve the performance
// For example, components will automatically re-render themselves any time their properties or state change. However, in some cases a component might not need to update — so preventing the component from re-rendering might improve the performance of our application.

// class MyComponent extends React.Component {

//     // only re-render if the ID has changed!
//     shouldComponentUpdate(nextProps, nextState) {
//         return nextProps.id === this.props.id;
//     }
// }

// Question #3: What can you tell me about JSX?

// When Facebook first released React to the world, they also introduced a new dialect of JavaScript called JSX that embeds raw HTML templates inside JavaScript code. JSX code by itself cannot be read by the browser; it must be transpiled into traditional JavaScript using tools like Babel and webpack. While many developers understandably have initial knee-jerk reactions against it, JSX (in tandem with ES2015) has become the defacto method of defining React components.

// class MyComponent extends React.Component {
//     render() {
//         let props = this.props;

//         return (
//             <div className=”my-component”>
//                 <a href={props.url}>{props.name}>/a>
//             </div>
//         );
//     }
// }


// Developers do not have to use JSX (and ES2015) to write an application in React.

// This is certainly true. Having said that, many React developers prefer to use JSX as its syntax is far more declarative and reduces overall code complexity. Facebook certainly encourages it in all of their documentation!

// Adopting JSX allows the developer to simultaneously adopt ES2015 — giving immediate access to some wonderful syntactic sugar.

// ES2015 introduced a variety of new features to JavaScript that makes writing large applications far easier than ever before: classes, block scoping via let, and the new spread operator are just a small portion of the additions.

// import AnotherClass from ‘./AnotherClass’;

// class MyComponent extends React.Component {
//     render() {
//         let props = this.props;

//         return (
//             <div className=”my-component”>
//                 <AnotherClass {...props} />
//             </div>
//         );
//     }
// }

// }
// But while ES2015 is becoming more and more widespread, it still is far from widely supported by the major browsers — so you’ll need to use a tool like Babel or webpack to convert everything into legacy ES5 code.

// If you have built a React application using JSX and ES2015, be sure to speak about some specific pros or cons you encountered:


// Question #4: Are you familiar with Flux?

// Flux is an architectural pattern that enforces unidirectional data flow — its core purpose is to control derived data so that multiple components can interact with that data without risking pollution.

// The Flux pattern is generic; it’s not specific to React applications, nor is it required to build a React app. However, Flux is commonly used by React developers because React components are declarative — the rendered UI (View) is simply a function of state (Store data).

// react.js interview questions
// https://s3.amazonaws.com/codementor_content/2016-Jul/reactjs-qs2.png


// In the Flux pattern, the Store is the central authority for all data; any mutations to the data must occur within the store. Changes to the Store data are subsequently broadcast to subscribing Views via events. Views then update themselves based on the new state of received data.

// To request changes to any Store data, Actions may be fired. These Actions are controlled by a central Dispatcher; Actions may not occur simultaneously, ensuring that a Store only mutates data once per Action.

// The strict unidirectional flow of this Flux pattern enforces data stability, reducing data-related runtime errors throughout an application.


// Flux vs MVC

// Traditional MVC patterns have worked well for separating the concerns of data (Model), UI (View) and logic (Controller) — but many web developers have discovered limitations with that approach as applications grow in size. Specifically, MVC architectures frequently encounter two main problems:

// Poorly defined data flow: The cascading updates which occur across views often lead to a tangled web of events which is difficult to debug.
// Lack of data integrity: Model data can be mutated from anywhere, yielding unpredictable results across the UI.

// With the Flux pattern complex UIs no longer suffer from cascading updates; any given React component will be able to reconstruct its state based on the data provided by the store. The flux pattern also enforces data integrity by restricting direct access to the shared data.

// During a technical interview, it would be great to discuss the differences between the Flux and MVC design patterns within the context of a specific example:

// For example, imagine we have a “master/detail” UI in which the user can select a record from a list (master view) and edit it using an auto-populated form (detail view).

// With an MVC architecture, the data contained within the Model is shared between both the master and detail Views. Each of these views might have its own Controller delegating updates between the Model and the View. At any point the data contained within the Model might be updated — and it’s difficult to know where exactly that change occurred. Did it happen in one of the Views sharing that Model, or in one of the Controllers? Because the Model’s data can be mutated by any actor in the application, the risk of data pollution in complex UIs is greater than we’d like.

// With a Flux architecture, the Store data is similarly shared between multiple Views. However this data can’t be directly mutated — all of the requests to update the data must pass through the Action > Dispatcher chain first, eliminating the risk of random data pollution. When updates are made to the data, it’s now much easier to locate the code requesting those changes.

// Flux pattern encourages the use of immutable data. Because the store is the central authority on all data, any mutations to that data must occur within the store. The risk of data pollution is greatly reduced.

// Testing

// One of the most valuable aspects of applications built on Flux is that their components become incredibly easy to test. Developers can recreate and test the state of any React component by simply updating the store — direct interactions with the UI  (with tools like Selenium) are no longer necessary in many cases.

// Popular Flux Libraries

// While Flux is a general pattern for enforcing data flow through an application, there exist many implementations from which to choose from. There are nuances between each implementation, as well as specific pros and cons to consider. In a technical interview, you should be prepared to discuss any real-world experience you have using Flux.

// For example, you might discuss:

// <Redux: perhaps the most popular Flux library today.
// Alt.js: another popular library for managing data in React applications.

// Question #5: What are stateless components?

// If React components are essentially state machines that generate UI markup, then what are stateless components?

// Stateless components (a flavor of “reusable” components) are nothing more than pure functions that render DOM based solely on the properties provided to them.

// const StatelessCmp = (props) => {
//     return (
//         <div className=”my-stateless-component”>
//             {props.name}: {props.birthday}
//         </div>
//     );
// };

// // ---
// ReactDOM.render(
//     <StatelessCmp name=”Art” birthday=”10/01/1980” />,
//     document.getElementById(“main”)
// );

// As you can see, this component has no need for any internal state — let alone a constructor or lifecycle handlers. The output of the component is purely a function of the properties provided to it.


// Compare and contrast creating React Components in ES5 and ES2015 (also known as ES6). What are the advantages and disadvantages of using one or the other? Include notes about default props, initial state, PropTypes, and DisplayName.

// Creating React Components the ES5 way involves using the React.createClass() method:


// var Comments = React.createClass({

//     displayName: 'Comments',

//     getInitialState: function(){
//         return {comments: []}
//     },

//     getDefaultProps: function(){
//         return {some_object: {a:1, b:2, c:3}}
//     },

//     _handleClick: function(){
//         alert('hello world!')
//     },

//     render: function(){
//         return <div>
//             There are {this.state.comments.length} comments
//             <button onClick={this._handleClick}>click me!</button>
//         </div>
//     }
// })
// This Comments Component can now be rendered either inside another React Component or directly in the call to ReactDOM.render():

// ReactDOM.render(<Comments />, document.querySelector('.app'))

// ES5 Components have some particular qualities, which we’ll note:

// Like the above example, to set the state to an initial value, create the getInitialState() function on the Component. What it returns will be the initial state for a Component when rendered.
// Additionally, you can set the default props for the component to have a certain value with the getDefaultProps() method on the ES5 version.
// The displayName is used in debugging and error reporting by React. If you use JSX, then the displayName is automatically filled out.
// For some, it is common practice to denote a custom method added to a React Component by prefixing it with an underscore, hence _handleClick. _handleClick is passed as the onClick callback for a button in the code above. We can’t do this so easily in the ES6 API of React, because the ES5 version has autobinding, but the ES6 does not. Let’s take a look at what autobinding provides:
// Auto-binding

// Consider the following piece of code:

// var thing = {
//     name: 'jen',
//     speak: function(){ console.log(this.name) }
// }

// window.addEventListener('keyup', thing.speak)
// Invoking thing.speak() in the console will log "jen", but pressing a key will log undefined because the context of the callback is the global object. The browser’s global object – window – becomes this inside the speak() function, so this.name becomes window.name, which is undefined.

// React in ES5 automatically does autobinding, effectively doing the following:

// window.addEventListener('keyup', thing.speak.bind(thing))
// Autobinding automatically binds our functions to the React Component instance so that passing the function by reference in the render() works seamlessly.

// Creating React Components the ES6 way works a little differently, favoring the ES6 class ... extends ... syntax, and no autobinding feature:

// class Comments extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {comments: []}
//     }

//     _handleClick(){
//         alert('hello world!')
//     }

//     render(){
//         return <div>
//             There are {this.state.comments.length} comments
//             <button onClick={() => this._handleClick}>click me!</button>
//         </div>
//     }
// }
// Comments.defaultProps = {a:1, b:2, c:3}
// Comments.displayName = 'Comments'
// Notice that in ES6, we have a constructor() that we use to set the initial state,
// We can add default props and a display name as properties of the new class created, and
// The render() method, which works as normal, but we’ve had to alter how we pass in the callback function. This current approach (<button onClick={() => this._handleClick}>click me!</button>) will create a new function each time the component is re-rendered; so if it becomes a performance bottleneck, you can always bind manually and store the callback:
//     class Comments extends React.Component {
//         constructor(props){
//             super(props)
//             // this._handleClick = this._handleClick.bind(this)
//         }
//         // ...
//         render(){
//             return <button onClick={this._handleClick}> click me! </button>
//             // or
//             return  <button onClick={this._handleClick.bind(this)}> click me! </button>
//         }
//     }
// Many React utility libraries on npm provide a single function to bind all handlers in the constructor, just like React does:

// class Comments extends React.Component {
//     constructor(props){
//         super(props)
//         // this._handleClick = this._handleClick.bind(this)
//     }
//     // ...
//     render(){
//         return <button onClick={this._handleClick}> click me! </button>
//         // or
//         return  <button onClick={this._handleClick.bind(this)}> click me! </button>
//     }
// }



// Explain the Virtual DOM, and a pragmatic overview of how React renders it to the DOM.

// The Virtual DOM is an interesting concept; it’s a complex idea that boils down into a much simpler algorithm.

// In React, if we create simple ES6 class and print it out, we have a function (as all functions can be used as a constructor in JavaScript):

// const app = () => {
//     let React = react,
//         {Component} = React,
//         DOM = reactDom

//     class Comments extends Component {
//         constructor(props){ super(props) }
//         render(){ return <div>test</div> }
//     }

//     console.log(Comments)
// }

// require('react', 'react-dom').then(app)
// The console.log(Comments) gives us something that looks like this (after compiled by Babel from ES6 to ES5):

// function Comments(props) {
//     _classCallCheck(this, Comments);

//     return _possibleConstructorReturn(this, Object.getPrototypeOf(Comments).call(this, props));
// }
// When we write something to draw a React Component to the screen, we might have something like the following:

// DOM.render(<Comments />, document.body)
// The JSX gets transpiled into ES5 by Babel as well:

// DOM.render(React.createElement(Comments, null), document.body);
// We can see that <Comments /> is transpiled directly into React.createElement(Comments, null). This is where we can see what a Virtual DOM object actually is: a plain JavaScript Object that represents the tag to be rendered onto the screen.

// Let’s inspect the output of React.createElement():

// console.log(<div/>)
// // or
// console.log(React.createElement('div', null))
// This gives us:

// {"type":"div","key":null,"ref":null,"props":{},"_owner":null,"_store":{}}
// See how the type is a string? DOM.render({...}) gets this object above and looks at the type, and decides whether or not to reuse an existing <div> element on the DOM or create a new <div> and append it.

// The Virtual DOM is not a simple Object – it is a recursive structure. For example, if we add two elements beneath the <div/>:

// console.log(<div><span/><button/></div>)
// // or
// console.log(React.createElement(
//     'div',
//     null,
//     React.createElement('span', null),
//     React.createElement('button', null)
// ))
// What we get is a nested Object-tree:

// {
//     "type":"div",
//     "key":null,
//     "ref":null,
//     "props":{
//         "children": [
//             {"type":"span","key":null,"ref":null,"props":{}},
//             {"type":"button","key":null,"ref":null,"props":{}}
//         ]
//     }
// }
// This is why, in a React Component’s code, we can access the child and ancestor elements via this.props.children. What React will do is walk down a very deep tree of nested Objects (depending on your UI complexity), each sitting in their parent element’s children.

// One thing to note is that the type so far has just been a string. When a React Element is made from a custom Component (like Comments above), the type is a function:

// console.log(<Comments />)
// // or
// console.log(React.createElement(Comments, null))
// gives us:

// {
//     "key":null,
//     "ref":null,
//     "props":{},
//     “type”: function Component() { ... }
	
	
	
	
// 	Explain the standard JavaScript toolchain, transpilation (via Babel or other compilers), JSX, and these items’ significance in recent development. What sort of tools might you use in the build steps to optimize the compiled output React code?
// 	The bleeding edge JavaScript toolchain can seem quite complex, and it’s very important to feel confident in the toolchain and to have a mental picture of how the pieces fit together.

// There are a couple primary pillars in the JavaScript toolchain: Dependency Management, Linting, Style-checking, Transpilation, and Compilation, Minification, Source-Mapping.

// Typically, we use build tools like Gulp, Watchify/Browserify, Broccoli, or Webpack to watch thea filesystem for file events (like when you add or edit a file). After this occurs, the build tool is configured to carry out a group of sequential or parallel tasks.

// This part is the most complex piece, and is the center of the development process.

// The rest of the tools belong in that group of sequential or parallel tasks:

// Style linting - typically a linter like JSCS is used to ensure the source code is following a certain structure and style
// Dependency Management - for JavaScript projects, most people use other packages from npm; some plugins exist for build systems (e.g. Webpack) and compilers (e.g. Babel) that allow automatic installation of packages being imported or require()‘d
// Transpilation - a specific sub-genre of compilation, transpilation involves compiling code from one source version to another, only to a similar runtime level (e.g. ES6 to ES5)
// Compilation - specifically separate from transpiling ES6 and JSX to ES5, is the act of including assets, processing CSS files as JSON, or other mechanisms that can load and inject external assets and code into a file. In addition, there are all sorts of build steps that can analyze your code and even optimize it for you.
// Minification and Compression - typically part of – but not exclusively controlled by – compilation, is the act of minifying and compressing a JS file into fewer and/or smaller files
// Source-Mapping - another optional part of compilation is building source maps, which help identify the line in the original source code that corresponds with the line in the output code (i.e. where an error occurred)

// For React, there are specific build tool plugins, such as the babel-react-optimize presets that involves compiling code into a format that optimizes React, such as automatically compiling any React.createElement() calls into a JavaScript Object that inlines right into the source code:

// class MyComponent extends React.Component {
//   render() {
//     return (
//       <div className={this.props.className}>
//         <span>Hello World</span>
//       </div>
//     );
//   }
// }
// becomes

// class MyComponent extends React.Component {
//   render() {
//     return (
//       _jsx('div', { className: this.props.className }, void 0,
//         _jsx('span', {}, void 0, 'Hello World')
//       )
//     );
//   }
// }


// Compare and contrast the various React Component lifecycle methods. How might understanding these help build certain interfaces/features?

// There are several React lifecycle methods that help us manage the asynchronous and non-determinate nature of a Component during it’s lifetime in an app – we need provided methods to help us handle when a component is created, rendered, updates, or removed from the DOM.

// Let’s first classify and define the life-cycle methods:

// The “Will’s” - invoked right before the event represented occurs.

// componentWillMount() - Invoked once, both on the client and server, immediately before the initial rendering occurs. If you call setState within this method, render() will see the updated state and will be executed only once despite the state change.
// componentWillReceiveProps(object nextProps) - Invoked when a component is receiving new props. This method is not called for the initial render. Calling this.setState() within this function will not trigger an additional render. One common mistake is for code executed during this lifecycle method to assume that props have changed.
// componentWillUnmount() - Invoked immediately before a component is unmounted from the DOM. Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount.
// componentWillUpdate(object nextProps, object nextState) - Invoked immediately before rendering when new props or state are being received. This method is not called for the initial render.
// The “Did’s”

// componentDidMount() - Invoked once, only on the client (not on the server), immediately after the initial rendering occurs. At this point in the lifecycle, you can access any refs to your children (e.g., to access the underlying DOM representation). The componentDidMount() method of child components is invoked before that of the parent component.

// componentDidUpdate(object prevProps, object prevState) - Invoked immediately after the component’s updates are flushed to the DOM. This method is not called for the initial render. Use this as an opportunity to operate on the DOM when the component has been updated.
// The “Should’s”

// shouldComponentUpdate(object nextState, object nextProps) - Invoked before rendering when new props or state are being received. This method is not called for the initial render or when forceUpdate() is used. Use this as an opportunity to return false when you’re certain that the transition to the new props and state will not require a component update.
// Having a strong understanding of how these fit together – and how setState() or forceUpdate() affect the lifecycle – will help the conscious React developer build robust UIs.

// How would you create Higher Order Components (HOCs) in React?

// Higher Order Components (HOCs) are the coined term for a custom Component that accepts dynamically provided children. For example, let’s make <LazyLoad /> Component that takes child image tags as children, waits until the <LazyLoad /> Component is scrolled into view, and then loads the images they point to in the background (before rendering them to the DOM).

// An HOC accepts children via props:

// DOM.render(
//     <LazyLoad>
//         <img src="https://media.giphy.com/media/HhvUpQhBWMtwc/200.gif"/>
//         <img src="https://media2.giphy.com/media/3oEduUDvycvu3GYkdG/200w.gif"/>
//         <img src="https://media0.giphy.com/media/142UITjG5GjIRi/200w.gif" />
//     </LazyLoad>,
//     document.body)
// Creating an HOC means handling this.props.children in the Component’s code:

// interactive example can be found at https://goo.gl/ns0B6j
// class LazyLoad extends Component {
//     constructor(p){
//         super(p)
//         this.state = { loaded:0 }
//         this._scroll = this._scroll.bind(this)
//     }
//     _scroll(){
//         let el = DOM.findDOMNode(this)
//         let {top} = el.getBoundingClientRect()
//         let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
//         if(top < (viewportHeight + this.props.top)) {
//             window.removeEventListener('scroll', this._scroll)
//             this.setState({loaded:1})
//         }
//     }
//     componentDidMount(){
//         window.addEventListener('scroll', this._trackYPosition)
//         this._scroll()
//     }
//     componentWillUnmount(){
//         window.removeEventListener('scroll', this._trackYPosition)
//     }
//     render(){
//         let {children} = this.props,
//             {loaded} = this.state
//         return <div>
//             {loaded && children}
//         </div>
//     }
// }

// LazyLoad.defaultProps = {
//     top: 100
// }
// Noting a few things about this code:

// We set up initial state (this.state = {loaded: 0}) in the constructor(). This will be set to 1 when the parent container is scrolled into view.
// The render() returns the props.children as child elements when this occurs. Extract the src by using ES6 destructuring, where {props:{src}} creates a variable src with the appropriate value.
// We used a single componentDidMount() lifecycle method. This is used because on mount, we’d like the component to check if the HOC is visible.
// The largest function of our component, _scroll(), grabs the HOC Component’s DOM element with DOM.findDOMNode() and then gets the elements position. This position is compared to the height of the browser window, and if it is less than 100px from the bottom, then the scroll listener is removed and loaded is set to 1.
// This technique is called HOC (Higher Order Component) because we pass in elements as this.props.children when we nest those elements inside the container component:

// <HOC>
//     <div>some</div>
//     <span>children</span>
//     <Props/>
// </HOC>
// All of these nested elements (which can be custom components) are nested under <HOC/>, thus HOC’s code will be able to access them as this.props.children.


// Compare and contrast incorporating mixins and enforcing modularity in React Components. (extend, createClass and mixins, HOCs) Why would you use these techniques, and what are the drawbacks of each?

// Modularity is – in effect – something partially done with intention while coding, and partially done when refactoring afterwards.

// Let’s first paint a scenario which we’ll model using each method above. Imagine we have three React Components: onScrollable, Loadable, and Loggable.

// an onScrollable Component will listen to the window.onscroll event, and use a logging mechanism to record it
// a Loadable Component will not render until one or more async requests have finished loading, and will use a logging mechanism to record when this occurs
// a Loggable Component provides a logging mechanism, be it a console, a Winston Node.js logging setup on our own server, or some 3rd party logging service that records logs via JSON requests
// First, let’s model this with React’s ES5 API and mixins.

// Interactive code sample at Matthew Keas’ github.
// var onKeypress = {
//     componentDidMount(){
//         this.onpress && window.addEventListener('keyup', this.onpress)
//     },
//     componentWillUnmount(){
//         this.onpress && window.removeEventListener('keyup', this.onpress)
//     }
// }

// var Loadable = {
//     componentDidMount(){
//         if(this.load){
//             this.setState({loaded: false})
//             Promise.all([].concat(this.load))
//                 .then(() =>
//                     this.setState({loaded: true}))
//         }
//     }
// }

// var Loggable = {
//     log(...args) {
//         alert(args)
//     }
// }

// var Example = React.createClass({
//     mixins: [Loggable, Loadable, onKeypress],
//     componentWillMount(){
//         this.onpress = (e) => this.log(e.which, 'pressed!')
//         this.load = [new Promise((res,rej) => setTimeout(res, 3000))]
//         this.log = (...args) => console.log(...args)
//     },
//     getInitialState(){
//         return {}
//     },
//     render() {
//         if(!this.state.loaded)
//             return <div>loading...</div>
//         return <div>test</div>
//     }
// })

// DOM.render(<Example />, document.body)

// Let’s note a few things about the above code:

// There are three POJOs (Plain ol’ JS Objects) created, which hold lifecycle and/or custom methods.
// When creating the Example Component, we add mixins: [Loggable, Loadable, onKeypress], meaning that any functions from all three objects are included in the Example class.
// Both onKeypress and Loadable add a componentDidMount(), but this doesn’t mean the latter cancels out the prior. In fact, all componentDidMount() functions from each mixin will be invoked when the event occurs. The same is true for all lifecycle methods added to mixins. This way, both the onKeypress and Loadable mixins will work simultaneously!
// Mixins are possible, but not built-in to React’s ES6 API. However, the ES6 API makes it easier to create a custom Component that extends another custom Component.

// So our Components’ prototype chains would look like the following:

// [Example] --- extends ---> [Loggable] --- extends ---> [Loadable] --- extends ---> [onKeypress]
// This would result from Components written as such:

// class onKeypress {}
// class Loadable extends onKeypress {}
// class Loggable extends Loadable {}
// class Example extends Loggable {}
// Creating anonymous classes would help here, because then Loggable would not have to extend Loadable and onKeypress.

// class Example extends (class a extends Loggable extends ...) {

// }
// With a mixin() function, this could look more like:

// class Example extends mixin(Loggable, Loadable, onKeypress) {

// }
// Let’s try to write mixin() by building a chain of anonymous classes that extend Loggable, Loadable, and onKeypress:

// const mixin = (...classes) =>
//     classes.reduce((a,v) => {
//         return (class temp extends a)
//     }, (class temp {}))
// There’s a caveat, though – if Loadable extends onKeypress and both implement componentDidMount(), Loadable’s version will be lower on the prototype chain, which means the function from onKeypress will never be invoked.

// The takeaway here is that the mixin pattern isn’t easily implemented by relying only on the ES6 extends approach. Let’s try to implement mixin() again, but build a more robust function:

// const mixin = (...classes) => {
//     class _mixin {}
//     let proto = _mixin.prototype

//     classes.map(({prototype:p}) => {
//         Object.getOwnPropertyNames(p).map(key => {
//             let oldFn = proto[key] || (() => {})
//             proto[key] = (...args) => {
//                 oldFn(...args)
//                 return p[key](...args)
//             }
//         })
//     })

//     return _mixin
// }
// This new mixin() implementation maps over each class, and cascades function calls from a parent class’s componentDidMount() alongside the child’s componentDidMount().

// There are similar implementations of mixin() available on npm, using packages like react-mixin and es6-react-mixins.

// We use mixin() from above like so:

// interactive code sample available at https://goo.gl/VnQ21R
// class A {
//     componentDidMount(){
//         console.log(1)
//     }
// }

// class B {
//     componentDidMount(){
//         console.log(2)
//     }
// }

// class C extends mixin(A,B) {
//     componentDidMount(...p){
//         super.componentDidMount(...p)
//         console.log(3)
//     }
// }

// let c = new C()
// c.componentDidMount() // logs 1, 2, 3
// Recently, React provided support for – and documented its preference of – React Components declared with ES6 classes. ES6 classes allow us to create component heirarchies with less code, however this makes it more difficult to create a single Component that inherits properties from several mixins, instead forcing us to create prototype chains.

// What is the significance of keys in React?
// Hide answer
// Keys in React are used to identify unique VDOM Elements with their corresponding data driving the UI; having them helps React optimize rendering by recycling existing DOM elements. Let’s look at an example to portray this.

// We have two <TwitterUser> Components being rendered to a page, drawn in decreasing order of followers:

// -----------
// | A - 103 |
// -----------
// -----------
// | B - 92  |
// -----------
// Let’s say that B gets updated with 105 Twitter followers, so the app re-renders, and switches the ordering of A and B:

// -----------
// | B - 105 |
// -----------
// -----------
// | A - 103 |
// -----------
// Without keys, React would primarily re-render both <TwitterUser> Elements in the DOM. It would re-use DOM elements, but React won’t re-order DOM Elements on the screen.

// With keys, React would actually re-order the DOM elements, instead of rendering a lot of nested DOM changes. This can serve as a huge performance enhancement, especially if the DOM and VDOM/React Elements being used are costly to render.

// Keys themselves should be a unique number or string; so if a React Component is the only child with its key, then React will repurpose the DOM Element represented by that key in future calls to render().

// Let’s demonstrate this with a simple list of todos rendered with React:
// class List extends Component {
//     constructor(p){
//         super(p)
//         this.state = {
//             items: Array(5).fill(1).map((x,i) => ({id:i}))
//         }
//     }

//     componentDidMount(){
//         const random = (a,b) => Math.random() < .5 ? -1 : 1

//         setInterval(() => {
//             this.setState({
//                 items: this.state.items.sort(random)
//             })
//         }, 20)
//     }

//     render() {
//         let {items} = this.state
//         return <ul>
//             {items.map(item =>
//                 <li key={item.id}>{item.id}</li>)}
//         </ul>
//     }
// }

// DOM.render(<List />, document.body)
// The setInterval() occurring on mount reorders the items array in this.state every 20ms. Computationally, if React is reordering the items in state, then it would manipulate the DOM elements themselves instead of “dragging” them around between positions in the <ul>.

// It is worth noting here that if you render a homogenous array of children – such as the <li>’s above – React will actually console.warn() you of the potential issue, giving you a stack trace and line number to debug from. You won’t have to worry about React quietly breaking.

// What is the significance of refs in React?
// Hide answer
// Similarly to keys, refs are added as an attribute to a React.createElement() call, such as <li ref="someName"/>. The ref serves a different purpose, it provides us quick and simple access to the DOM Element represented by a React Element.

// Refs can be either a string or a function. Using a string will tell React to automatically store the DOM Element as this.refs[refValue]. For example:

// class List extends Component {
//     constructor(p){
//         super(p)
//     }

//     _printValue(){
//         console.log(this.refs.someThing.value)
//     }

//     render() {
//         return <div onClick={e => this._printValue()}>
//             <p>test</p>
//             <input type="text" ref="someThing" />
//         </div>
//     }
// }

// DOM.render(<List />, document.body)
// this.refs.someThing inside componentDidUpdate() used to refer to a special identifier that we could use with React.findDOMNode(refObject) – which would provide us with the DOM node that exists on the DOM at this very specific instance in time. Now, React automatically attaches the DOM node to the ref, meaning that this.refs.someThing will directly point to a DOM Element instance.

// Additionally, a ref can be a function that takes a single input. This is a more dynamic means for you assign and store the DOM nodes as variables in your code. For example:

// class List extends Component {
//     constructor(p){
//         super(p)
//     }

//     _printValue(){
//         console.log(this.myTextInput.value)
//     }

//     render() {
//         return <div onClick={e => this._printValue()}>
//             <p>test</p>
//             <input type="text" ref={node => this.myTextInput = node} />
//         </div>
//     }
// }

// DOM.render(<List />, document.body)

// Compare and contrast setState() and forceUpdate(). What is the significance of each, and when would you use one or the other? In addition, how might you use any data layer with React (like Backbone, Ember, or Redux)? What are the systemic requirements of doing so?
// Hide answer
// setState() called within a Component will tell React to trigger the proper re-rendering. It will also invoke the lifecycle methods, and those methods’ control on the rendering process. For example, if setState() is called within componentWillMount(), the state update will be synchronous, and the Component will only render once. If called within componentWillReceiveProps(), there will not be an additional render. It will also not render if shouldComponentUpdate() returns false.
// forceUpdate(), on the other hand, completely overrules the rendering process and queues up a new render for React to display to the screen; it will also not call shouldComponentUpdate().
// In most cases, you should use setState() unless your code is setup to need a bypass for shouldComponentUpdate(). As per the React docs, if your render() method reads from something other than this.props or this.state, such as if your Component has access to a shared variable that holds a Backbone Model, Redux Store, Ember Model, etc. In these cases, you’ll need to likely use forceUpdate(). It’s worth noting that you should never mutate this.state directly.

// In a general overview, how might React Router and its techniques differ from more traditional JavaScript routers like Backbone’s Router?
// Hide answer
// “Traditional” routers like the ever-popular Backbone.Router establish a predefined set of routes, in which each route defines a series of actions to take when a route is triggered. When combining Backbone.Router with React, you may have to mount and unmount React Components when the route changes:

// var MyRouter = Backbone.Router.extend({
//     routes: {
//         'home': 'showHome',
//         'search/:q': 'showSearch',
//         '*default': 'show404'
//     },
//     showHome(){
//         DOM.unmountComponentAtNode(document.body)
//         DOM.render(<Home />, document.body)
//     },
//     showSearch(q){
//         DOM.unmountComponentAtNode(document.body)
//         DOM.render(<Search query={q} />, document.body)
//     },
//     show404(){
//         DOM.unmountComponentAtNode(document.body)
//         DOM.render(<Error />, document.body)
//     }
// })

// The router exists externally of the React Components, and the VDOM has to mount and unmount potentially frequently, introducing a possible slew of problems. React Router focuses on not just “single-level” routing, but enables - nay, empowers - the creation of HOCs that can “decide for themselves” what to render within them.

// This is where the advanced HOC implementations can really help simplify a seemingly complex notion. Let’s look at using a tiny router to assess some of the beauty of embedding application routers inside React HOCs. Here, we define a Component that wraps it’s own routing mechanism (router() not provided here, see universal-utils):

// // router(routesObject, callback) --> when a route event occurs, we invoke callback() with
// // the React Element and the props passed via the route params

// class Router extends Component {
//     constructor(...a){
//         super(...a)

//         let p = this.props

//         this.state = {
//             routes: p.routes || {},
//             default: p.default || '/'
//         }

//         this.router = router(this.state.routes, (el, props) => {
//             this.current = el
//         })

//         this.router.trigger(this.state.default)
//     }
//     render(){
//         return this.current()
//     }
// }
// DOM.render(<Router routes={{
//     '/': () => <Home/>,
//     '/search/:q': ({q}) => <Search query={q} />,
//     '*': () => <Error />
// }}/>, document.body)
// This Router Component opts for parsing the routes object passed into this.props instead of reading over an array of React Components passed as this.props.children. React Router opts for the latter technique. Need proof? Take a look at this example code provided by React Router’s docs:

// DOM.render(
//     <Router history={browserHistory}>
//         <Route path="/" component={App}>
//             <Route path="about" component={About}/>
//             <Route path="users" component={Users}>
//                 <Route path="/user/:userId" component={User}/>
//             </Route>
//             <Route path="*" component={NoMatch}/>
//         </Route>
//   </Router>
// , document.body)

// A <Router /> Component has one or more <Route /> Components as items in this.props.children, and <Route />s can have sub-<Route />s. React Router’s code recursively walks down the tree of children until there are no more to process, allowing the developer to recursively declare routes in a structure that encapsulates sub-routes, instead of having to implement a Backbone-esque flat list of routes (i.e. "/", "/about", "/users", "/users/:id", etc).

// What are pure functional Components?
// Hide answer
// Traditional React Components as we have seen thus far are creating a class with class Example extends React.Component or React.createClass(). These create stateful components if we ever set the state (i.e. this.setState(), getInitialState(), or this.state = {} inside a constructor()).

// If we have no intention for a Component to need state, or to need lifecycle methods, we can actually write Components with a pure function, hence the term “pure functional Component”:

// function Date(props){
//     let {msg="The date is:"} = props
//     let now = new Date()
//     return <div>
//         <span>{msg}</span>
//         <time>{now.toLocaleDateString()}</time>
//     </div>
// }
// This function that returns a React Element can be used whereever we see fit:

// DOM.render(<div><Date msg="Today is"/><div>)
// You might notice that <Date/> also takes a prop – we can still pass information into the Component.

// How might React handle or restrict Props to certain types, or require certain Props to exist?
// Hide answer
// You may recall a previous example that looked like the following (some parts of the code left out):

// class LazyLoad extends Component {
//     constructor(p){
//         super(p)
//         this.state = { loaded:0 }
//     }
//     render(){
//         let {children} = this.props,
//             {loaded} = this.state
//         return <div>
//             {loaded && children}
//         </div>
//     }
// }
// When rendering the <LazyLoad/>, we can pass in props (i.e. <LazyLoad top={0}/>). Props are essentially inputs or values being passed down to one Component from the parent rendering context, and the code that passes the props to the element may not be compliant with your code. For example, top here seems to be just a number, but would I be able to verify that the prop is in-fact a number before my component is rendered? It’s certainly possible to write this code in each and every Component that uses props. However, React provides us a much simpler and shorter solution: Prop Types.

// let p = React.PropTypes
// LazyLoad.PropTypes = {
//     top: p.number
// }
// When using React’s non-minified development version (i.e. when building and testing in development), React will throw an error to alert you of any instances where a Prop is either missing or the wrong type. Above, top should always be a number.

// We can make top a required prop by adding:

// let p = React.PropTypes
// LazyLoad.PropTypes = {
//     top: p.number.isRequired
// }
// PropTypes can be used to test Props for any kind of value (see https://facebook.github.io/react/docs/reusable-components.html for more info). Here’s a few quick type-checkers React has for JavaScript’s built-in types:

// React.PropTypes.array,
// React.PropTypes.bool,
// React.PropTypes.func,
// React.PropTypes.number,
// React.PropTypes.object,
// React.PropTypes.string,
// React.PropTypes.symbol,
// We can also test that props are React and DOM types:

// React.PropTypes.node,
// React.PropTypes.element,
// And we have the ability to test more complex types, such as “shapes”, “instances of”, or “collections of”:

// React.PropTypes.instanceOf(Message),
// React.PropTypes.oneOf(['News', 'Photos']),
// React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number, React.PropTypes.instanceOf(Message)])
// React.PropTypes.arrayOf(React.PropTypes.number),
// React.PropTypes.shape({ color: React.PropTypes.string, fontSize: React.PropTypes.number })
// Use these PropTypes to produce errors and track down bugs. When used effectively, PropTypes will prevent your team from losing too much time in the debugging and documentation process, ensuring stricter standards and understanding of your growing library of Components.

// JavaScript front end UI library for creating interactive, stateful & reusable UI components for web as well as mobile applications.

// Q1: What is ReactJS? What are the advantages of using ReactJS and how it’s different from other JavaScript Frameworks? What are its limitations?

// React is an open source JavaScript front end UI library developed by Facebook  for creating interactive, stateful & reusable UI components for web and mobile app. It is used by Facebook, Instagram and many more web apps.

// ReactJS is used for handling view layer for web and mobile applications. One of React’s unique major points is that  it perform not only on the client side, but also can be rendered on server side, and they can work together inter-operably.

// Advantages of ReactJS:

// React uses virtual DOM which is JavaScript object. This improves application performance as JavaScript virtual DOM is faster than the regular DOM.

// React can be used on client and as well as server side too.
// Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaing larger apps.
// React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer.
// React’s JSX makes it easier to read the code of our component. It’s really very easy to see the layout. How components are interacting, plugged and combined with each other in app.
// Limitations of ReactJS:

// React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for development.
// React is using inline templating and JSX. This can seem awkward to some developers.
// The library of react  is too  large.
// Learning curve  for ReactJS may be steep.


// http://www.webdevelopmenthelp.net/wp-content/uploads/2016/12/ReactJs-Operations.jpg

// Q2: Please explain step by step approach on how to setup environment for ReactJS?

// Next we will discuss how to set up environment for React.js successful development.

// Q3: What is ReactJS-JSX? What are the advantages of using JSX? Explain basic code snippet of JSX with the help of a practical example?

// JSX (JavaScript XML), lets us to build DOM nodes with HTML-like syntax. JSX is a preprocessor step which adds XML syntax to JavaScript.

// Like XML, JSX tags have a tag name, attributes, and children JSX also has the same. If an attribute/property value is enclosed in quotes(“”), the value is said to be string. Otherwise, wrap the value in braces and the value is the enclosed JavaScript expression. We can represent JSX as <HelloWorld/>.

// JSX is completely optional and its not mandatory, we don’t need to use it in order to use React, but it has several advantages  and a lot of nice features in JSX.

// JSX is always faster as it performs optimization while compiling code to vanilla JavaScript.
// JSX is also type-safe, means it is strictly typed  and most of the errors can be caught during compilation of the JSX code to JavaScript.
// JSX always makes it easier and faster to write templates if we are familiar with HTML syntax.
// Our browsers does not understand JSX code natively, we need to convert it to JavaScript first which can be understand by our browsers. We have aplugin which handles including Babel 5’s in-browser ES6 and JSX transformer called browser.js.

// Babel will understand and recognize JSX code in <script type=”text/babel”></script> tags and transform/convert it to normal JavaScript code.

// In case of production we will need to pre-compile our JSX code into JS before deploying to production environment so that our app renders faster.

// Q4: What are Components in ReactJS? Explain the Component Lifecycle with the help of a diagram explaining each component method in detail. Also, Give an example of both Stateless and Stateful components with source code?

// React encourages the idea of reusable components. They are widgets or other parts of a layout (a form, a button, or anything that can be marked up using HTML) that you can reuse multiple times in your web application.

// ReactJS enables us to create components by invoking the React.createClass() method  features a render() method which is responsible for displaying the HTML code.

// When designing interfaces, we have to break down the individual design elements (buttons, form fields, layout components, etc.) into reusable components with well-defined interfaces. That way, the next time we need to build some UI, we can write much less code. This means faster development time, fewer bugs, and fewer bytes down the wire.

// http://www.webdevelopmenthelp.net/wp-content/uploads/2016/12/4.-Component-LifeCycle-Methods.jpg

// getDefaultProps and getInitialState, both methods are called only once while initially rendering of the component.
// componentWillMount : This method is executed just before rendering on both client and server side.
// ComponentDidMount: This method is executed after first rendering only on the client side. This is where AJAX requests and DOM or state updates usually occurs. This method is also used for integration with other JavaScript frameworks.
// ComponentWillReceiveProps: This method is invoked as soon as the props are updated before another render is called.
// ShouldComponentUpdate: This method  should return true or false value. This  determines whether if a component will be updated or not. Default it is set to true.
// ComponentWillUpdate: This method  is called just before rendering.
// ComponentDidUpdate: This method is called just after rendering.
// ComponentWillUnmount: This method is called after the component is unmounted from the DOM.

// Stateless and Stateful components

// Stateless: When a component is “stateless”, it calculates state is calculated internally but it directly  never mutates it. With the same inputs, it will always produce the same output. It means it has no knowledge of the past, current or future state changes.


// var React = require('react');
// var Header = React.createClass({
//     render: function() {
//         return( <img src={this.props.imageSource} />   ); }
// });
// ReactDOM.render(<Header imageSource="myImage.png"/>, document.body);
// 1
// 2
// 3
// 4
// 5
// 6
// var React = require('react');
// var Header = React.createClass({
//     render: function() {
//         return( <img src={this.props.imageSource} />   ); }
// });
// ReactDOM.render(<Header imageSource="myImage.png"/>, document.body);
// Stateful : When a component is “stateful”, it is a central point that stores every information in memory about the app/component’s state, do has the ability to change it. It has knowledge of past, current and potential future state changes.
// Stateful component  change the state, using this.setState method.


// var React = require('react');
// var Header = React.createClass({
//     getInitialState: function() {
//         return { imageSource: "header.png" };
//     },

//     changeImage: function() {
//         this.setState({imageSource: "changeheader.png"});
//     },
//     render: function() {
//         return(
//             <img src={this.state.imageSource} onClick={this.changeImage.bind(this)} />
//         );
//     }
// });

// module.exports = Header;
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// var React = require('react');
// var Header = React.createClass({
//     getInitialState: function() {
//         return { imageSource: "header.png" };
//     },
 
//     changeImage: function() {
//         this.setState({imageSource: "changeheader.png"});
//     },
//     render: function() {
//         return(
//             <img src={this.state.imageSource} onClick={this.changeImage.bind(this)} />
//         );
//     }
// });
 
// module.exports = Header;

// Q5: What are State and Props in ReactJS? What is the difference between the two? Give a proper example of using State and Props to elaborate the concept with complete source code?

// State is the place where the data comes from. We must follow approach  to make our state as simple as possible and minimize number of stateful components.

// For example, ten components that need data from the state, we should create one container component that will keep the state for all of them.

// The state starts with a default value and when a Component mounts and then suffers from mutations in time (basically generated from user events).

// A Component manages its own state internally, but—besides setting an initial state—has no business fiddling with the stateof its children. You could say the state is private.

// JavaScript

// import React from 'react';
// import ReactDOM from 'react-dom';

// var StepCounter = React.createClass({
//  getInitialState: function() {
//          return {counter: this.props.initialCount};
// },

//   handleClick: function() {
//   this.setState({counter: this.state. counter + 1});
//  },

//   render: function() {
//   return <div onClick={this.handleClick}>{this.state.counter }</div>;
//  }
// });

// ReactDOM.render(< StepCounter initialCount={7}/>, document.getElementById('content'));
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// import React from 'react';
// import ReactDOM from 'react-dom';
 
// var StepCounter = React.createClass({
//  getInitialState: function() {
//          return {counter: this.props.initialCount};
// },
 
//   handleClick: function() {
//   this.setState({counter: this.state. counter + 1});
//  },
 
//   render: function() {
//   return <div onClick={this.handleClick}>{this.state.counter }</div>;
//  }
// });
 
// ReactDOM.render(< StepCounter initialCount={7}/>, document.getElementById('content'));

// Props: They are immutable, this is why container component should define state that can be updated and changed. It is used to pass data down from our view-controller(our top level component).

// When we need immutable data in our component we can just add props to reactDOM.render() function.


// import React from 'react';
// import ReactDOM from 'react-dom';

// class PropsApp extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>{this.props.headerProperty}</h1>
//             <h2>{this.props.contentProperty}</h2>
//          </div>
//       );
//    }
//  }

// ReactDOM.render(<PropsApp headerProperty = "Header from props..." contentProperty = "Content
//    from props..."/>, document.getElementById('app'));
// }
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// import React from 'react';
// import ReactDOM from 'react-dom';
 
// class PropsApp extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>{this.props.headerProperty}</h1>
//             <h2>{this.props.contentProperty}</h2>
//          </div>
//       );
//    }
//  }
 
// ReactDOM.render(<PropsApp headerProperty = "Header from props..." contentProperty = "Content
//    from props..."/>, document.getElementById('app'));
// }
// Props	State
// Passes in from parent component.<PropsApp headerProperty = “Header from props…” contentProperty = “Content&nbsp;from props…”/>This properties are being read by  PropsApp component and sent to ReactDOM View.	Created inside component by getInitialState.this.state reads the property of component and update its value it by this.setState() method and then returns to ReactDOM view.State is private within the component.

// Q6: How to apply validation on Props in ReactJS? Apply validation in previously developed example in above question?

// When the application is running in development mode, React will automatically check  for all props that we set on components to make sure they must right correct and right data type.

// For instance, if we say a component has a Message prop which is a string and is required, React will automatically check and warn  if it gets invalid string or number or boolean objects. For performance reasons this check is only done on dev environments  and on production it is disabled so that rendering of objects is done in fast manner .

// Warning messages are generated   easily  using a set of predefined options such as:

// React.PropTypes.string
// React.PropTypes.number
// React.PropTypes.func
// React.PropTypes.node
// React.PropTypes.bool

// import ReactDOM from 'react-dom';
 
// class PropsValidation extends React.Component {
//     render() {
//         return (  <div>
//                 <h1>Propert Validation in ReactJS to validate Element Property type</h1>
//                 {this.props.children} </div>
//         );
//     }
// }
 
// PropsValidation.propTypes = {
//     children: React.PropTypes.node,
// };
 
// export default PropsValidation;
// Execute the above example, when wrong prop type is being detected it generate error message in console, try using React.PropTypes.string in the code above and we will  see that our page still loads fine, but an error message  in console.

// Q7: How to use Forms in ReactJS? Give an example of using Forms in ReactJS by developing a User Registration Form?

// In React’s virtual DOM, HTML Input element presents an interesting problem. With the others DOM environment, we can  render the input or textarea and thus allows the browser maintain its   state that is (its value). we can then get and set the value implicitly with the DOM API.

// In HTML, form elements such as <input>, <textarea>, and <select> itself  maintain their own state and update its state  based on the input provided by user .In React, components’ mutable state is handled by the state property  and is only updated by setState().

// HTML <input> and <textarea> components use the value attribute.
// HTML <input> checkbox and radio components, checked attribute is used.
// <option> (within <select>) components, selected attribute is used for select box.



// var AccountFields = React.createClass({

//   render: function() {
//     return ( <div>
//      <div> <label>Name</label> </div>
//      <div> <input type="text"
//              ref="name"
//              defaultValue='Imran' /></div>

//       <div> <label>Password</label></div>
//       <div><input type="password"
//              ref="password"
//              defaultValue='' /></div>
//       <div> <label>Email</label></div>
//       <div><input type="email"
//              ref="email"
//              defaultValue='test.example.com' /></div>
//       <button onClick={ this.saveAndContinue }>Save and Continue</button></div>
//     )
//   },

//   saveAndContinue: function(e) {

//   console.log(this.refs);
//   }
// });

// ReactDOM.render(  <AccountFields />,   document.getElementById('content') );
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// var AccountFields = React.createClass({
 
//   render: function() {
//     return ( <div>
//      <div> <label>Name</label> </div>
//      <div> <input type="text"
//              ref="name"
//              defaultValue='Imran' /></div>
 
//       <div> <label>Password</label></div>
//       <div><input type="password"
//              ref="password"
//              defaultValue='' /></div>
//       <div> <label>Email</label></div>
//       <div><input type="email"
//              ref="email"
//              defaultValue='test.example.com' /></div>
//       <button onClick={ this.saveAndContinue }>Save and Continue</button></div>
//     )
//   },
 
//   saveAndContinue: function(e) {
 
//   console.log(this.refs);
//   }
// });
 
// ReactDOM.render(  <AccountFields />,   document.getElementById('content') );

// Q8: How to use Events in ReactJS? Give an example of using events?

// React identifies every events so that it must  have common and consistent behavior  across all the browsers. Normally, in normal JavaScript or other frameworks, the onchange event is triggered after we have typed something into a Textfield and then “exited out of it”. In  ReactJS we cannot do it in this way.

// The explanation is typical and  non-trivial:

// *”<input type=”text” value=”dataValue”> renders an input textbox initialized with the value, “dataValue”.

// When the user changes the input in text field, the node’s value property will update and change. However, node.getAttribute(‘value’) will still return the value used at initialization time that is dataValue.

// Form Events:

// onChange: onChange event  watches input changes and update state accordingly.
// onInput: It is triggered on input data
// onSubmit: It is triggered on submit button.
// Mouse Events:

// onClick: OnClick of any components event is triggered on.
// onDoubleClick: onDoubleClick of any components event is triggered on.
// onMouseMove: onMouseMove of any components, panel event is triggered on.
// onMouseOver: onMouseOver of any components, panel, divs event is triggered on.

// Touch Events:

// onTouchCancel: This event is for canceling an events.
// onTouchEnd: Time Duration attached to touch of a screen.
// onTouchMove: Move during touch device .
// onTouchStart: On touching a device event is generated.

// import ReactDOM from 'react-dom';
 
// var StepCounter = React.createClass({
//                     getInitialState: function() { return {counter: this.props.initialCounter }; },
//                     handleClick: function() {             
//                         this.setState({counter: this.state.counter + 1});  },
//                render: function() {
//                return <div onClick={this.handleClick}> OnClick Event, Click Here: {this.state.counter }</div>;
//             }
// });
 
// ReactDOM.render(< StepCounter initialCounter={7}/>, document.getElementById('content'));

// Q9: How to set up routing in ReactJS. Explain with the help of step by step approach?

// Routing is the  key features of web applications (and even other platforms) could not be left out in React. We can develop full featured single page applications (SPA) with React, one of the key feature is routing.

// We use library called React-Router for routing in reactJS. React goodness is  to keep things as simple as possible and that is why the core library exactly does what React is about, components. Routing, DOM rendering and other logics are abstracted to a different library.

// We need to install library by command to initialization router


// $ user@administrator:/var/www/html/reactjs$  npm install react react-dom react-router –save
// 1
// $ user@administrator:/var/www/html/reactjs$  npm install react react-dom react-router –save
// After Installing library we need to write following below code to verify routing is working in desired manner.

// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './RouterApp.jsx'
// ReactDOM.render(<RouterApp />, document.getElementById('app'))

// File: RouterApp.jsx
// import React, { Component } from 'react'
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

// class RouterApp extends Component {
//   render() {
//     return (
//       <Router history={hashHistory}>
//         <Route path='/' component={Home} />
//         <Route path='/address' component={Address} />
//                      <Route path='/country' component={Country} />
//       </Router>
//     )
//   }
// }

// const Home = () => <h1>Hello from Home!, you can call "/address", "/country" to verify routing</h1>
// const Address = () => <h1>We are located at 555 MG Street, Sector 15.</h1>
// const Country = () => <h1>We are located in India.</h1>
// export default  RouterApp
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// File: RouterApp.jsx
// import React, { Component } from 'react'
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
 
// class RouterApp extends Component {
//   render() {
//     return (
//       <Router history={hashHistory}>
//         <Route path='/' component={Home} />
//         <Route path='/address' component={Address} />
//                      <Route path='/country' component={Country} />
//       </Router>
//     )
//   }
// }
 
// const Home = () => <h1>Hello from Home!, you can call "/address", "/country" to verify routing</h1>
// const Address = () => <h1>We are located at 555 MG Street, Sector 15.</h1>
// const Country = () => <h1>We are located in India.</h1>
// export default  RouterApp


// Q10: What is Flux concept in ReactJS? Explain various flux elements including Action, Dispatcher, Store and View. Give a simple practical example of installing and using Flux in an application?

// Flux is the architecture of an application that Facebook uses for developing client-side web applications. Facebook uses internally when working with React. It is not a framework or a library. This is simply a new technique that complements React and the concept of Unidirectional Data Flow.

// Facebook dispatcher library is a sort of global pub/sub handler technique which broadcasts payloads to registered callbacks.

// Flux can be better explained by defining its individual components:

// Actions – They are helper methods that facilitate passing data to the Dispatcher.
// Dispatcher – It is Central hub of app, it receives actions and broadcasts payloads to registered callbacks.
// Stores – It is said to be Containers for application state & logic that have callbacks registered to the dispatcher. Every store maintains particular state and it will update  when it is needed. It wakes up on a relevant dispatch to retrieve the requested data. It is accomplished by registering with the dispatcher  when constructed. They are  similar to  model in a traditional MVC (Model View Controller), but they manage the state of many objects —  it does not represent a single record of data like ORM models do.
// Controller Views – React Components  grabs the state from Stores and pass it down through props to child components to view to render application.
// In this Web Development Tutorial, first we have to install all the steps mentioned in Question 2 i.e. step by step installation of react.

// then, we need to install flux:


// user@administrator:/var/www/html/reactjs$ npm install --save react-redux
// 1
// user@administrator:/var/www/html/reactjs$ npm install --save react-redux
// Flux Overview – How it works?

// Flux encourage the design in  of a uni-directional data flow.

// All user interactions within a view call an action creator, which causes an action event to be emitted from a singleton dispatcher.

// The dispatcher is a single-point-of-emission for all actions in a flux application. The action is sent from the dispatcher to stores, which update themselves in response to the action.

// The flow doesn’t change significantly for additional stores or views. The dispatcher simply sends every action to all the stores in the application.

// Each store is responsible for a domain of the application, and only update themselves in response to actions.

// When a store updates, it emits a change event. In many React applications, special views (known sometimes as “controller-views”) are responsible for watching for this change event, reading the stores’ new data, and passing that data through properties to child views.

// It completely avoids performance issues , complex bugs that can rise while trying to watch for specific property changes on models and  views only slightly.

// http://www.webdevelopmenthelp.net/wp-content/uploads/2016/12/Flux-Architecture.jpg

// Question: What is ReactJS?
// React is front end library developed by Facebook.


// Question: Why ReactJS is used?
// React is used to handle the view part of Mobile application and Web application.


// Question: Does ReactJS use HTML?
// No, It uses JSX which is simiar to HTM.


// Question: When ReactJS released?
// March 2013


// Question: What is current stable version of ReactJS?
// Version: 15.5 
// Release on: April 7, 2017

// Question: What are the life Cycle of ReactJS?
// Initialization
// State/Property Updates
// Destruction



// Question: What are the feature of ReactJS?
// JSX: JSX is JavaScript syntax extension.
// Components : React is all about components.
// One direction flow: React implements one way data flow which makes it easy to reason about your app

// Question: What are the Advantages of ReactJS?
// React uses virtual DOM which is JavaScript object. This will improve apps performance
// It can be used on client and server side
// Component and Data patterns improve readability.
// Can be used with other framework also.

// Question: How to embed two components in One component?
// import React from 'react';
// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <Header/>
//             <Content/>
//          </div>
//       );
//    }
// }

// class Header extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Header</h1>
//          </div>
//       );
//    }
// }

// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <h2>Content</h2>
//             <p>The content text!!!</p>
//          </div>
//       );
//    }
// }

// export default App;

// an amazing open source JavaScript front end UI library for creating interactive, stateful &amp; reusable UI components for  web as well as mobile applications.

// Be prepared to explain the difference between state and props. Props are immutable, a component's state can't be changed from outside that component, etc.

// What happens when you call setState?

// The first thing React will do when setState is called is merge the object you passed into setState into the current state of the component. This will kick off a process called reconciliation. The end goal of reconciliation is to, in the most efficient way possible, update the UI based on this new state. To do this, React will construct a new tree of React elements (which you can think of as an object representation of your UI). Once it has this tree, in order to figure out how the UI should change in response to the new state, React will diff this new tree against the previous element tree. By doing this, React will then know the exact changes which occurred, and by knowing exactly what changes occurred, will able to minimize its footprint on the UI by only making updates where absolutely necessary.

// What’s the difference between an Element and a Component in React?

// Simply put, a React element describes what you want to see on the screen. Not so simply put, a React element is an object representation of some UI.

// A React component is a function or a class which optionally accepts input and returns a React element (typically via JSX which gets transpiled to a createElement invocation).

// When would you use a Class Component over a Functional Component?

// If your component has state or a lifecycle method(s), use a Class component. Otherwise, use a Functional component.


// What are refs in React and why are they important?

// Refs are an escape hatch which allow you to get direct access to a DOM element or an instance of a component. In order to use them you add a ref attribute to your component whose value is a callback function which will receive the underlying DOM element or the mounted instance of the component as its first argument.

// class UnControlledForm extends Component {
//   handleSubmit = () => {
//     console.log("Input Value: ", this.input.value)
//   }
//   render () {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type='text'
//           ref={(input) => this.input = input} />
//         <button type='submit'>Submit</button>
//       </form>
//     )
//   }
// }
// Above notice that our input field has a ref attribute whose value is a function. That function receives the actual DOM element of input which we then put on the instance in order to have access to it inside of the handleSubmit function.

// It’s often misconstrued that you need to use a class component in order to use refs, but refs can also be used with functional components by leveraging closures in JavaScript.

// function CustomForm ({handleSubmit}) {
//   let inputElement
//   return (
//     <form onSubmit={() => handleSubmit(inputElement.value)}>
//       <input
//         type='text'
//         ref={(input) => inputElement = input} />
//       <button type='submit'>Submit</button>
//     </form>
//   )
// }


// What are keys in React and why are they important?

// Keys are what help React keep track of what items have changed, been added, or been removed from a list.

// render () {
//   return (
//     <ul>
//       {this.state.todoItems.map(({task, uid}) => {
//         return <li key={uid}>{task}</li>
//       })}
//     </ul>
//   )
// }

// It’s important that each key be unique among siblings. We’ve talked a few times already about reconciliation and part of this reconciliation process is performing a diff of a new element tree with the most previous one. Keys make this process more efficient when dealing with lists because React can use the key on a child element to quickly know if an element is new or if it was just moved when comparing trees. And not only do keys make this process more efficient, but without keys, React can’t know which local state corresponds to which item on move. So never neglect keys when mapping.


// If you created a React element like Twitter below, what would the component definition of Twitter look like?

// <Twitter username='tylermcginnis33'>
//   {(user) => user === null
//     ? <Loading />
//     : <Badge info={user} />}
// </Twitter>
// import React, { Component, PropTypes } from 'react'
// import fetchUser from 'twitter'
// // fetchUser take in a username returns a promise
// // which will resolve with that username's data.

// class Twitter extends Component {
//   // finish this
// }

// If you’re not familiar with the render callback pattern, this will look a little strange. In this pattern, a component receives a function as its child. Take notice of what’s inside the opening and closing <Twitter> tags above. Instead of another component as you’ve probably seen before, the Twitter component’s child is a function. What this means is that in the implementation of the Twitter component, we’ll need to treat props.children as a function.

// Here’s how I went about solving it.
// import React, { Component, PropTypes } from 'react'
// import fetchUser from 'twitter'

// class Twitter extends Component {
//   state = {
//     user: null,
//   }
//   static propTypes = {
//     username: PropTypes.string.isRequired,
//   }
//   componentDidMount () {
//     fetchUser(this.props.username)
//       .then((user) => this.setState({user}))
//   }
//   render () {
//     return this.props.children(this.state.user)
//   }
// }

// Notice that, just as I mentioned above, I treat props.children as a function by invoking it and passing it the user.

// What’s great about this pattern is that we’ve decoupled our parent component from our child component. The parent component manages the state and the consumer of the parent component can decide in which way they’d like to apply the arguments they receive from the parent to their UI.

// To demonstrate this, let’s say in another file we want to render a Profile instead of a Badge, because we’re using the render callback pattern, we can easily swap around the UI without changing our implementation of the parent (Twitter) component.

// <Twitter username='tylermcginnis33'>
//   {(user) => user === null
//     ? <Loading />
//     : <Profile info={user} />}
// </Twitter>

// What is the difference between a controlled component and an uncontrolled component?

// A large part of React is this idea of having components control and manage their own state. What happens when we throw native HTML form elements (input, select, textarea, etc) into the mix? Should we have React be the “single source of truth” like we’re used to doing with React or should we allow that form data to live in the DOM like we’re used to typically doing with HTML form elements? These two questions are at the heart of controlled vs uncontrolled components.

// A controlled component is a component where React is in control and is the single source of truth for the form data. As you can see below, username doesn’t live in the DOM but instead lives in our component state. Whenever we want to update username, we call setState as we’re used to.

// class ControlledForm extends Component {
//   state = {
//     username: ''
//   }
//   updateUsername = (e) => {
//     this.setState({
//       username: e.target.value,
//     })
//   }
//   handleSubmit = () => {}
//   render () {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type='text'
//           value={this.state.username}
//           onChange={this.updateUsername} />
//         <button type='submit'>Submit</button>
//       </form>
//     )
//   }
// }

// An uncontrolled component is where your form data is handled by the DOM, instead of inside your React component.

// You use refs to accomplish this.

// class UnControlledForm extends Component {
//   handleSubmit = () => {
//     console.log("Input Value: ", this.input.value)
//   }
//   render () {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type='text'
//           ref={(input) => this.input = input} />
//         <button type='submit'>Submit</button>
//       </form>
//     )
//   }
// }
// Though uncontrolled components are typically easier to implement since you just grab the value from the DOM using refs, it’s typically recommended that you favor controlled components over uncontrolled components. The main reasons for this are that controlled components support instant field validation, allow you to conditionally disable/enable buttons, enforce input formats, and are more “the React way”.

// n which lifecycle event do you make AJAX requests and why?

// AJAX requests should go in the componentDidMount lifecycle event.

// There are a few reasons for this,

// Fiber, the next implementation of React’s reconciliation algorithm, will have the ability to start and stop rendering as needed for performance benefits. One of the trade-offs of this is that componentWillMount, the other lifecycle event where it might make sense to make an AJAX request, will be “non-deterministic”. What this means is that React may start calling componentWillMount at various times whenever it feels like it needs to. This would obviously be a bad formula for AJAX requests.

// You can’t guarantee the AJAX request won’t resolve before the component mounts. If it did, that would mean that you’d be trying to setState on an unmounted component, which not only won’t work, but React will yell at you for. Doing AJAX in componentDidMount will guarantee that there’s a component to update.


// What does shouldComponentUpdate do and why is it important?

// Above we talked about reconciliation and what React does when setState is called. What shouldComponentUpdate does is it’s a lifecycle method that allows us to opt out of this reconciliation process for certain components (and their child components). Why would we ever want to do this? As mentioned above, “The end goal of reconciliation is to, in the most efficient way possible, update the UI based on new state”. If we know that a certain section of our UI isn’t going to change, there’s no reason to have React go through the trouble of trying to figure out if it should. By returning false from shouldComponentUpdate, React will assume that the current component, and all its child components, will stay the same as they currently are.

// How do you tell React to build in Production mode and what will that do?

// Typically you’d use Webpack’s DefinePlugin method to set NODE_ENV to production. This will strip out things like propType validation and extra warnings. On top of that, it’s also a good idea to minify your code because React uses Uglify’s dead-code elimination to strip out development only code and comments, which will drastically reduce the size of your bundle.


// Why would you use React.Children.map(props.children, () => ) instead of props.children.map(() => )

// It’s not guaranteed that props.children will be an array.

// Take this code for example,

// <Parent>
//   <h1>Welcome.</h1>
// </Parent>
// Inside of Parent if we were to try to map over children using props.children.map it would throw an error because props.children is an object, not an array.

// React only makes props.children an array if there are more than one child elements, like this
// <Parent>
//   <h1>Welcome.</h1>
//   <h2>props.children will now be an array</h2>
// </Parent>
// This is why you want to favor React.Children.map because its implemention takes into account that props.children may be an array or an object.

// Describe how events are handled in React.

// In order to solve cross browser compatibility issues, your event handlers in React will be passed instances of SyntheticEvent, which is React’s cross-browser wrapper around the browser’s native event. These synthetic events have the same interface as native events you’re used to, except they work identically across all browsers.

// What’s mildly interesting is that React doesn’t actually attach events to the child nodes themselves. React will listen to all events at the top level using a single event listener. This is good for performance and it also means that React doesn’t need to worry about keeping track of event listeners when updating the DOM.

// What is the difference between createElement and cloneElement?

// createElement is what JSX gets transpiled to and is what React uses to create React Elements (object representations of some UI). cloneElement is used in order to clone an element and pass it new props. They nailed the naming on these two 🙂

// What is the second argument that can optionally be passed to setState and what is its purpose?

// A callback function which will be invoked when setState has finished and the component is re-rendered.

// Something that’s not spoken of a lot is that setState is asynchronous, which is why it takes in a second callback function. Typically it’s best to use another lifecycle method rather than relying on this callback function, but it’s good to know it exists.

// this.setState(
//   { username: 'tylermcginnis33' },
//   () => console.log('setState has finished and the component has re-rendered.')
// )

// What is wrong with this code?

// this.setState((prevState, props) => {
//   return {
//     streak: prevState.streak + props.count
//   }
// })
// Nothing is wrong with it 🙂. It’s rarely used and not well known, but you can also pass a function to setState that receives the previous state and props and returns a new state, just as we’re doing above. And not only is nothing wrong with it, but it’s also actively recommended if you’re setting state based on previous state.



// https://www.quora.com/How-do-I-prepare-for-ReactJS-technical-interview

// Basic question about React:

// Different ways of defining an Element? (ES2015 class, React.createClass, stateless function — render only)
// What are the differences between state and props?
// Explain component lifecycle (componentWillMount, componentDidMount, componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate, componentWillUnmount); when is each of these functions called? Everything explained on this docs page: Component Specs and Lifecycle | React
// How to optimize React component to render it less often? (using shouldComponentUpdate to determine if any relevant data changed)
// What are best practices? (for example why not to use getInitialState, try to find others and know how to explain them)
// As we all know, React is rarely used by itself, so expect some questions about data layer, most commonly an implementation of flux:

// What is flux? How it’s different from the more traditional MVC pattern?
// What is your preferred flux implementation? Why? (Hopefully your answer is Redux, as mostly everyone seems to be using it)
// How does Redux data flow work? (view, action creator, reducer, view — you should know and explain responsibilities of each; also how state is represented — state tree)
// Depending on what technologies the company is using, you might also want to take a look at Relay and GraphQL, although those are a bit more advanced and only vaguely related to React interview. But regardless, those have some cool concepts worth learning.

// You can also expect some basic JavaScript questions and, based on the job position, even CSS and HTML. Based on current React ecosystem, I wouldn’t be surprised to see some ES2015+ questions.

// It will also help to know if they plan to test your coding skills, so you can prepare ahead by trying it yourself first, depending on how you handle these situations, i.e. how nervous you get and how do you perform when in this state. 
// I wouldn’t risk it by having more than a basic boilerplate prepared or even getting familiar with one of those React starter kits available online. It’s important to get this step done ASAP and get to coding, it’s very likely to have a tight deadline. 
// Whatever you choose as project base, you should learn how the project is structured and why things are where they are.

// For the task itself, it’s very common to test the knowledge of building a simple single page app. One example would be a todo list options to add new item, edit, delete, view details, filter by date and store all changes to the server via REST API. It’s a simple example, but will put to test knowledge of handling CRUD operations, routing, storing to server.
// Even without coding interview, this would be a great practice to really brush up on your skills and ace that interview.

// What are the limitations of ReactJS?

// What are the features of ReactJS?

// What is the difference between Virtual DOM and DOM?

// Can we nest JSX elements in other JSX elements?

// WHAT IS REACTJS? 

// ReactJS is an Open Source JavaScript library or web framework. It is developed and released in March 2013 by Facebook for creating more interactive and re usable components or user interfaces for the web and mobile applications. Initially it was used on Facebook and Instagram later it's been using many more web apps. 

// Pursue react js online course right away from your location. 

// REACTJS INTERVIEW QUESTIONS AND ANSWERS FOR FRESHERS ARE AS FOLLOWS

// 1. What are advantages of ReactJS?
//   i. ReactJS is simple and declarative.

//   ii. Useful to create composable components in less time.

//   iii. It can be used on client side and server side as well.

//  iv. It uses JavaScript virtual DOM which faster than DOM and improves app performance.

// v. Its components, Data patterns enhances readability of applications.

// vi. It improves creating and maintenance of large applications.  4

// 2. What are the limitations of ReactJS?
//  i. ReactJS only focuses on view layer I.e. User interface of the web and mobile applications so still developers needs more technologies to design over all development.

//  ii. It uses inline templating and JavaScript extension this would be difficult for many developers.

//  iii. React JavaScript library is excessive.

// 3. What are the features of ReactJS?
//  i. One way data flow

//  ii. Virtual Document Object Model

//  iii. JavaScript Extension(JSX)

//  iv. React native

//  v. Architecture beyond HTML
 
//  4. What is JSX?
// JSX is an embeddable XML-like syntax in a simple descriptive manner it can be expresses as a syntax extension for JavaScript language. It embeds huge sets of HTML templates inside of JavaScript code.

// 5. Why browsers can not read JSX?
// JSX code  cannot be read by any of the browsers because it embeds XML-like and HTML templates inside the JavaScript code. It can not readable by the browsers unless it is converted into original JavaScript format. There are tools available to convert JSX into original JavaScript format. Ex: Web pack, Babel. 

// Learn react js online course from best online courses training institute 

// 6. What is the difference between Virtual DOM and DOM?
// DOM stands for Document Object Model. It is used to represent structures documents in objects. The main disadvantage of DOM is it can not be useful for creating dynamic user interfaces due to heavy weighable parts.  

// Virtual DOM creates a abstract version of DOM and it is works faster than working directly with DOM.

// 7. What is Prop?
// ReactJs components get customized with some parameters while of their creation. Those creation parameters are called Props.

// 8. What is State in ReactJS?
// State is a place from where the required comes. The main considerable thing while dealing with state is we need to keep it as simple as possible to minimize number of stateful components.

// 9. What is syntax of JSX?
// The general usage or syntax of JSX as follows 

// Syntax: React.createElement(component, props, ...children) 

// Ex:       React.createElement(  

// MyButton,  

// {color: 'red', shadowSize: 4},  

// 'Click Here'  

// )


// 10. Can we nest JSX elements in other JSX elements?
// Yes, we can nest JSX elements in other JSX elements as like HTML elements. 


// To make a child component update its parent's state, the first step is something that you've 
// seen before: you must define a state-changing function on the parent.

// variable: the  value stored in memory; pointed to by using a identifier
// Number, string
// boolean
// null
// ndefined
// symbol
// object

// primitive are immutable; objects r mutable

// each object property has 3 attributes:
// configurable
// enumerable
// writable

// accessor properties- gett & sett

// object creation:
// 1) literal
// 2) constructor: using new
// 3) constructor pattern : inheritance
// 	fucntion fruit(name, color, taste)
// 	{
// 	this.name=
// 	...
// 	}
	
// 	var mango= new fruit(.......)
// 	we can also add more properties to different objects
// 	an inherited property is defined in the object's prototype property
// 	mango.prototype.name="";
	
// 	an own property is defined directly on object
	
// 	someobject.somefn=function(){}
	
// 4) prototype pattern for creating objcets

// 	function Fruit()
// 	{
// 	}
// 	Fruit.prototype.name="name";
// 	Fruit.prototype.showName=function()
// 	{
// 	}
	
// 	var mango = new Fruit();//all the values will come to mango
// 	mango.name will return "name"
// 	//can add new properties
	
	
	



// patterns: solutions for reeated & common tasks


// for accessing properties: dot & bracket notation

// inherited properties are inherited from objects prototype object

// in operator
// to ceck if a property exists on an object
// var mango={name:"",}
// console.log("name" in mango)

// ​// Prints true because the mango object inherited the toString method from Object.prototype. ​
// console.log("toString" in mango);  // true

// each object will have its own prototype property (which is an object) and each child object will
// inherit prototype from parent

// *hasOwnProperty
// mango.hasOwnProperty("name");//true
// mango.hasOwnProperty("toString");//false

// accessing property names:
// using for in/for

// properties inherited from Object.prototype are not enumerable;but other parent properties are enummerable


// React is a JavaScript library,

// JSX
// const element = <h1>Hello, world!</h1>;
// This funny tag syntax is neither a string nor HTML.

// It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
// JSX produces React "elements".

// You can embed any JavaScript expression in JSX by wrapping it in curly braces.

// For example, 2 + 2, user.firstName, and formatName(user) are all valid expressions:

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// JSX is an Expression Too#
// After compilation, JSX expressions become regular JavaScript objects.

// This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// Specifying Attributes with JSX
// You may use quotes to specify string literals as attributes:

// const element = <div tabIndex="0"></div>;
// You may also use curly braces to embed a JavaScript expression in an attribute:

// const element = <img src={user.avatarUrl}></img>;
// Don't put quotes around curly braces when embedding a JavaScript expression in an attribute. Otherwise JSX will treat the attribute as a string literal rather than an expression. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.

// Specifying Children with JSX
// If a tag is empty, you may close it immediately with />, like XML:

// const element = <img src={user.avatarUrl} />;
// JSX tags may contain children:

// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );

// Since JSX is closer to JavaScript than HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
// For example, class becomes className in JSX, and tabindex becomes tabIndex.

// JSX Prevents Injection Attacks
// It is safe to embed user input in JSX:

// const title = response.potentiallyMaliciousInput;
// // This is safe:
// const element = <h1>{title}</h1>;
// By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that's not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

// JSX Represents Objects
// Babel compiles JSX down to React.createElement() calls.

// These two examples are identical:

// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );


// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );
// React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:

// // Note: this structure is simplified
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world'
//   }
// };

// These objects are called "React elements". You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.


// Rendering Elements
// Elements are the smallest building blocks of React apps.

// An element describes what you want to see on the screen:

// const element = <h1>Hello, world</h1>;
// Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

// Note:
// One might confuse elements with a more widely known concept of "components". We will introduce components in the next section. Elements are what components are "made of", and we encourage you to read this section before jumping ahead.

// Rendering an Element into the DOM
// Let's say there is a <div> somewhere in your HTML file:

// <div id="root"></div>
// We call this a "root" DOM node because everything inside it will be managed by React DOM.

// Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

// To render a React element into a root DOM node, pass both to ReactDOM.render():

// const element = <h1>Hello, world</h1>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


// Updating the Rendered Element
// React elements are immutable. Once you create an element, you can't change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

// With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().

// Consider this ticking clock example:

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);
// It calls ReactDOM.render() every second from a setInterval() callback.
// In practice, most React apps only call ReactDOM.render() once

// React Only Updates What's Necessary
// React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.
// Even though we create an element describing the whole UI tree on every tick, only the text node whose contents has changed gets updated by React DOM.

// In our experience, thinking about how the UI should look at any given moment rather than how to change it over time eliminates a whole class of bugs.

// Components and Props
// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

// Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

// Functional and Class Components
// The simplest way to define a component is to write a JavaScript function:

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// This function is a valid React component because it accepts a single "props" object argument with data and returns a React element. We call such components "functional" because they are literally JavaScript functions.

// You can also use an ES6 class to define a component:

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// The above two components are equivalent from React's point of view.

// Classes have some additional features 

// Rendering a Component
// Previously, we only encountered React elements that represent DOM tags:

// const element = <div />;
// However, elements can also represent user-defined components:

// const element = <Welcome name="Sara" />;
// When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object "props".

// For example, this code renders "Hello, Sara" on the page:

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// Always start component names with a capital letter.
// For example, <div /> represents a DOM tag, but <Welcome /> represents a component and requires Welcome to be in scope.

// Composing Components
// Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

// For example, we can create an App component that renders Welcome many times:

// For example, we can create an App component that renders Welcome many times:

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// Typically, new React apps have a single App component at the very top. However, if you integrate React into an existing app, you might start bottom-up with a small component like Button and gradually work your way to the top of the view hierarchy.

// Caveat:
// Components must return a single root element. This is why we added a <div> to contain all the <Welcome /> elements.


// Extracting Components
// Don't be afraid to split components into smaller components.

// For example, consider this Comment component:

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// It accepts author (an object), text (a string), and date (a date) as props, and describes a comment on a social media website.

// This component can be tricky to change because of all the nesting, and it is also hard to reuse individual parts of it. Let's extract a few components from it.

// First, we will extract Avatar:

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }
// The Avatar doesn't need to know that it is being rendered inside a Comment. This is why we have given its prop a more generic name: user rather than author.

// We recommend naming props from the component's own point of view rather than the context in which it is being used.

// We can now simplify Comment a tiny bit:

// We can now simplify Comment a tiny bit:

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <Avatar user={props.author} />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// Next, we will extract a UserInfo component that renders an Avatar next to user's name:

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }

// This lets us simplify Comment even further:

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }
// Try it on CodePen.

// Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component.

// Props are Read-Only
// Whether you declare a component as a function or a class, it must never modify its own props. Consider this sum function:

// function sum(a, b) {
//   return a + b;
// }
// Such functions are called "pure" because they do not attempt to change their inputs, and always return the same result for the same inputs.

// In contrast, this function is impure because it changes its own input:

// function withdraw(account, amount) {
//   account.total -= amount;
// }
// React is pretty flexible but it has a single strict rule:

// All React components must act like pure functions with respect to their props.

// Of course, application UIs are dynamic and change over time. In the next section, we will introduce a new concept of "state". State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.

// State and Lifecycle
// Consider the ticking clock example from one of the previous sections.

// So far we have only learned one way to update the UI.

// We call ReactDOM.render() to change the rendered output:

// In this section, we will learn how to make the Clock component truly reusable and encapsulated. It will set up its own timer and update itself every second.

// We can start by encapsulating how the clock looks:

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// However, it misses a crucial requirement: the fact that the Clock sets up a timer and updates the UI every second should be an implementation detail of the Clock.

// Ideally we want to write this once and have the Clock update itself:

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );
// To implement this, we need to add "state" to the Clock component.

// State is similar to props, but it is private and fully controlled by the component.

// We mentioned before that components defined as classes have some additional features. Local state is exactly that: a feature available only to classes.


// Converting a Function to a Class
// You can convert a functional component like Clock to a class in five steps:

// Create an ES6 class with the same name that extends React.Component.

// Add a single empty method to it called render().

// Move the body of the function into the render() method.

// Replace props with this.props in the render() body.

// Delete the remaining empty function declaration.

// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// Clock is now defined as a class rather than a function.

// This lets us use additional features such as local state and lifecycle hooks.

// Adding Local State to a Class
// We will move the date from props to state in three steps:

// 1) Replace this.props.date with this.state.date in the render() method:

// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// 2) Add a class constructor that assigns the initial this.state:

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// Note how we pass props to the base constructor:

// Note how we pass props to the base constructor:

//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
// Class components should always call the base constructor with props.

// 3) Remove the date prop from the <Clock /> element:

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );
// We will later add the timer code back to the component itself.

// The result looks like this:

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

// Next, we'll make the Clock set up its own timer and update itself every second.

// Adding Lifecycle Methods to a Class
// In applications with many components, it's very important to free up resources taken by the components when they are destroyed.

// We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called "mounting" in React.

// We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called "unmounting" in React.

// We can declare special methods on the component class to run some code when a component mounts and unmounts:

//  componentDidMount() {

//   }

//   componentWillUnmount() {

//   }
//   These methods are called "lifecycle hooks".

// The componentDidMount() hook runs after the component output has been rendered to the DOM. This is a good place to set up a timer:

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
// Note how we save the timer ID right on this.
// While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store something that is not used for the visual output.

// If you don't use something in render(), it shouldn't be in the state.

// We will tear down the timer in the componentWillUnmount() lifecycle hook:

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
// Finally, we will implement the tick() method that runs every second.

// It will use this.setState() to schedule updates to the component local state:

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );
// Now the clock ticks every second.

// Let's quickly recap what's going on and the order in which the methods are called:

// 1) When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.

// 2) React then calls the Clock component's render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock's render output.

// 3) When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle hook. Inside it, the Clock component asks the browser to set up a timer to call tick() once a second.

// 4) Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

// 5) If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle hook so the timer is stopped.

// Using State Correctly
// There are three things you should know about setState().

// Do Not Modify State Directly
// For example, this will not re-render a component:

// // Wrong
// this.state.comment = 'Hello';
// Instead, use setState():

// // Correct
// this.setState({comment: 'Hello'});
// The only place where you can assign this.state is the constructor.

// State Updates May Be Asynchronous
// React may batch multiple setState() calls into a single update for performance.

// Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

// For example, this code may fail to update the counter:

// // Wrong
// this.setState({
//   counter: this.state.counter + this.props.increment,
// });
// To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

// // Correct
// this.setState((prevState, props) => ({
//   counter: prevState.counter + props.increment
// }));
// We used an arrow function above, but it also works with regular functions:
// // Correct
// this.setState(function(prevState, props) {
//   return {
//     counter: prevState.counter + props.increment
//   };
// });

// State Updates are Merged
// When you call setState(), React merges the object you provide into the current state.

// For example, your state may contain several independent variables:

//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//       comments: []
//     };
//   }
// Then you can update them independently with separate setState() calls:

// Then you can update them independently with separate setState() calls:

//   componentDidMount() {
//     fetchPosts().then(response => {
//       this.setState({
//         posts: response.posts
//       });
//     });

//     fetchComments().then(response => {
//       this.setState({
//         comments: response.comments
//       });
//     });
//   }
// The merging is shallow, so this.setState({comments}) leaves this.state.posts intact, but completely replaces this.state.comments.


// The Data Flows Down
// Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn't care whether it is defined as a function or a class.

// This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

// A component may choose to pass its state down as props to its child components:

// <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
// This also works for user-defined components:

// <FormattedDate date={this.state.date} />
// The FormattedDate component would receive the date in its props and wouldn't know whether it came from the Clock's state, from the Clock's props, or was typed by hand:
// function FormattedDate(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }

// This is commonly called a "top-down" or "unidirectional" data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components "below" them in the tree.

// If you imagine a component tree as a waterfall of props, each component's state is like an additional water source that joins it at an arbitrary point but also flows down.

// To show that all components are truly isolated, we can create an App component that renders three <Clock>s:
// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// Each Clock sets up its own timer and updates independently.

// In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. You can use stateless components inside stateful components, and vice versa.

// Handling Events
// Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

// React events are named using camelCase, rather than lowercase.
// With JSX you pass a function as the event handler, rather than a string.
// For example, the HTML:

// <button onclick="activateLasers()">
//   Activate Lasers
// </button>
// is slightly different in React:

// <button onClick={activateLasers}>
//   Activate Lasers
// </button>

// Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:

// <a href="#" onclick="console.log('The link was clicked.'); return false">
//   Click me
// </a>
// In React, this could instead be:

// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }

//   return (
//     <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//   );
// }

// Here, e is a synthetic event. React defines these synthetic events according to the W3C spec, so you don't need to worry about cross-browser compatibility. See the SyntheticEvent reference guide to learn more.

// When using React you should generally not need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

// When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. For example, this Toggle component renders a button that lets the user toggle between "ON" and "OFF" states:

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );

// You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.

// This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.

// If calling bind annoys you, there are two ways you can get around this. If you are using the experimental property initializer syntax, you can use property initializers to correctly bind callbacks:

// If you aren't using property initializer syntax, you can use an arrow function in the callback:

// class LoggingButton extends React.Component {
//   handleClick() {
//     console.log('this is:', this);
//   }

//   render() {
//     // This syntax ensures `this` is bound within handleClick
//     return (
//       <button onClick={(e) => this.handleClick(e)}>
//         Click me
//       </button>
//     );
//   }
// }

// The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the property initializer syntax, to avoid this sort of performance problem.


// Conditional Rendering
// In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

// Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

// Consider these two components:

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// We'll create a Greeting component that displays either of these components depending on whether a user is logged in:

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// ReactDOM.render(
//   // Try changing to isLoggedIn={true}:
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('root')
// );

// Element Variables
// You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn't change.

// Consider these two new components representing Logout and Login buttons:

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }
// In the example below, we will create a stateful component called LoginControl.

// It will render either <LoginButton /> or <LogoutButton /> depending on its current state. It will also render a <Greeting /> from the previous example:

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button = null;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );

// While declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax. There are a few ways to inline conditions in JSX, explained below

// Inline If with Logical && Operator
// You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. It can be handy for conditionally including an element:

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// );
// Try it on CodePen.

// It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.

// Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.

// Inline If-Else with Conditional Operator
// Another method for conditionally rendering elements inline is to use the JavaScript conditional operator condition ? true : false.

// In the example below, we use it to conditionally render a small block of text.

// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//     </div>
//   );
// }
// It can also be used for larger expressions although it is less obvious what's going on:
// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       {isLoggedIn ? (
//         <LogoutButton onClick={this.handleLogoutClick} />
//       ) : (
//         <LoginButton onClick={this.handleLoginClick} />
//       )}
//     </div>
//   );
// }
// Just like in JavaScript, it is up to you to choose an appropriate style based on what you and your team consider more readable. Also remember that whenever conditions become too complex, it might be a good time to extract a component.

// In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output.

// In the example below, the <WarningBanner /> is rendered depending on the value of the prop called warn. If the value of the prop is false, then the component does not render:

// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }

//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   );
// }
// Returning null from a component's render method does not affect the firing of the component's lifecycle methods. For instance, componentWillUpdate and componentDidUpdate will still be called.


// Lists and Keys
// First, let's review how you transform lists in JavaScript.

// Given the code below, we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it:

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);
// This code logs [2, 4, 6, 8, 10] to the console.

// In React, transforming arrays into lists of elements is nearly identical.

// Rendering Multiple Components
// You can build collections of elements and include them in JSX using curly braces {}.

// Below, we loop through the numbers array using the Javascript map() function. We return an <li> element for each item. Finally, we assign the resulting array of elements to listItems:

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );
// We include the entire listItems array inside a <ul> element, and render it to the DOM:

// ReactDOM.render(
//   <ul>{listItems}</ul>,
//   document.getElementById('root')
// );
// Try it on CodePen.

// This code displays a bullet list of numbers between 1 and 5.

// Basic List Component
// Usually you would render lists inside a component.

// We can refactor the previous example into a component that accepts an array of numbers and outputs an unordered list of elements.

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );
// When you run this code, you'll be given a warning that a key should be provided for list items. A "key" is a special string attribute you need to include when creating lists of elements. We'll discuss why it's important in the next section.

// Let's assign a key to our list items inside numbers.map() and fix the missing key issue.

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

// Keys
// Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li key={number.toString()}>
//     {number}
//   </li>
// );
// The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:

// const todoItems = todos.map((todo) =>
//   <li key={todo.id}>
//     {todo.text}
//   </li>
// );
// When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort:

// const todoItems = todos.map((todo, index) =>
//   // Only do this if items have no stable IDs
//   <li key={index}>
//     {todo.text}
//   </li>
// );
// We don't recommend using indexes for keys if the items can reorder, as that would be slow. 

// Extracting Components with Keys
// Keys only make sense in the context of the surrounding array.

// For example, if you extract a ListItem component, you should keep the key on the <ListItem /> elements in the array rather than on the root <li> element in the ListItem itself.

// Example: Incorrect Key Usage

// function ListItem(props) {
//   const value = props.value;
//   return (
//     // Wrong! There is no need to specify the key here:
//     <li key={value.toString()}>
//       {value}
//     </li>
//   );
// }
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     // Wrong! The key should have been specified here:
//     <ListItem value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );
// Example: Correct Key Usage
// function ListItem(props) {
//   // Correct! There is no need to specify the key here:
//   return <li>{props.value}</li>;
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     // Correct! Key should be specified inside the array.
//     <ListItem key={number.toString()}
//               value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

// A good rule of thumb is that elements inside the map() call need keys.

// Keys Must Only Be Unique Among Siblings
// Keys used within arrays should be unique among their siblings. However they don't need to be globally unique. We can use the same keys when we produce two different arrays:

// Keys serve as a hint to React but they don't get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name:

// const content = posts.map((post) =>
//   <Post
//     key={post.id}
//     id={post.id}
//     title={post.title} />
// );
// With the example above, the Post component can read props.id, but not props.key.

// Embedding map() in JSX
// In the examples above we declared a separate listItems variable and included it in JSX:

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <ListItem key={number.toString()}
//               value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }
// JSX allows embedding any expressions in curly braces so we could inline the map() result:

// function NumberList(props) {
//   const numbers = props.numbers;
//   return (
//     <ul>
//       {numbers.map((number) =>
//         <ListItem key={number.toString()}
//                   value={number} />
//       )}
//     </ul>
//   );
// }
// Try it on CodePen.

// Sometimes this results in clearer code, but this style can also be abused. Like in JavaScript, it is up to you to decide whether it is worth extracting a variable for readability. Keep in mind that if the map() body is too nested, it might be a good time to extract a component.

// Forms
// HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:

// <form>
//   <label>
//     Name:
//     <input type="text" name="name" />
//   </label>
//   <input type="submit" value="Submit" />
// </form>
// This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it's convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called "controlled components".

// Controlled Components
// In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

// We can combine the two by making the React state be the "single source of truth". Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a "controlled component".

// With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input. For example, if we wanted to enforce that names are written with all uppercase letters, we could write handleChange as:

// handleChange(event) {
//   this.setState({value: event.target.value.toUpperCase()});
// }

// this.state = {value: ''};

// handleChange(event)
// {
//   this.setState({value:event.target.value});
// }

//  <input type="text" value={this.state.value} onChange={this.handleChange} />
//  With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input. For example, if we wanted to enforce that names are written with all uppercase letters, we could write handleChange as:

// handleChange(event) {
//   this.setState({value: event.target.value.toUpperCase()});
// }

// With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input. For example, if we wanted to enforce that names are written with all uppercase letters, we could write handleChange as:

// handleChange(event) {
//   this.setState({value: event.target.value.toUpperCase()});
// }
//  <textarea value={this.state.value} onChange={this.handleChange} />

//  The select Tag
// In HTML, <select> creates a drop-down list. For example, this HTML creates a drop-down list of flavors:

// <select>
//   <option value="grapefruit">Grapefruit</option>
//   <option value="lime">Lime</option>
//   <option selected value="coconut">Coconut</option>
//   <option value="mango">Mango</option>
// </select>
// Note that the Coconut option is initially selected, because of the selected attribute. React, instead of using this selected attribute, uses a value attribute on the root select tag. This is more convenient in a controlled component because you only need to update it in one place.

//  <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>

//   Overall, this makes it so that <input type="text">, <textarea>, and <select> all work very similarly - they all accept a value attribute that you can use to implement a controlled component.

//   Handling Multiple Inputs
// When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name.

// Alternatives to Controlled Components
// It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component. This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library. In these situations, you might want to check out uncontrolled components, an alternative technique for implementing input forms.

// Lifting State Up
// Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. Let's see how this works in action.

// In this section, we will create a temperature calculator that calculates whether the water would boil at a given temperature.

// We will start with a component called BoilingVerdict. It accepts the celsius temperature as a prop, and prints whether it is enough to boil the water:

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// Next, we will create a component called Calculator. It renders an <input> that lets you enter the temperature, and keeps its value in this.state.temperature.

// Additionally, it renders the BoilingVerdict for the current input value.

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {
//     const temperature = this.state.temperature;
//     return (
//       <fieldset>
//         <legend>Enter temperature in Celsius:</legend>
//         <input
//           value={temperature}
//           onChange={this.handleChange} />
//         <BoilingVerdict
//           celsius={parseFloat(temperature)} />
//       </fieldset>
//     );
//   }
// }

// Adding a Second Input
// Our new requirement is that, in addition to a Celsius input, we provide a Fahrenheit input, and they are kept in sync.

// We can start by extracting a TemperatureInput component from Calculator. We will add a new scale prop to it that can either be "c" or "f":

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }
//    render() {
//     const temperature = this.state.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }
// We can now change the Calculator to render two separate temperature inputs:

// class Calculator extends React.Component {
//   render() {
//     return (
//       <div>
//         <TemperatureInput scale="c" />
//         <TemperatureInput scale="f" />
//       </div>
//     );
//   }
// }
// We have two inputs now, but when you enter the temperature in one of them, the other doesn't update. This contradicts our requirement: we want to keep them in sync.

// We also can't display the BoilingVerdict from Calculator. The Calculator doesn't know the current temperature because it is hidden inside the TemperatureInput.

// Writing Conversion Functions
// First, we will write two functions to convert from Celsius to Fahrenheit and back:

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }
// These two functions convert numbers. We will write another function that takes a string temperature and a converter function as arguments and returns a string. We will use it to calculate the value of one input based on the other input.

// It returns an empty string on an invalid temperature, and it keeps the output rounded to the third decimal place:

// Lifting State Up
// Currently, both TemperatureInput components independently keep their values in the local state:

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {
//     const temperature = this.state.temperature;
// However, we want these two inputs to be in sync with each other. When we update the Celsius input, the Fahrenheit input should reflect the converted temperature, and vice versa.

// In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called "lifting state up". We will remove the local state from the TemperatureInput and move it into the Calculator instead.

// If the Calculator owns the shared state, it becomes the "source of truth" for the current temperature in both inputs. It can instruct them both to have values that are consistent with each other. Since the props of both TemperatureInput components are coming from the same parent Calculator component, the two inputs will always be in sync.

// Let's see how this works step by step.

// First, we will replace this.state.temperature with this.props.temperature in the TemperatureInput component. For now, let's pretend this.props.temperature already exists, although we will need to pass it from the Calculator in the future:
// There should be a single "source of truth" for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow.

// Lifting state involves writing more "boilerplate" code than two-way binding approaches, but as a benefit, it takes less work to find and isolate bugs. Since any state "lives" in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.

// If something can be derived from either props or state, it probably shouldn't be in the state. For example, instead of storing both celsiusValue and fahrenheitValue, we store just the last edited temperature and its scale. The value of the other input can always be calculated from them in the render() method. This lets us clear or apply rounding to the other field without losing any precision in the user input.

// When you see something wrong in the UI, you can use React Developer Tools to inspect the props and move up the tree until you find the component responsible for updating the state. This lets you trace the bugs to their source:


// Composition vs Inheritance
// React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.

// In this section, we will consider a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition.

// Containment
// Some components don't know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic "boxes".

// We recommend that such components use the special children prop to pass children elements directly into their output:

// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }
// This lets other components pass arbitrary children to them by nesting the JSX:

// function WelcomeDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         Welcome
//       </h1>
//       <p className="Dialog-message">
//         Thank you for visiting our spacecraft!
//       </p>
//     </FancyBorder>
//   );
// }
// Anything inside the <FancyBorder> JSX tag gets passed into the FancyBorder component as a children prop. Since FancyBorder renders {props.children} inside a <div>, the passed elements appear in the final output.

// While this is less common, sometimes you might need multiple "holes" in a component. In such cases you may come up with your own convention instead of using children:

// function SplitPane(props) {
//   return (
//     <div className="SplitPane">
//       <div className="SplitPane-left">
//         {props.left}
//       </div>
//       <div className="SplitPane-right">
//         {props.right}
//       </div>
//     </div>
//   );
// }
// function App() {
//   return (
//     <SplitPane
//       left={
//         <Contacts />
//       }
//       right={
//         <Chat />
//       } />
//   );
// }
// Try it on CodePen.

// React elements like <Contacts /> and <Chat /> are just objects, so you can pass them as props like any other data.
// Specialization
// Sometimes we think about components as being "special cases" of other components. For example, we might say that a WelcomeDialog is a special case of Dialog.

// In React, this is also achieved by composition, where a more "specific" component renders a more "generic" one and configures it with props:

// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         {props.title}
//       </h1>
//       <p className="Dialog-message">
//         {props.message}
//       </p>
//     </FancyBorder>
//   );
// }

// function WelcomeDialog() {
//   return (
//     <Dialog
//       title="Welcome"
//       message="Thank you for visiting our spacecraft!" />
//   );
// }

// Composition works equally well for components defined as classes:
// So What About Inheritance?
// At Facebook, we use React in thousands of components, and we haven't found any use cases where we would recommend creating component inheritance hierarchies.

// Props and composition give you all the flexibility you need to customize a component's look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.

// If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.


// JSX In Depth
// Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function. The JSX code:

// <MyButton color="blue" shadowSize={2}>
//   Click Me
// </MyButton>
// compiles into:

// React.createElement(
//   MyButton,
//   {color: 'blue', shadowSize: 2},
//   'Click Me'
// )
// JSX In Depth
// Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function. The JSX code:

// <MyButton color="blue" shadowSize={2}>
//   Click Me
// </MyButton>
// compiles into:

// React.createElement(
//   MyButton,
//   {color: 'blue', shadowSize: 2},
//   'Click Me'
// )

// Specifying The React Element Type#
// The first part of a JSX tag determines the type of the React element.

// Capitalized types indicate that the JSX tag is referring to a React component. These tags get compiled into a direct reference to the named variable, so if you use the JSX <Foo /> expression, Foo must be in scope.

// React Must Be in Scope
// Since JSX compiles into calls to React.createElement, the React library must also always be in scope from your JSX code.

// For example, both of the imports are necessary in this code, even though React and CustomButton are not directly referenced from JavaScript:

// import React from 'react';
// import CustomButton from './CustomButton';

// function WarningButton() {
//   // return React.createElement(CustomButton, {color: 'red'}, null);
//   return <CustomButton color="red" />;
// }
// If you don't use a JavaScript bundler and added React as a script tag, it is already in scope as a React global.

// Using Dot Notation for JSX Type
// You can also refer to a React component using dot-notation from within JSX. This is convenient if you have a single module that exports many React components. For example, if MyComponents.DatePicker is a component, you can use it directly from JSX with:

// import React from 'react';

// const MyComponents = {
//   DatePicker: function DatePicker(props) {
//     return <div>Imagine a {props.color} datepicker here.</div>;
//   }
// }

// function BlueDatePicker() {
//   return <MyComponents.DatePicker color="blue" />;
// }

// User-Defined Components Must Be Capitalized
// When an element type starts with a lowercase letter, it refers to a built-in component like <div> or <span> and results in a string 'div' or 'span' passed to React.createElement. Types that start with a capital letter like <Foo /> compile to React.createElement(Foo) and correspond to a component defined or imported in your JavaScript file.

// We recommend naming components with a capital letter. If you do have a component that starts with a lowercase letter, assign it to a capitalized variable before using it in JSX.

// For example, this code will not run as expected:

// import React from 'react';

// // Wrong! This is a component and should have been capitalized:
// function hello(props) {
//   // Correct! This use of <div> is legitimate because div is a valid HTML tag:
//   return <div>Hello {props.toWhat}</div>;
// }

// function HelloWorld() {
//   // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
//   return <hello toWhat="World" />;
// }
// To fix this, we will rename hello to Hello and use <Hello /> when referring to it:

// Choosing the Type at Runtime
// You cannot use a general expression as the React element type. If you do want to use a general expression to indicate the type of the element, just assign it to a capitalized variable first. This often comes up when you want to render a different component based on a prop:

// import React from 'react';
// import { PhotoStory, VideoStory } from './stories';

// const components = {
//   photo: PhotoStory,
//   video: VideoStory
// };

// function Story(props) {
//   // Wrong! JSX type can't be an expression.
//   return <components[props.storyType] story={props.story} />;
// }
// To fix this, we will assign the type to a capitalized variable first:
// import React from 'react';
// import { PhotoStory, VideoStory } from './stories';

// const components = {
//   photo: PhotoStory,
//   video: VideoStory
// };

// function Story(props) {
//   // Correct! JSX type can be a capitalized variable.
//   const SpecificStory = components[props.storyType];
//   return <SpecificStory story={props.story} />;
// }
// Props in JSX
// There are several different ways to specify props in JSX.

// JavaScript Expressions as Props
// You can pass any JavaScript expression as a prop, by surrounding it with {}. For example, in this JSX:

// <MyComponent foo={1 + 2 + 3 + 4} />

// For MyComponent, the value of props.foo will be 10 because the expression 1 + 2 + 3 + 4 gets evaluated.

// if statements and for loops are not expressions in JavaScript, so they can't be used in JSX directly. Instead, you can put these in the surrounding code. For example:

// function NumberDescriber(props) {
//   let description;
//   if (props.number % 2 == 0) {
//     description = <strong>even</strong>;
//   } else {
//     description = <i>odd</i>;
//   }
//   return <div>{props.number} is an {description} number</div>;
// }

// String Literals
// You can pass a string literal as a prop. These two JSX expressions are equivalent:

// <MyComponent message="hello world" />

// <MyComponent message={'hello world'} />
// When you pass a string literal, its value is HTML-unescaped. So these two JSX expressions are equivalent:

// <MyComponent message="&lt;3" />

// <MyComponent message={'<3'} />
// This behavior is usually not relevant. It's only mentioned here for completeness.

// Props Default to "True"
// If you pass no value for a prop, it defaults to true. These two JSX expressions are equivalent:
// This behavior is usually not relevant. It's only mentioned here for completeness.

// Props Default to "True"
// If you pass no value for a prop, it defaults to true. These two JSX expressions are equivalent:

// <MyTextBox autocomplete />

// <MyTextBox autocomplete={true} />
// In general, we don't recommend using this because it can be confused with the ES6 object shorthand {foo} which is short for {foo: foo} rather than {foo: true}. This behavior is just there so that it matches the behavior of HTML.

// Spread Attributes
// If you already have props as an object, and you want to pass it in JSX, you can use ... as a "spread" operator to pass the whole props object. These two components are equivalent:

// function App1() {
//   return <Greeting firstName="Ben" lastName="Hector" />;
// }

// function App2() {
//   const props = {firstName: 'Ben', lastName: 'Hector'};
//   return <Greeting {...props} />;
// }
// Spread attributes can be useful when you are building generic containers. However, they can also make your code messy by making it easy to pass a lot of irrelevant props to components that don't care about them. We recommend that you use this syntax sparingly.

// Children in JSX
// In JSX expressions that contain both an opening tag and a closing tag, the content between those tags is passed as a special prop: props.children. There are several different ways to pass children:

// String Literals
// You can put a string between the opening and closing tags and props.children will just be that string. This is useful for many of the built-in HTML elements. For example:

// <MyComponent>Hello world!</MyComponent>
// This is valid JSX, and props.children in MyComponent will simply be the string "Hello world!". HTML is unescaped, so you can generally write JSX just like you would write HTML in this way:

// <div>This is valid HTML &amp; JSX at the same time.</div>
// JSX removes whitespace at the beginning and ending of a line. It also removes blank lines. New lines adjacent to tags are removed; new lines that occur in the middle of string literals are condensed into a single space. So these all render to the same thing:

// <div>Hello World</div>

// <div>
//   Hello World
// </div>

// <div>
//   Hello
//   World
// </div>

// <div>

//   Hello World
// </div>
// JSX Children
// You can provide more JSX elements as the children. This is useful for displaying nested components:

// <MyContainer>
//   <MyFirstComponent />
//   <MySecondComponent />
// </MyContainer>
// You can mix together different types of children, so you can use string literals together with JSX children. This is another way in which JSX is like HTML, so that this is both valid JSX and valid HTML:

// <div>
//   Here is a list:
//   <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//   </ul>
// </div>
// A React component can't return multiple React elements, but a single JSX expression can have multiple children, so if you want a component to render multiple things you can wrap it in a div like this.

// JavaScript Expressions as Children
// You can pass any JavaScript expression as children, by enclosing it within {}. For example, these expressions are equivalent:

// <MyComponent>foo</MyComponent>

// <MyComponent>{'foo'}</MyComponent>
// This is often useful for rendering a list of JSX expressions of arbitrary length. For example, this renders an HTML list:
// function Item(props) {
//   return <li>{props.message}</li>;
// }

// function TodoList() {
//   const todos = ['finish doc', 'submit pr', 'nag dan to review'];
//   return (
//     <ul>
//       {todos.map((message) => <Item key={message} message={message} />)}
//     </ul>
//   );
// }
// JavaScript expressions can be mixed with other types of children. This is often useful in lieu of string templates:

// function Hello(props) {
//   return <div>Hello {props.addressee}!</div>;
// }


// Functions as Children
// Normally, JavaScript expressions inserted in JSX will evaluate to a string, a React element, or a list of those things. However, props.children works just like any other prop in that it can pass any sort of data, not just the sorts that React knows how to render. For example, if you have a custom component, you could have it take a callback as props.children:

// // Calls the children callback numTimes to produce a repeated component
// function Repeat(props) {
//   let items = [];
//   for (let i = 0; i < props.numTimes; i++) {
//     items.push(props.children(i));
//   }
//   return <div>{items}</div>;
// }

// function ListOfTenThings() {
//   return (
//     <Repeat numTimes={10}>
//       {(index) => <div key={index}>This is item {index} in the list</div>}
//     </Repeat>
//   );
// }
// Children passed to a custom component can be anything, as long as that component transforms them into something React can understand before rendering. This usage is not common, but it works if you want to stretch what JSX is capable of.


// Booleans, Null, and Undefined Are Ignored
// false, null, undefined, and true are valid children. They simply don't render. These JSX expressions will all render to the same thing:

// <div />

// <div></div>

// <div>{false}</div>

// <div>{null}</div>

// <div>{undefined}</div>

// <div>{true}</div>
// This can be useful to conditionally render React elements. This JSX only renders a <Header /> if showHeader is true:
// <div>
//   {showHeader && <Header />}
//   <Content />
// </div>
// One caveat is that some "falsy" values, such as the 0 number, are still rendered by React. For example, this code will not behave as you might expect because 0 will be printed when props.messages is an empty array:

// <div>
//   {props.messages.length &&
//     <MessageList messages={props.messages} />
//   }
// </div>
// To fix this, make sure that the expression before && is always boolean:
// <div>
//   {props.messages.length > 0 &&
//     <MessageList messages={props.messages} />
//   }
// </div>
// Conversely, if you want a value like false, true, null, or undefined to appear in the output, you have to convert it to a string first:

// <div>
//   My JavaScript variable is {String(myVariable)}.
// </div>


// Refs and the DOM
// In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.

// When to Use Refs
// There are a few good use cases for refs:

// Managing focus, text selection, or media playback.
// Triggering imperative animations.
// Integrating with third-party DOM libraries.
// Avoid using refs for anything that can be done declaratively.

// For example, instead of exposing open() and close() methods on a Dialog component, pass an isOpen prop to it.

// Adding a Ref to a DOM Element
// React supports a special attribute that you can attach to any component. The ref attribute takes a callback function, and the callback will be executed immediately after the component is mounted or unmounted.

// When the ref attribute is used on an HTML element, the ref callback receives the underlying DOM element as its argument. For example, this code uses the ref callback to store a reference to a DOM node:

// class CustomTextInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.focus = this.focus.bind(this);
//   }

//   focus() {
//     // Explicitly focus the text input using the raw DOM API
//     this.textInput.focus();
//   }

// render() {
//     // Use the `ref` callback to store a reference to the text input DOM
//     // element in an instance field (for example, this.textInput).
//     return (
//       <div>
//         <input
//           type="text"
//           ref={(input) => { this.textInput = input; }} />
//         <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.focus}
//         />
//       </div>
//     );
//   }
// }
// React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts.

// Using the ref callback just to set a property on the class is a common pattern for accessing DOM elements. The preferred way is to set the property in the ref callback like in the above example. There is even a shorter way to write it: ref={input => this.textInput = input}.

// render() {
//     // Use the `ref` callback to store a reference to the text input DOM
//     // element in an instance field (for example, this.textInput).
//     return (
//       <div>
//         <input
//           type="text"
//           ref={(input) => { this.textInput = input; }} />
//         <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.focus}
//         />
//       </div>
//     );
//   }
// }
// React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts.

// Using the ref callback just to set a property on the class is a common pattern for accessing DOM elements. The preferred way is to set the property in the ref callback like in the above example. There is even a shorter way to write it: ref={input => this.textInput = input}.

// class CustomTextInput extends React.Component {
//   // ...
// }
// Refs and Functional Components
// You may not use the ref attribute on functional components because they don't have instances:

// function MyFunctionalComponent() {
//   return <input />;
// }

// class Parent extends React.Component {
//   render() {
//     // This will *not* work!
//     return (
//       <MyFunctionalComponent
//         ref={(input) => { this.textInput = input; }} />
//     );
//   }
// }

// You should convert the component to a class if you need a ref to it, just like you do when you need lifecycle methods or state.

// You can, however, use the ref attribute inside a functional component as long as you refer to a DOM element or a class component:

// function CustomTextInput(props) {
//   // textInput must be declared here so the ref callback can refer to it
//   let textInput = null;

//   function handleClick() {
//     textInput.focus();
//   }

// return (
//     <div>
//       <input
//         type="text"
//         ref={(input) => { textInput = input; }} />
//       <input
//         type="button"
//         value="Focus the text input"
//         onClick={handleClick}
//       />
//     </div>
//   );  
// }
// Don't Overuse Refs
// Your first inclination may be to use refs to "make things happen" in your app. If this is the case, take a moment and think more critically about where state should be owned in the component hierarchy. Often, it becomes clear that the proper place to "own" that state is at a higher level in the hierarchy. See the Lifting State Up guide for examples of this.
// Legacy API: String Refs
// If you worked with React before, you might be familiar with an older API where the ref attribute is a string, like "textInput", and the DOM node is accessed as this.refs.textInput. We advise against it because string refs have some issues, are considered legacy, and are likely to be removed in one of the future releases. If you're currently using this.refs.textInput to access refs, we recommend the callback pattern instead.

// Caveats
// If the ref callback is defined as an inline function, it will get called twice during updates, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one. You can avoid this by defining the ref callback as a bound method on the class, but note that it shouldn't matter in most cases.


// Uncontrolled Components
// In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

// To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.

// For example, this code accepts a single name in an uncontrolled component:

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.input.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" ref={(input) => this.input = input} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.input.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" ref={(input) => this.input = input} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// Default Values
// In the React rendering lifecycle, the value attribute on form elements will override the value in the DOM. With an uncontrolled component, you often want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a defaultValue attribute instead of value.

// render() {
//   return (
//     <form onSubmit={this.handleSubmit}>
//       <label>
//         Name:
//         <input
//           defaultValue="Bob"
//           type="text"
//           ref={(input) => this.input = input} />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }
// Likewise, <input type="checkbox"> and <input type="radio"> support defaultChecked, and <select> and <textarea> supports defaultValue.


// Uncontrolled inputs are similar to traditional HTML form inputs:

// class Form extends Component {
//   render() {
//     return (
//       <div>
//         <input type="text" />
//       </div>
//     );
//   }
// }
// It remembers what you typed. You can then get its value using a ref. For example, in onClick handler of a button:
// class Form extends Component {
//   handleSubmitClick = () => {
//     const name = this._name.value;
//     // do something with `name`
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={input => this._name = input} />
//         <button onClick={this.handleSubmitClick}>Sign up</button>
//       </div>
//     );
//   }
// }
// Put differently, you have to ‘pull’ the value from the field when you need it. This typically happens when the form is submitted.
// That is the simplest way to implement the form inputs. There certainly are valid cases for using it: in simple forms in the real world; and when learning React.
// A controlled input accepts its current value as a prop, as well as a callback to change that value. You could say it’s a more “React way” of approaching this (which doesn’t mean you should always use it).

// <input value={someValue} onChange={handleChange} />
// Which is fine and all… but the value of this input has to live in the state somewhere. Typically, the component that renders the input (aka the form component) saves that in its state:

// (Of course, it can be in the state of another component, or even in the separate state store, like Redux.)
// class Form extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//     };
//   }

//   handleNameChange = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.name}
//           onChange={this.handleNameChange}
//         />
//       </div>
//     );
//   }
// }
// Every time you type a new character, handleNameChange is called. It takes in the new value of the input and sets it in the state.
// This flow kind of ‘pushes’ the value changes to the form component, so the Form component always has the current value of the input, without needing to ask for it explicitly.

// This means your data (state) and UI (inputs) are always in sync. The state gives the value to the input, and the input asks the Form to change the current value.

// This also means that the form component can respond to input changes immediately; for example, by:
// in-place feedback, like validations
// disabling the button unless all fields have valid data
// enforcing a specific input format, like credit card numbers
// But if you don’t need any of that and consider uncontrolled to be simpler, go for it.
// in-place feedback, like validations
// disabling the button unless all fields have valid data
// enforcing a specific input format, like credit card numbers
// But if you don’t need any of that and consider uncontrolled to be simpler, go for it.

// in-place feedback, like validations
// disabling the button unless all fields have valid data
// enforcing a specific input format, like credit card numbers
// But if you don’t need any of that and consider uncontrolled to be simpler, go for it.

// use controlled forms in these cases:
// instant field validation	
// conditionally disabling submit button	❌	✅
// enforcing input format	❌	✅
// several inputs for one piece of data	❌	✅
// dynamic inputs

// Optimizing Performance
// Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance. Nevertheless, there are several ways you can speed up your React application.

// Avoid Reconciliation
// React builds and maintains an internal representation of the rendered UI. It includes the React elements you return from your components. This representation lets React avoid creating DOM nodes and accessing existing ones beyond necessity, as that can be slower than operations on JavaScript objects. Sometimes it is referred to as a "virtual DOM", but it works the same way on React Native.

// When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM.

// In some cases, your component can speed all of this up by overriding the lifecycle function shouldComponentUpdate, which is triggered before the re-rendering process starts. The default implementation of this function returns true, leaving React to perform the update:

// shouldComponentUpdate(nextProps, nextState) {
//   return true;
// }
// If you know that in some situations your component doesn't need to update, you can return false from shouldComponentUpdate instead, to skip the whole rendering process, including calling render() on this component and below.

// React Without ES6
// Normally you would define a React component as a plain JavaScript class:

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// If you don't use ES6 yet, you may use the create-react-class module instead:

// var createReactClass = require('create-react-class');
// var Greeting = createReactClass({
//   render: function() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// });
// The API of ES6 classes is similar to createReactClass() with a few exceptions.

// Declaring Default Props
// With functions and ES6 classes defaultProps is defined as a property on the component itself:

// class Greeting extends React.Component {
//   // ...
// }

// Greeting.defaultProps = {
//   name: 'Mary'
// };
// With createReactClass(), you need to define getDefaultProps() as a function on the passed object:

// var Greeting = createReactClass({
//   getDefaultProps: function() {
//     return {
//       name: 'Mary'
//     };
//   },

//   // ...

// });

// Declaring Default Props
// With functions and ES6 classes defaultProps is defined as a property on the component itself:

// class Greeting extends React.Component {
//   // ...
// }

// Greeting.defaultProps = {
//   name: 'Mary'
// };
// With createReactClass(), you need to define getDefaultProps() as a function on the passed object:

// var Greeting = createReactClass({
//   getDefaultProps: function() {
//     return {
//       name: 'Mary'
//     };
//   },

//   // ...

// });

// Autobinding
// In React components declared as ES6 classes, methods follow the same semantics as regular ES6 classes. This means that they don't automatically bind this to the instance. You'll have to explicitly use .bind(this) in the constructor:
// With createReactClass(), this is not necessary because it binds all methods:

// var SayHello = createReactClass({
//   getInitialState: function() {
//     return {message: 'Hello!'};
//   },

//   handleClick: function() {
//     alert(this.state.message);
//   },

//   render: function() {
//     return (
//       <button onClick={this.handleClick}>
//         Say hello
//       </button>
//     );
//   }
// });

// If you'd rather play it safe, you have a few options:

// Bind methods in the constructor.
// Use arrow functions, e.g. onClick={(e) => this.handleClick(e)}.
// Keep using createReactClass.


// React Without JSX
// JSX is not a requirement for using React. Using React without JSX is especially convenient when you don't want to set up compilation in your build environment.

// Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.

// For example, this code written with JSX:

// class Hello extends React.Component {
//   render() {
//     return <div>Hello {this.props.toWhat}</div>;
//   }
// }

// ReactDOM.render(
//   <Hello toWhat="World" />,
//   document.getElementById('root')
// );
// can be compiled to this code that does not use JSX:

// class Hello extends React.Component {
//   render() {
//     return React.createElement('div', null, `Hello ${this.props.toWhat}`);
//   }
// }

// ReactDOM.render(
//   React.createElement(Hello, {toWhat: 'World'}, null),
//   document.getElementById('root')
// );


// Web Components consists of several separate technologies. You can think of Web Components as reusable user interface widgets that are created using open Web technology. They are part of the browser, and so they do not need external libraries like jQuery or Dojo. An existing Web Component can be used without writing code, simply by adding an import statement to an HTML page. Web Components use new or still-developing standard browser capabilities.

// Web Components
// React and Web Components are built to solve different problems. Web Components provide strong encapsulation for reusable components, while React provides a declarative library that keeps the DOM in sync with your data. The two goals are complementary. As a developer, you are free to use React in your Web Components, or to use Web Components in React, or both.

// Most people who use React don't use Web Components, but you may want to, especially if you are using third-party UI components that are written using Web Components.

// Using Web Components in React
// class HelloMessage extends React.Component {
//   render() {
//     return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
//   }
// }

// Using Web Components in React
// class HelloMessage extends React.Component {
//   render() {
//     return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
//   }
// }
// function BrickFlipbox() {
//   return (
//     <brick-flipbox class="demo">
//       <div>front</div>
//       <div>back</div>
//     </brick-flipbox>
//   );
// }
// Using React in your Web Components
// const proto = Object.create(HTMLElement.prototype, {
//   attachedCallback: {
//     value: function() {
//       const mountPoint = document.createElement('span');
//       this.createShadowRoot().appendChild(mountPoint);

//       const name = this.getAttribute('name');
//       const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
//       ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
//     }
//   }
// });
// document.registerElement('x-search', {prototype: proto});

// Higher-Order Components
// A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature.

// Concretely, a higher-order component is a function that takes a component and returns a new component.

// const EnhancedComponent = higherOrderComponent(WrappedComponent);
// Whereas a component transforms props into UI, a higher-order component transforms a component into another component.

// HOCs are common in third-party React libraries, such as Redux's connect and Relay's createContainer

// Use HOCs For Cross-Cutting Concerns
// Note
// We previously recommended mixins as a way to handle cross-cutting concerns. We've since realized that mixins create more trouble than they are worth. Read more about why we've moved away from mixins and how you can transition your existing components.
// Components are the primary unit of code reuse in React. However, you'll find that some patterns aren't a straightforward fit for traditional components.

// For example, say you have a CommentList component that subscribes to an external data source to render a list of comments:


// React's diffing algorithm (called reconciliation) uses component identity to determine whether it should update the existing subtree or throw it away and mount a new one. If the component returned from render is identical (===) to the component from the previous render, React recursively updates the subtree by diffing it with the new one. If they're not equal, the previous subtree is unmounted completely.

// Normally, you shouldn't need to think about this. But it matters for HOCs because it means you can't apply an HOC to a component within the render method of a component:


// React Top-Level API
// React is the entry point to the React library. If you use React as a script tag, these top-level APIs are available on the React global. If you use ES6 with npm, you can write import React from 'react'. If you use ES5 with npm, you can write var React = require('react').

// Overview
// Components
// React components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React components can be defined by subclassing React.Component or React.PureComponent.

// React.Component
// React.PureComponent
// React.Component
// React.Component is the base class for React components when they are defined using ES6 classes.

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// See the React.Component API Reference for a list of methods and properties related to the base React.Component class.

// React.PureComponent
// React.PureComponent is exactly like React.Component but implements shouldComponentUpdate() with a shallow prop and state comparison.

// If your React component's render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.
// React.Component
// React.Component is the base class for React components when they are defined using ES6 classes.

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// See the React.Component API Reference for a list of methods and properties related to the base React.Component class.

// React.PureComponent
// React.PureComponent is exactly like React.Component but implements shouldComponentUpdate() with a shallow prop and state comparison.

// If your React component's render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.
// React.Component
// React.Component is the base class for React components when they are defined using ES6 classes.

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// See the React.Component API Reference for a list of methods and properties related to the base React.Component class.

// React.PureComponent
// React.PureComponent is exactly like React.Component but implements shouldComponentUpdate() with a shallow prop and state comparison.

// If your React component's render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.
// ou will not typically invoke React.createFactory() directly if you are using JSX. 




// React.Component
// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React.Component is provided by React.

// Overview
// React.Component is an abstract base class, so it rarely makes sense to refer to React.Component directly. Instead, you will typically subclass it, and define at least a render() method.

// Normally you would define a React component as a plain JavaScript class:

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// The Component Lifecycle
// Each component has several "lifecycle methods" that you can override to run code at particular times in the process. Methods prefixed with will are called right before something happens, and methods prefixed with did are called right after something happens.

// Mounting
// These methods are called when an instance of a component is being created and inserted into the DOM:

// constructor()
// componentWillMount()
// render()
// componentDidMount()
// Updating
// An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

// componentWillReceiveProps()
// shouldComponentUpdate()
// componentWillUpdate()
// render()
// componentDidUpdate()

// Unmounting
// This method is called when a component is being removed from the DOM:

// componentWillUnmount()
// Other APIs
// Each component also provides some other APIs:

// setState()
// forceUpdate()
// Class Properties
// defaultProps
// displayName
// Instance Properties
// props
// state

// render()
// render()
// The render() method is required.

// When called, it should examine this.props and this.state and return a single React element. This element can be either a representation of a native DOM component, such as <div />, or another composite component that you've defined yourself.

// You can also return null or false to indicate that you don't want anything rendered. When returning null or false, ReactDOM.findDOMNode(this) will return null.

// The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not directly interact with the browser. If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes components easier to think about.
// render()
// render()
// The render() method is required.

// When called, it should examine this.props and this.state and return a single React element. This element can be either a representation of a native DOM component, such as <div />, or another composite component that you've defined yourself.

// You can also return null or false to indicate that you don't want anything rendered. When returning null or false, ReactDOM.findDOMNode(this) will return null.

// The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not directly interact with the browser. If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes components easier to think about.

// render() will not be invoked if shouldComponentUpdate() returns false.

// constructor()
// constructor(props)
// The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.

// The constructor is the right place to initialize state. If you don't initialize state and you don't bind methods, you don't need to implement a constructor for your React component.

// It's okay to initialize state based on props. This effectively "forks" the props and sets the state with the initial props. Here's an example of a valid React.Component subclass constructor:

// constructor(props) {
//   super(props);
//   this.state = {
//     color: props.initialColor
//   };
// }

// Beware of this pattern, as state won't be up-to-date with any props update. Instead of syncing props to state, you often want to lift the state up.

// If you "fork" props by using them for state, you might also want to implement componentWillReceiveProps(nextProps) to keep the state up-to-date with them. But lifting state up is often easier and less bug-prone.

// componentWillMount()
// componentWillMount()
// componentWillMount() is invoked immediately before mounting occurs. It is called before render(), therefore setting state synchronously in this method will not trigger a re-rendering. Avoid introducing any side-effects or subscriptions in this method.

// This is the only lifecycle hook called on server rendering. Generally, we recommend using the constructor() instead.

// componentDidMount()
// componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.

// componentWillReceiveProps(nextProps)
// componentWillReceiveProps() is invoked before a mounted component receives new props. If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method.

// Note that React may call this method even if the props have not changed, so make sure to compare the current and next values if you only want to handle changes. This may occur when the parent component causes your component to re-render.

// React doesn't call componentWillReceiveProps with initial props during mounting. It only calls this method if some of component's props may update. Calling this.setState generally doesn't trigger componentWillReceiveProps.

// shouldComponentUpdate(nextProps, nextState)
// Use shouldComponentUpdate() to let React know if a component's output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.

// shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true. This method is not called for the initial render or when forceUpdate() is used.

// Returning false does not prevent child components from re-rendering when their state changes.

// Currently, if shouldComponentUpdate() returns false, then componentWillUpdate(), render(), and componentDidUpdate() will not be invoked. Note that in the future React may treat shouldComponentUpdate() as a hint rather than a strict directive, and returning false may still result in a re-rendering of the component.

// If you determine a specific component is slow after profiling, you may change it to inherit from React.PureComponent which implements shouldComponentUpdate() with a shallow prop and state comparison. If you are confident you want to write it by hand, you may compare this.props with nextProps and this.state with nextState and return false to tell React the update can be skipped.

// componentWillUpdate()
// componentWillUpdate(nextProps, nextState)
// componentWillUpdate() is invoked immediately before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.

// Note that you cannot call this.setState() here. If you need to update state in response to a prop change, use componentWillReceiveProps() instead.

// Note
// componentWillUpdate() will not be invoked if shouldComponentUpdate() returns false.

// componentDidUpdate(prevProps, prevState)
// componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.

// Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

// Note
// componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.

// componentWillUnmount()
// componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any DOM elements that were created in componentDidMount


// setState(updater, [callback])
// setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.

// Think of setState() as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. React does not guarantee that the state changes are applied immediately.

// setState() does not always immediately update the component. It may batch or defer the update until later. This makes reading this.state right after calling setState() a potential pitfall. Instead, use componentDidUpdate or a setState callback (setState(updater, callback)), either of which are guaranteed to fire after the update has been applied. If you need to set the state based on the previous state, read about the updater argument below.

// setState() will always lead to a re-render unless shouldComponentUpdate() returns false. If mutable objects are being used and conditional rendering logic cannot be implemented in shouldComponentUpdate(), calling setState() only when the new state differs from the previous state will avoid unnecessary re-renders.

// The first argument is an updater function with the signature:
// (prevState, props) => nextState
// prevState is a reference to the previous state. It should not be directly mutated. Instead, changes should be represented by building a new state object based on the input from prevState and props. For instance, suppose we wanted to increment a value in state by props.step:

// this.setState((prevState, props) => {
//   return {counter: prevState.counter + props.step};
// });
// Both prevState and props received by the updater function are guaranteed to be up-to-date.

// The second parameter to setState() is an optional callback function that will be executed once setState is completed and the component is re-rendered. Generally we recommend using componentDidUpdate() for such logic instead.

// You may optionally pass an object as the first argument to setState() instead of a function:

// setState(stateChange, [callback])
// This performs a shallow merge of stateChange into the new state, e.g., to adjust a shopping cart item quantity:

// this.setState({quantity: 2})

// This form of setState() is also asynchronous, and multiple calls during the same cycle may be batched together. For example, if you attempt to increment an item quantity more than once in the same cycle, that will result in the equivalent of:

// Object.assign(
//   previousState,
//   {quantity: state.quantity + 1},
//   {quantity: state.quantity + 1},
//   ...
// )
// Subsequent calls will override values from previous calls in the same cycle, so the quantity will only be incremented once. If the next state depends on the previous state, we recommend using the updater function form, instead:

// this.setState((prevState) => {
//   return {counter: prevState.quantity + 1};
// });

// forceUpdate()
// component.forceUpdate(callback)
// By default, when your component's state or props change, your component will re-render. If your render() method depends on some other data, you can tell React that the component needs re-rendering by calling forceUpdate().

// Calling forceUpdate() will cause render() to be called on the component, skipping shouldComponentUpdate(). This will trigger the normal lifecycle methods for child components, including the shouldComponentUpdate() method of each child. React will still only update the DOM if the markup changes.

// Normally you should try to avoid all uses of forceUpdate() and only read from this.props and this.state in render().

// Class Properties
// defaultProps
// defaultProps can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for null props. For example:

// class CustomButton extends React.Component {
//   // ...
// }

// CustomButton.defaultProps = {
//   color: 'blue'
// };
// If props.color is not provided, it will be set by default to 'blue':
// render() {
//     return <CustomButton /> ; // props.color will be set to blue
//   }
// If props.color is set to null, it will remain null:

//   render() {
//     return <CustomButton color={null} /> ; // props.color will remain null
//   }
// displayName
// The displayName string is used in debugging messages. JSX sets this value automatically


// Instance Properties
// props
// this.props contains the props that were defined by the caller of this component. See Components and Props for an introduction to props.

// In particular, this.props.children is a special prop, typically defined by the child tags in the JSX expression rather than in the tag itself.

// state
// The state contains data specific to this component that may change over time. The state is user-defined, and it should be a plain JavaScript object.

// If you don't use it in render(), it shouldn't be on the state. For example, you can put timer IDs directly on the instance.

// See State and Lifecycle for more information about the state.

// Never mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable.


// ReactDOM
// If you use React as a script tag, these top-level APIs are available on the ReactDOM global. If you use ES6 with npm, you can write import ReactDOM from 'react-dom'. If you use ES5 with npm, you can write var ReactDOM = require('react-dom').

// The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.

// render()
// unmountComponentAtNode()
// findDOMNode()

// render()
// ReactDOM.render(
//   element,
//   container,
//   [callback]
// )
// Render a React element into the DOM in the supplied container and return a reference to the component (or returns null for stateless components).

// If the React element was previously rendered into container, this will perform an update on it and only mutate the DOM as necessary to reflect the latest React element.

// If the optional callback is provided, it will be executed after the component is rendered or updated.
// ReactDOM.render() controls the contents of the container node you pass in. Any existing DOM elements inside are replaced when first called. Later calls use React’s DOM diffing algorithm for efficient updates.
// ReactDOM.render() does not modify the container node (only modifies the children of the container). It may be possible to insert a component to an existing DOM node without overwriting the existing children.
// ReactDOM.render() currently returns a reference to the root ReactComponent instance. However, using this return value is legacy and should be avoided because future versions of React may render components asynchronously in some cases. If you need a reference to the root ReactComponent instance, the preferred solution is to attach a callback ref to the root element.

// ReactDOM.unmountComponentAtNode(container)
// Remove a mounted React component from the DOM and clean up its event handlers and state. If no component was mounted in the container, calling this function does nothing. Returns true if a component was unmounted and false if there was no component to unmount.

// ReactDOM.findDOMNode(component)
// If this component has been mounted into the DOM, this returns the corresponding native browser DOM element. This method is useful for reading values out of the DOM, such as form field values and performing DOM measurements. In most cases, you can attach a ref to the DOM node and avoid using findDOMNode at all. When render returns null or false, findDOMNode returns null.
// findDOMNode is an escape hatch used to access the underlying DOM node. In most cases, use of this escape hatch is discouraged because it pierces the component abstraction.
// findDOMNode only works on mounted components (that is, components that have been placed in the DOM). If you try to call this on a component that has not been mounted yet (like calling findDOMNode() in render() on a component that has yet to be created) an exception will be thrown.
// findDOMNode cannot be used on functional components.


// DOM Elements
// React implements a browser-independent DOM system for performance and cross-browser compatibility. We took the opportunity to clean up a few rough edges in browser DOM implementations.

// In React, all DOM properties and attributes (including event handlers) should be camelCased. For example, the HTML attribute tabindex corresponds to the attribute tabIndex in React. The exception is aria-* and data-* attributes, which should be lowercased.

// Differences In Attributes
// There are a number of attributes that work differently between React and HTML:

// checked
// The checked attribute is supported by <input> components of type checkbox or radio. You can use it to set whether the component is checked. This is useful for building controlled components. defaultChecked is the uncontrolled equivalent, which sets whether the component is checked when it is first mounted.

// className
// To specify a CSS class, use the className attribute. This applies to all regular DOM and SVG elements like <div>, <a>, and others.

// If you use React with Web Components (which is uncommon), use the class attribute instead.

// dangerouslySetInnerHTML
// dangerouslySetInnerHTML is React's replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it's easy to inadvertently expose your users to a cross-site scripting (XSS) attack. So, you can set HTML directly from React, but you have to type out dangerouslySetInnerHTML and pass an object with a __html key, to remind yourself that it's dangerous. For example:

// function createMarkup() {
//   return {__html: 'First &middot; Second'};
// }

// function MyComponent() {
//   return <div dangerouslySetInnerHTML={createMarkup()} />;
// }
// htmlFor
// Since for is a reserved word in JavaScript, React elements use htmlFor instead.

// onChange
// The onChange event behaves as you would expect it to: whenever a form field is changed, this event is fired. We intentionally do not use the existing browser behavior because onChange is a misnomer for its behavior and React relies on this event to handle user input in real time.

// selected
// The selected attribute is supported by <option> components. You can use it to set whether the component is selected. This is useful for building controlled components.

// style
// The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes. For example:

// const divStyle = {
//   color: 'blue',
//   backgroundImage: 'url(' + imgUrl + ')',
// };

// function HelloWorldComponent() {
//   return <div style={divStyle}>Hello World!</div>;
// }
// Note that styles are not autoprefixed. To support older browsers, you need to supply corresponding style properties:

// const divStyle = {
//   WebkitTransition: 'all', // note the capital 'W' here
//   msTransition: 'all' // 'ms' is the only lowercase vendor prefix
// };

// function ComponentWithTransition() {
//   return <div style={divStyle}>This should work cross-browser</div>;
// }
// Style keys are camelCased in order to be consistent with accessing the properties on DOM nodes from JS (e.g. node.style.backgroundImage). Vendor prefixes other than ms should begin with a capital letter. This is why WebkitTransition has an uppercase "W".

// value
// The value attribute is supported by <input> and <textarea> components. You can use it to set the value of the component. This is useful for building controlled components. defaultValue is the uncontrolled equivalent, which sets the value of the component when it is first mounted.
// For example, you may declare a Button component by creating a class. When the app is running, you may have several instances of this component on screen, each with its own properties and local state. This is the traditional object-oriented UI programming. Why introduce elements?

// components, instances, elements
// In this traditional UI model, it is up to you to take care of creating and destroying child component instances. If a Form component wants to render a Button component, it needs to create its instance, and manually keep it up to date with any new information.\

// An element is a plain object describing a component instance or DOM node and its desired properties. It contains only information about the component type (for example, a Button), its properties (for example, its color), and any child elements inside it.

// An element is not an actual instance. Rather, it is a way to tell React what you want to see on the screen. You can’t call any methods on the element. It’s just an immutable description object with two fields: type: (string | ReactClass) and props: Object1.

// An element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.

// A component can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns an element tree as the output.

// When a component receives some props as an input, it is because a particular parent component returned an element with its type and these props. This is why people say that the props flows one way in React: from parents to children.

// An instance is what you refer to as this in the component class you write. It is useful for storing local state and reacting to the lifecycle events.

// Functional components don’t have instances at all. Class components have instances, but you never need to create a component instance directly—React takes care of this.

// Finally, to create elements, use React.createElement(), JSX, or an element factory helper. Don’t write elements as plain objects in the real code—just know that they are plain objects under the hood.


// Design Principles

// Composition
// The key feature of React is composition of components. Components written by different people should work well together. It is important to us that you can add functionality to a component without causing rippling changes throughout the codebase.

// For example, it should be possible to introduce some local state into a component without changing any of the components using it. Similarly, it should be possible to add some initialization and teardown code to any component when necessary.

// There is nothing "bad" about using state or lifecycle hooks in components. Like any powerful feature, they should be used in moderation, but we have no intention to remove them. On the contrary, we think they are integral parts of what makes React useful. We might enable more functional patterns in the future, but both local state and lifecycle hooks will be a part of that model.

// Components are often described as "just functions" but in our view they need to be more than that to be useful. In React, components describe any composable behavior, and this includes rendering, lifecycle, and state. Some external libraries like Relay augment components with other responsibilities such as describing data dependencies. It is possible that those ideas might make it back into React too in some form.

// ##ReactDOM##

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );

// - displays a heading 'Hello, world!' on the page

// * building blocks of React apps: elements and components
// * can create complex apps from smaller reusable pieces of code


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

// ## Virtual DOM ##
// - React only updates what's necessary
//     - React DOM compares the elements and its children to the previous one and only update only those DOM
//     elements which have changed
//     - Even though we create a new element tree structure for every change, only the node which has
//     changed will update

// ## Components ##
// - indepenet, reusable pieces of code which describe the UI and logic
// - similar to JS functions
// - accept props as inputs and return React elements describing what should appear on screen
// - Function and Class components
//     function Welcome(props) {
//         return <div>Welcome!! {props.name}</div>
//     }

//     same as

//     Class Welcome extends React.Component {
//         render() {
//             return(<div>Welcome!! {this.props.name}</div>)
//         }
//     }
// - When React encounters an user defined Component, it passes JSX attributes and children to this components
//     as a single object, known as props
// - Always name components with a capitl letter.
//     - React treats 
// * Follow bottom-up approach while working with React apps.
//     - Build small reusable components to start with


// ## Props ##
// - Props are read only
// - All React components must act like pure functions with respect to their props
// - Whether you declare a component as a function or a class, it must never modify its own props


// ## State ##
// - local or encapsulated in the component
// - not usually accessible to any component other than the one that owns it
// - a component may choose to pass its state down as props to its child components
// - allows React components to change their output over time in response to user actions, netwrork responses etc,
// - do not modify state directly using this.state=, always use this.setState({})
// - The only place where you can assign this.state is the constructor
// - State is reserved only for interactivity, that is, data that changes over time
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
    

// ## Life cycle methods ##
// 1. Mounting - Component is rendered to the DOM for the first time
// 2. Unmounting - Component is removed from the DOM
//     - free up resources taken by the component when it is destroyed

// ## Top-down or Unidirectional data flows ##
// - Data always flows from parent to children
// - Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.
// - If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.


// ## Handling events ##
// - names using camelCase, rather than lower case
// - with JSX we pass function as an event handler rather than a string
// Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:

// <a href="#" onclick="console.log('The link was clicked.'); return false">
//   Click me
// </a>
// In React, this could instead be:

// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }

//   return (
//     <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//   );
// }
// - When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.
// - In JavaScript, class methods are not bound to this by default => arrow function does
// - Do not create an arrow function in jsx because a different callback is created every time the component rerenders
//     - if this callback is passed as a prop to lower components, those components might do an extra re-rendering
//     Inside a loop, it is common to want to pass an extra parameter to an event handler. For example, if id is the row ID, either of the following would work:

// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

// * In JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false
// Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods. For instance componentDidUpdate will still be called.


// ## Keys ##
// - helps React identify which items have changed, added or removed
// - keys should ge given to elements inside an array to give them a stable identity
// - unique amoing siblings
//     they don’t need to be globally unique. We can use the same keys when we produce two different arrays
// - not recommended to use keys as indexes, might affect the performance
// - If you choose not to assign an explicit key to list items then React will default to using indexes as keys
// - A good rule of thumb is that elements inside the map() call need keys.
// - Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in 
// your component, pass it explicitly as a prop with a different name


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



// ## Uncontrolled components ##
// - form data is handled by the HTML DOM
// - To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.
// - less code, quick and dirty solution to implement forms
// - In React, an <input type="file" /> is always an uncontrolled component because its value can only be set by a user, and not programmatically.


// ## Lifting state up ##
//     - state serves as single source of truth
//     - several components need to reflect on the same changing data, it's recommended to lift the shared state 
//     up to the closest common ancestor
//     - sharing state is accomplished by moving it up to the common ancestor of the components sharing it
//     - Since any state “lives” in some component and that component alone can change it, the surface area 
//     for bugs is greatly reduced.
//     - If something can be derived from either props or state, it probably shouldn’t be in the state.

// ## Composition ##
//     - props.children lets other components pass arbitrary children to them by nesting the JSX:
//     -  components may accept arbitrary props, including primitive values, React elements, or functions

// ## Single responsibility principle ##
//     -  a component should ideally only do one thing. If it ends up growing, it should be decomposed into 
//     smaller subcomponents.

// ## DRY - Dont repeat yourself ##
//     - Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand.

// ## Accessibility ##
//     Note that all aria-* HTML attributes are fully supported in JSX. Whereas most DOM properties and attributes in React are camelCased, these attributes should be hyphen-cased (also known as kebab-case, lisp-case, etc) as they are in plain HTML
//     Every HTML form control, such as <input> and <textarea>, needs to be labeled accessibly. We need to provide descriptive labels that are also exposed to screen readers.
    







// React is front end library developed by Facebook. It's used for handling view layer for web and mobile apps. ReactJS allows us to create reusable UI components.

// React is a library for building composable user interfaces. It encourages the creation of reusable UI components which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.

// React is a library for building composable user interfaces. It encourages the creation of reusable UI components which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.

// JSX - JSX is JavaScript syntax extension. It isn't necessary to use JSX in React development, but it is recommended.

// Components - React is all about components. You need to think of everything as a component. This will help you to maintain the code when working on larger scale projects.

// Unidirectional data flow and Flux - React implements one way data flow which makes it easy to reason about your app. Flux is a pattern that helps keeping your data unidirectional.

// React Advantages
// React uses virtual DOM which is JavaScript object. This will improve apps performance since JavaScript virtual DOM is faster than the regular DOM.

// React can be used on client and server side.

// Component and Data patterns improve readability which helps to maintain larger apps.

// React can be used with other frameworks.

// React Limitations
// React only covers view layer of the app so you still need to choose other technologies to get a complete tooling set for development.

// React is using inline templating and JSX. This can seem awkward to some developers.


// React is a JavaScript library,

// JSX
// const element = <h1>Hello, world!</h1>;
// This funny tag syntax is neither a string nor HTML.

// It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
// JSX produces React "elements".

// You can embed any JavaScript expression in JSX by wrapping it in curly braces.

// For example, 2 + 2, user.firstName, and formatName(user) are all valid expressions:

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// JSX is an Expression Too#
// After compilation, JSX expressions become regular JavaScript objects.

// This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// Specifying Attributes with JSX
// You may use quotes to specify string literals as attributes:

// const element = <div tabIndex="0"></div>;
// You may also use curly braces to embed a JavaScript expression in an attribute:

// const element = <img src={user.avatarUrl}></img>;
// Don't put quotes around curly braces when embedding a JavaScript expression in an attribute. Otherwise JSX will treat the attribute as a string literal rather than an expression. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.

// Specifying Children with JSX
// If a tag is empty, you may close it immediately with />, like XML:

// const element = <img src={user.avatarUrl} />;
// JSX tags may contain children:

// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );

// Since JSX is closer to JavaScript than HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
// For example, class becomes className in JSX, and tabindex becomes tabIndex.

// JSX Prevents Injection Attacks
// It is safe to embed user input in JSX:

// const title = response.potentiallyMaliciousInput;
// // This is safe:
// const element = <h1>{title}</h1>;
// By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that's not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

// JSX Represents Objects
// Babel compiles JSX down to React.createElement() calls.

// These two examples are identical:

// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );


// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );
// React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:

// // Note: this structure is simplified
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world'
//   }
// };

// These objects are called "React elements". You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.


// Rendering Elements
// Elements are the smallest building blocks of React apps.

// An element describes what you want to see on the screen:

// const element = <h1>Hello, world</h1>;
// Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

// Note:
// One might confuse elements with a more widely known concept of "components". We will introduce components in the next section. Elements are what components are "made of", and we encourage you to read this section before jumping ahead.

// Rendering an Element into the DOM
// Let's say there is a <div> somewhere in your HTML file:

// <div id="root"></div>
// We call this a "root" DOM node because everything inside it will be managed by React DOM.

// Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

// To render a React element into a root DOM node, pass both to ReactDOM.render():

// const element = <h1>Hello, world</h1>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


// Updating the Rendered Element
// React elements are immutable. Once you create an element, you can't change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

// With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().

// Consider this ticking clock example:

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);
// It calls ReactDOM.render() every second from a setInterval() callback.
// In practice, most React apps only call ReactDOM.render() once

// React Only Updates What's Necessary
// React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.
// Even though we create an element describing the whole UI tree on every tick, only the text node whose contents has changed gets updated by React DOM.

// In our experience, thinking about how the UI should look at any given moment rather than how to change it over time eliminates a whole class of bugs.

// Components and Props
// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

// Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

// Functional and Class Components
// The simplest way to define a component is to write a JavaScript function:

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// This function is a valid React component because it accepts a single "props" object argument with data and returns a React element. We call such components "functional" because they are literally JavaScript functions.

// You can also use an ES6 class to define a component:

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// The above two components are equivalent from React's point of view.

// Classes have some additional features 

// Rendering a Component
// Previously, we only encountered React elements that represent DOM tags:

// const element = <div />;
// However, elements can also represent user-defined components:

// const element = <Welcome name="Sara" />;
// When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object "props".

// For example, this code renders "Hello, Sara" on the page:

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// Always start component names with a capital letter.
// For example, <div /> represents a DOM tag, but <Welcome /> represents a component and requires Welcome to be in scope.

// Composing Components
// Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

// For example, we can create an App component that renders Welcome many times:

// For example, we can create an App component that renders Welcome many times:

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// Typically, new React apps have a single App component at the very top. However, if you integrate React into an existing app, you might start bottom-up with a small component like Button and gradually work your way to the top of the view hierarchy.

// Caveat:
// Components must return a single root element. This is why we added a <div> to contain all the <Welcome /> elements.


// Extracting Components
// Don't be afraid to split components into smaller components.

// For example, consider this Comment component:

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// It accepts author (an object), text (a string), and date (a date) as props, and describes a comment on a social media website.

// This component can be tricky to change because of all the nesting, and it is also hard to reuse individual parts of it. Let's extract a few components from it.

// First, we will extract Avatar:

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }
// The Avatar doesn't need to know that it is being rendered inside a Comment. This is why we have given its prop a more generic name: user rather than author.

// We recommend naming props from the component's own point of view rather than the context in which it is being used.

// We can now simplify Comment a tiny bit:

// We can now simplify Comment a tiny bit:

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <Avatar user={props.author} />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// Next, we will extract a UserInfo component that renders an Avatar next to user's name:

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }

// This lets us simplify Comment even further:

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }
// Try it on CodePen.

// Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component.

// Props are Read-Only
// Whether you declare a component as a function or a class, it must never modify its own props. Consider this sum function:

// function sum(a, b) {
//   return a + b;
// }
// Such functions are called "pure" because they do not attempt to change their inputs, and always return the same result for the same inputs.

// In contrast, this function is impure because it changes its own input:

// function withdraw(account, amount) {
//   account.total -= amount;
// }
// React is pretty flexible but it has a single strict rule:

// All React components must act like pure functions with respect to their props.

// Of course, application UIs are dynamic and change over time. In the next section, we will introduce a new concept of "state". State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.

// State and Lifecycle
// Consider the ticking clock example from one of the previous sections.

// So far we have only learned one way to update the UI.

// We call ReactDOM.render() to change the rendered output:

// In this section, we will learn how to make the Clock component truly reusable and encapsulated. It will set up its own timer and update itself every second.

// We can start by encapsulating how the clock looks:

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// However, it misses a crucial requirement: the fact that the Clock sets up a timer and updates the UI every second should be an implementation detail of the Clock.

// Ideally we want to write this once and have the Clock update itself:

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );
// To implement this, we need to add "state" to the Clock component.

// State is similar to props, but it is private and fully controlled by the component.

// We mentioned before that components defined as classes have some additional features. Local state is exactly that: a feature available only to classes.


// Converting a Function to a Class
// You can convert a functional component like Clock to a class in five steps:

// Create an ES6 class with the same name that extends React.Component.

// Add a single empty method to it called render().

// Move the body of the function into the render() method.

// Replace props with this.props in the render() body.

// Delete the remaining empty function declaration.

// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// Clock is now defined as a class rather than a function.

// This lets us use additional features such as local state and lifecycle hooks.

// Adding Local State to a Class
// We will move the date from props to state in three steps:

// 1) Replace this.props.date with this.state.date in the render() method:

// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// 2) Add a class constructor that assigns the initial this.state:

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// Note how we pass props to the base constructor:

// Note how we pass props to the base constructor:

//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
// Class components should always call the base constructor with props.

// 3) Remove the date prop from the <Clock /> element:

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );
// We will later add the timer code back to the component itself.

// The result looks like this:

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

// Next, we'll make the Clock set up its own timer and update itself every second.

// Adding Lifecycle Methods to a Class
// In applications with many components, it's very important to free up resources taken by the components when they are destroyed.

// We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called "mounting" in React.

// We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called "unmounting" in React.

// We can declare special methods on the component class to run some code when a component mounts and unmounts:

//  componentDidMount() {

//   }

//   componentWillUnmount() {

//   }
//   These methods are called "lifecycle hooks".

// The componentDidMount() hook runs after the component output has been rendered to the DOM. This is a good place to set up a timer:

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
// Note how we save the timer ID right on this.
// While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store something that is not used for the visual output.

// If you don't use something in render(), it shouldn't be in the state.

// We will tear down the timer in the componentWillUnmount() lifecycle hook:

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
// Finally, we will implement the tick() method that runs every second.

// It will use this.setState() to schedule updates to the component local state:

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );
// Now the clock ticks every second.

// Let's quickly recap what's going on and the order in which the methods are called:

// 1) When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.

// 2) React then calls the Clock component's render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock's render output.

// 3) When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle hook. Inside it, the Clock component asks the browser to set up a timer to call tick() once a second.

// 4) Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

// 5) If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle hook so the timer is stopped.

// Using State Correctly
// There are three things you should know about setState().

// Do Not Modify State Directly
// For example, this will not re-render a component:

// // Wrong
// this.state.comment = 'Hello';
// Instead, use setState():

// // Correct
// this.setState({comment: 'Hello'});
// The only place where you can assign this.state is the constructor.

// State Updates May Be Asynchronous
// React may batch multiple setState() calls into a single update for performance.

// Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

// For example, this code may fail to update the counter:

// // Wrong
// this.setState({
//   counter: this.state.counter + this.props.increment,
// });
// To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

// // Correct
// this.setState((prevState, props) => ({
//   counter: prevState.counter + props.increment
// }));
// We used an arrow function above, but it also works with regular functions:
// // Correct
// this.setState(function(prevState, props) {
//   return {
//     counter: prevState.counter + props.increment
//   };
// });

// State Updates are Merged
// When you call setState(), React merges the object you provide into the current state.

// For example, your state may contain several independent variables:

//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//       comments: []
//     };
//   }
// Then you can update them independently with separate setState() calls:

// Then you can update them independently with separate setState() calls:

//   componentDidMount() {
//     fetchPosts().then(response => {
//       this.setState({
//         posts: response.posts
//       });
//     });

//     fetchComments().then(response => {
//       this.setState({
//         comments: response.comments
//       });
//     });
//   }
// The merging is shallow, so this.setState({comments}) leaves this.state.posts intact, but completely replaces this.state.comments.


// The Data Flows Down
// Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn't care whether it is defined as a function or a class.

// This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

// A component may choose to pass its state down as props to its child components:

// <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
// This also works for user-defined components:

// <FormattedDate date={this.state.date} />
// The FormattedDate component would receive the date in its props and wouldn't know whether it came from the Clock's state, from the Clock's props, or was typed by hand:
// function FormattedDate(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }

// This is commonly called a "top-down" or "unidirectional" data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components "below" them in the tree.

// If you imagine a component tree as a waterfall of props, each component's state is like an additional water source that joins it at an arbitrary point but also flows down.

// To show that all components are truly isolated, we can create an App component that renders three <Clock>s:
// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// Each Clock sets up its own timer and updates independently.

// In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. You can use stateless components inside stateful components, and vice versa.

// Handling Events
// Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

// React events are named using camelCase, rather than lowercase.
// With JSX you pass a function as the event handler, rather than a string.
// For example, the HTML:

// <button onclick="activateLasers()">
//   Activate Lasers
// </button>
// is slightly different in React:

// <button onClick={activateLasers}>
//   Activate Lasers
// </button>

// Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:

// <a href="#" onclick="console.log('The link was clicked.'); return false">
//   Click me
// </a>
// In React, this could instead be:

// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }

//   return (
//     <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//   );
// }

// Here, e is a synthetic event. React defines these synthetic events according to the W3C spec, so you don't need to worry about cross-browser compatibility. See the SyntheticEvent reference guide to learn more.

// When using React you should generally not need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

// When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. For example, this Toggle component renders a button that lets the user toggle between "ON" and "OFF" states:

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );

// You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.

// This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.

// If calling bind annoys you, there are two ways you can get around this. If you are using the experimental property initializer syntax, you can use property initializers to correctly bind callbacks:

// If you aren't using property initializer syntax, you can use an arrow function in the callback:

// class LoggingButton extends React.Component {
//   handleClick() {
//     console.log('this is:', this);
//   }

//   render() {
//     // This syntax ensures `this` is bound within handleClick
//     return (
//       <button onClick={(e) => this.handleClick(e)}>
//         Click me
//       </button>
//     );
//   }
// }

// The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the property initializer syntax, to avoid this sort of performance problem.


// Conditional Rendering
// In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

// Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

// Consider these two components:

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// We'll create a Greeting component that displays either of these components depending on whether a user is logged in:

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// ReactDOM.render(
//   // Try changing to isLoggedIn={true}:
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('root')
// );

// Element Variables
// You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn't change.

// Consider these two new components representing Logout and Login buttons:

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }
// In the example below, we will create a stateful component called LoginControl.

// It will render either <LoginButton /> or <LogoutButton /> depending on its current state. It will also render a <Greeting /> from the previous example:

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button = null;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );

// While declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax. There are a few ways to inline conditions in JSX, explained below

// Inline If with Logical && Operator
// You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. It can be handy for conditionally including an element:

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// );
// Try it on CodePen.

// It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.

// Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.

// Inline If-Else with Conditional Operator
// Another method for conditionally rendering elements inline is to use the JavaScript conditional operator condition ? true : false.

// In the example below, we use it to conditionally render a small block of text.

// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//     </div>
//   );
// }
// It can also be used for larger expressions although it is less obvious what's going on:
// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       {isLoggedIn ? (
//         <LogoutButton onClick={this.handleLogoutClick} />
//       ) : (
//         <LoginButton onClick={this.handleLoginClick} />
//       )}
//     </div>
//   );
// }
// Just like in JavaScript, it is up to you to choose an appropriate style based on what you and your team consider more readable. Also remember that whenever conditions become too complex, it might be a good time to extract a component.

// In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output.

// In the example below, the <WarningBanner /> is rendered depending on the value of the prop called warn. If the value of the prop is false, then the component does not render:

// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }

//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   );
// }
// Returning null from a component's render method does not affect the firing of the component's lifecycle methods. For instance, componentWillUpdate and componentDidUpdate will still be called.


// Lists and Keys
// First, let's review how you transform lists in JavaScript.

// Given the code below, we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it:

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);
// This code logs [2, 4, 6, 8, 10] to the console.

// In React, transforming arrays into lists of elements is nearly identical.

// Rendering Multiple Components
// You can build collections of elements and include them in JSX using curly braces {}.

// Below, we loop through the numbers array using the Javascript map() function. We return an <li> element for each item. Finally, we assign the resulting array of elements to listItems:

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );
// We include the entire listItems array inside a <ul> element, and render it to the DOM:

// ReactDOM.render(
//   <ul>{listItems}</ul>,
//   document.getElementById('root')
// );
// Try it on CodePen.

// This code displays a bullet list of numbers between 1 and 5.

// Basic List Component
// Usually you would render lists inside a component.

// We can refactor the previous example into a component that accepts an array of numbers and outputs an unordered list of elements.

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );
// When you run this code, you'll be given a warning that a key should be provided for list items. A "key" is a special string attribute you need to include when creating lists of elements. We'll discuss why it's important in the next section.

// Let's assign a key to our list items inside numbers.map() and fix the missing key issue.

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

// Keys
// Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li key={number.toString()}>
//     {number}
//   </li>
// );
// The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:

// const todoItems = todos.map((todo) =>
//   <li key={todo.id}>
//     {todo.text}
//   </li>
// );
// When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort:

// const todoItems = todos.map((todo, index) =>
//   // Only do this if items have no stable IDs
//   <li key={index}>
//     {todo.text}
//   </li>
// );
// We don't recommend using indexes for keys if the items can reorder, as that would be slow. 

// Extracting Components with Keys
// Keys only make sense in the context of the surrounding array.

// For example, if you extract a ListItem component, you should keep the key on the <ListItem /> elements in the array rather than on the root <li> element in the ListItem itself.

// Example: Incorrect Key Usage

// function ListItem(props) {
//   const value = props.value;
//   return (
//     // Wrong! There is no need to specify the key here:
//     <li key={value.toString()}>
//       {value}
//     </li>
//   );
// }
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     // Wrong! The key should have been specified here:
//     <ListItem value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );
// Example: Correct Key Usage
// function ListItem(props) {
//   // Correct! There is no need to specify the key here:
//   return <li>{props.value}</li>;
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     // Correct! Key should be specified inside the array.
//     <ListItem key={number.toString()}
//               value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

// A good rule of thumb is that elements inside the map() call need keys.

// Keys Must Only Be Unique Among Siblings
// Keys used within arrays should be unique among their siblings. However they don't need to be globally unique. We can use the same keys when we produce two different arrays:

// Keys serve as a hint to React but they don't get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name:

// const content = posts.map((post) =>
//   <Post
//     key={post.id}
//     id={post.id}
//     title={post.title} />
// );
// With the example above, the Post component can read props.id, but not props.key.

// Embedding map() in JSX
// In the examples above we declared a separate listItems variable and included it in JSX:

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <ListItem key={number.toString()}
//               value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }
// JSX allows embedding any expressions in curly braces so we could inline the map() result:

// function NumberList(props) {
//   const numbers = props.numbers;
//   return (
//     <ul>
//       {numbers.map((number) =>
//         <ListItem key={number.toString()}
//                   value={number} />
//       )}
//     </ul>
//   );
// }
// Try it on CodePen.

// Sometimes this results in clearer code, but this style can also be abused. Like in JavaScript, it is up to you to decide whether it is worth extracting a variable for readability. Keep in mind that if the map() body is too nested, it might be a good time to extract a component.

// Forms
// HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:

// <form>
//   <label>
//     Name:
//     <input type="text" name="name" />
//   </label>
//   <input type="submit" value="Submit" />
// </form>
// This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it's convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called "controlled components".

// Controlled Components
// In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

// We can combine the two by making the React state be the "single source of truth". Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a "controlled component".

// With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input. For example, if we wanted to enforce that names are written with all uppercase letters, we could write handleChange as:

// handleChange(event) {
//   this.setState({value: event.target.value.toUpperCase()});
// }

// this.state = {value: ''};

// handleChange(event)
// {
//   this.setState({value:event.target.value});
// }

//  <input type="text" value={this.state.value} onChange={this.handleChange} />
//  With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input. For example, if we wanted to enforce that names are written with all uppercase letters, we could write handleChange as:

// handleChange(event) {
//   this.setState({value: event.target.value.toUpperCase()});
// }

// With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input. For example, if we wanted to enforce that names are written with all uppercase letters, we could write handleChange as:

// handleChange(event) {
//   this.setState({value: event.target.value.toUpperCase()});
// }
//  <textarea value={this.state.value} onChange={this.handleChange} />

//  The select Tag
// In HTML, <select> creates a drop-down list. For example, this HTML creates a drop-down list of flavors:

// <select>
//   <option value="grapefruit">Grapefruit</option>
//   <option value="lime">Lime</option>
//   <option selected value="coconut">Coconut</option>
//   <option value="mango">Mango</option>
// </select>
// Note that the Coconut option is initially selected, because of the selected attribute. React, instead of using this selected attribute, uses a value attribute on the root select tag. This is more convenient in a controlled component because you only need to update it in one place.

//  <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>

//   Overall, this makes it so that <input type="text">, <textarea>, and <select> all work very similarly - they all accept a value attribute that you can use to implement a controlled component.

//   Handling Multiple Inputs
// When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name.

// Alternatives to Controlled Components
// It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component. This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library. In these situations, you might want to check out uncontrolled components, an alternative technique for implementing input forms.

// Lifting State Up
// Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. Let's see how this works in action.

// In this section, we will create a temperature calculator that calculates whether the water would boil at a given temperature.

// We will start with a component called BoilingVerdict. It accepts the celsius temperature as a prop, and prints whether it is enough to boil the water:

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// Next, we will create a component called Calculator. It renders an <input> that lets you enter the temperature, and keeps its value in this.state.temperature.

// Additionally, it renders the BoilingVerdict for the current input value.

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {
//     const temperature = this.state.temperature;
//     return (
//       <fieldset>
//         <legend>Enter temperature in Celsius:</legend>
//         <input
//           value={temperature}
//           onChange={this.handleChange} />
//         <BoilingVerdict
//           celsius={parseFloat(temperature)} />
//       </fieldset>
//     );
//   }
// }

// Adding a Second Input
// Our new requirement is that, in addition to a Celsius input, we provide a Fahrenheit input, and they are kept in sync.

// We can start by extracting a TemperatureInput component from Calculator. We will add a new scale prop to it that can either be "c" or "f":

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }
//    render() {
//     const temperature = this.state.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }
// We can now change the Calculator to render two separate temperature inputs:

// class Calculator extends React.Component {
//   render() {
//     return (
//       <div>
//         <TemperatureInput scale="c" />
//         <TemperatureInput scale="f" />
//       </div>
//     );
//   }
// }
// We have two inputs now, but when you enter the temperature in one of them, the other doesn't update. This contradicts our requirement: we want to keep them in sync.

// We also can't display the BoilingVerdict from Calculator. The Calculator doesn't know the current temperature because it is hidden inside the TemperatureInput.

// Writing Conversion Functions
// First, we will write two functions to convert from Celsius to Fahrenheit and back:

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }
// These two functions convert numbers. We will write another function that takes a string temperature and a converter function as arguments and returns a string. We will use it to calculate the value of one input based on the other input.

// It returns an empty string on an invalid temperature, and it keeps the output rounded to the third decimal place:

// Lifting State Up
// Currently, both TemperatureInput components independently keep their values in the local state:

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {
//     const temperature = this.state.temperature;
// However, we want these two inputs to be in sync with each other. When we update the Celsius input, the Fahrenheit input should reflect the converted temperature, and vice versa.

// In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called "lifting state up". We will remove the local state from the TemperatureInput and move it into the Calculator instead.

// If the Calculator owns the shared state, it becomes the "source of truth" for the current temperature in both inputs. It can instruct them both to have values that are consistent with each other. Since the props of both TemperatureInput components are coming from the same parent Calculator component, the two inputs will always be in sync.

// Let's see how this works step by step.

// First, we will replace this.state.temperature with this.props.temperature in the TemperatureInput component. For now, let's pretend this.props.temperature already exists, although we will need to pass it from the Calculator in the future:
// There should be a single "source of truth" for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow.

// Lifting state involves writing more "boilerplate" code than two-way binding approaches, but as a benefit, it takes less work to find and isolate bugs. Since any state "lives" in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.

// If something can be derived from either props or state, it probably shouldn't be in the state. For example, instead of storing both celsiusValue and fahrenheitValue, we store just the last edited temperature and its scale. The value of the other input can always be calculated from them in the render() method. This lets us clear or apply rounding to the other field without losing any precision in the user input.

// When you see something wrong in the UI, you can use React Developer Tools to inspect the props and move up the tree until you find the component responsible for updating the state. This lets you trace the bugs to their source:


// Composition vs Inheritance
// React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.

// In this section, we will consider a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition.

// Containment
// Some components don't know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic "boxes".

// We recommend that such components use the special children prop to pass children elements directly into their output:

// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }
// This lets other components pass arbitrary children to them by nesting the JSX:

// function WelcomeDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         Welcome
//       </h1>
//       <p className="Dialog-message">
//         Thank you for visiting our spacecraft!
//       </p>
//     </FancyBorder>
//   );
// }
// Anything inside the <FancyBorder> JSX tag gets passed into the FancyBorder component as a children prop. Since FancyBorder renders {props.children} inside a <div>, the passed elements appear in the final output.

// While this is less common, sometimes you might need multiple "holes" in a component. In such cases you may come up with your own convention instead of using children:

// function SplitPane(props) {
//   return (
//     <div className="SplitPane">
//       <div className="SplitPane-left">
//         {props.left}
//       </div>
//       <div className="SplitPane-right">
//         {props.right}
//       </div>
//     </div>
//   );
// }
// function App() {
//   return (
//     <SplitPane
//       left={
//         <Contacts />
//       }
//       right={
//         <Chat />
//       } />
//   );
// }
// Try it on CodePen.

// React elements like <Contacts /> and <Chat /> are just objects, so you can pass them as props like any other data.
// Specialization
// Sometimes we think about components as being "special cases" of other components. For example, we might say that a WelcomeDialog is a special case of Dialog.

// In React, this is also achieved by composition, where a more "specific" component renders a more "generic" one and configures it with props:

// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         {props.title}
//       </h1>
//       <p className="Dialog-message">
//         {props.message}
//       </p>
//     </FancyBorder>
//   );
// }

// function WelcomeDialog() {
//   return (
//     <Dialog
//       title="Welcome"
//       message="Thank you for visiting our spacecraft!" />
//   );
// }

// Composition works equally well for components defined as classes:
// So What About Inheritance?
// At Facebook, we use React in thousands of components, and we haven't found any use cases where we would recommend creating component inheritance hierarchies.

// Props and composition give you all the flexibility you need to customize a component's look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.

// If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.


// JSX In Depth
// Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function. The JSX code:

// <MyButton color="blue" shadowSize={2}>
//   Click Me
// </MyButton>
// compiles into:

// React.createElement(
//   MyButton,
//   {color: 'blue', shadowSize: 2},
//   'Click Me'
// )
// JSX In Depth
// Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function. The JSX code:

// <MyButton color="blue" shadowSize={2}>
//   Click Me
// </MyButton>
// compiles into:

// React.createElement(
//   MyButton,
//   {color: 'blue', shadowSize: 2},
//   'Click Me'
// )

// Specifying The React Element Type#
// The first part of a JSX tag determines the type of the React element.

// Capitalized types indicate that the JSX tag is referring to a React component. These tags get compiled into a direct reference to the named variable, so if you use the JSX <Foo /> expression, Foo must be in scope.

// React Must Be in Scope
// Since JSX compiles into calls to React.createElement, the React library must also always be in scope from your JSX code.

// For example, both of the imports are necessary in this code, even though React and CustomButton are not directly referenced from JavaScript:

// import React from 'react';
// import CustomButton from './CustomButton';

// function WarningButton() {
//   // return React.createElement(CustomButton, {color: 'red'}, null);
//   return <CustomButton color="red" />;
// }
// If you don't use a JavaScript bundler and added React as a script tag, it is already in scope as a React global.

// Using Dot Notation for JSX Type
// You can also refer to a React component using dot-notation from within JSX. This is convenient if you have a single module that exports many React components. For example, if MyComponents.DatePicker is a component, you can use it directly from JSX with:

// import React from 'react';

// const MyComponents = {
//   DatePicker: function DatePicker(props) {
//     return <div>Imagine a {props.color} datepicker here.</div>;
//   }
// }

// function BlueDatePicker() {
//   return <MyComponents.DatePicker color="blue" />;
// }

// User-Defined Components Must Be Capitalized
// When an element type starts with a lowercase letter, it refers to a built-in component like <div> or <span> and results in a string 'div' or 'span' passed to React.createElement. Types that start with a capital letter like <Foo /> compile to React.createElement(Foo) and correspond to a component defined or imported in your JavaScript file.

// We recommend naming components with a capital letter. If you do have a component that starts with a lowercase letter, assign it to a capitalized variable before using it in JSX.

// For example, this code will not run as expected:

// import React from 'react';

// // Wrong! This is a component and should have been capitalized:
// function hello(props) {
//   // Correct! This use of <div> is legitimate because div is a valid HTML tag:
//   return <div>Hello {props.toWhat}</div>;
// }

// function HelloWorld() {
//   // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
//   return <hello toWhat="World" />;
// }
// To fix this, we will rename hello to Hello and use <Hello /> when referring to it:

// Choosing the Type at Runtime
// You cannot use a general expression as the React element type. If you do want to use a general expression to indicate the type of the element, just assign it to a capitalized variable first. This often comes up when you want to render a different component based on a prop:

// import React from 'react';
// import { PhotoStory, VideoStory } from './stories';

// const components = {
//   photo: PhotoStory,
//   video: VideoStory
// };

// function Story(props) {
//   // Wrong! JSX type can't be an expression.
//   return <components[props.storyType] story={props.story} />;
// }
// To fix this, we will assign the type to a capitalized variable first:
// import React from 'react';
// import { PhotoStory, VideoStory } from './stories';

// const components = {
//   photo: PhotoStory,
//   video: VideoStory
// };

// function Story(props) {
//   // Correct! JSX type can be a capitalized variable.
//   const SpecificStory = components[props.storyType];
//   return <SpecificStory story={props.story} />;
// }
// Props in JSX
// There are several different ways to specify props in JSX.

// JavaScript Expressions as Props
// You can pass any JavaScript expression as a prop, by surrounding it with {}. For example, in this JSX:

// <MyComponent foo={1 + 2 + 3 + 4} />

// For MyComponent, the value of props.foo will be 10 because the expression 1 + 2 + 3 + 4 gets evaluated.

// if statements and for loops are not expressions in JavaScript, so they can't be used in JSX directly. Instead, you can put these in the surrounding code. For example:

// function NumberDescriber(props) {
//   let description;
//   if (props.number % 2 == 0) {
//     description = <strong>even</strong>;
//   } else {
//     description = <i>odd</i>;
//   }
//   return <div>{props.number} is an {description} number</div>;
// }

// String Literals
// You can pass a string literal as a prop. These two JSX expressions are equivalent:

// <MyComponent message="hello world" />

// <MyComponent message={'hello world'} />
// When you pass a string literal, its value is HTML-unescaped. So these two JSX expressions are equivalent:

// <MyComponent message="&lt;3" />

// <MyComponent message={'<3'} />
// This behavior is usually not relevant. It's only mentioned here for completeness.

// Props Default to "True"
// If you pass no value for a prop, it defaults to true. These two JSX expressions are equivalent:
// This behavior is usually not relevant. It's only mentioned here for completeness.

// Props Default to "True"
// If you pass no value for a prop, it defaults to true. These two JSX expressions are equivalent:

// <MyTextBox autocomplete />

// <MyTextBox autocomplete={true} />
// In general, we don't recommend using this because it can be confused with the ES6 object shorthand {foo} which is short for {foo: foo} rather than {foo: true}. This behavior is just there so that it matches the behavior of HTML.

// Spread Attributes
// If you already have props as an object, and you want to pass it in JSX, you can use ... as a "spread" operator to pass the whole props object. These two components are equivalent:

// function App1() {
//   return <Greeting firstName="Ben" lastName="Hector" />;
// }

// function App2() {
//   const props = {firstName: 'Ben', lastName: 'Hector'};
//   return <Greeting {...props} />;
// }
// Spread attributes can be useful when you are building generic containers. However, they can also make your code messy by making it easy to pass a lot of irrelevant props to components that don't care about them. We recommend that you use this syntax sparingly.

// Children in JSX
// In JSX expressions that contain both an opening tag and a closing tag, the content between those tags is passed as a special prop: props.children. There are several different ways to pass children:

// String Literals
// You can put a string between the opening and closing tags and props.children will just be that string. This is useful for many of the built-in HTML elements. For example:

// <MyComponent>Hello world!</MyComponent>
// This is valid JSX, and props.children in MyComponent will simply be the string "Hello world!". HTML is unescaped, so you can generally write JSX just like you would write HTML in this way:

// <div>This is valid HTML &amp; JSX at the same time.</div>
// JSX removes whitespace at the beginning and ending of a line. It also removes blank lines. New lines adjacent to tags are removed; new lines that occur in the middle of string literals are condensed into a single space. So these all render to the same thing:

// <div>Hello World</div>

// <div>
//   Hello World
// </div>

// <div>
//   Hello
//   World
// </div>

// <div>

//   Hello World
// </div>
// JSX Children
// You can provide more JSX elements as the children. This is useful for displaying nested components:

// <MyContainer>
//   <MyFirstComponent />
//   <MySecondComponent />
// </MyContainer>
// You can mix together different types of children, so you can use string literals together with JSX children. This is another way in which JSX is like HTML, so that this is both valid JSX and valid HTML:

// <div>
//   Here is a list:
//   <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//   </ul>
// </div>
// A React component can't return multiple React elements, but a single JSX expression can have multiple children, so if you want a component to render multiple things you can wrap it in a div like this.

// JavaScript Expressions as Children
// You can pass any JavaScript expression as children, by enclosing it within {}. For example, these expressions are equivalent:

// <MyComponent>foo</MyComponent>

// <MyComponent>{'foo'}</MyComponent>
// This is often useful for rendering a list of JSX expressions of arbitrary length. For example, this renders an HTML list:
// function Item(props) {
//   return <li>{props.message}</li>;
// }

// function TodoList() {
//   const todos = ['finish doc', 'submit pr', 'nag dan to review'];
//   return (
//     <ul>
//       {todos.map((message) => <Item key={message} message={message} />)}
//     </ul>
//   );
// }
// JavaScript expressions can be mixed with other types of children. This is often useful in lieu of string templates:

// function Hello(props) {
//   return <div>Hello {props.addressee}!</div>;
// }


// Functions as Children
// Normally, JavaScript expressions inserted in JSX will evaluate to a string, a React element, or a list of those things. However, props.children works just like any other prop in that it can pass any sort of data, not just the sorts that React knows how to render. For example, if you have a custom component, you could have it take a callback as props.children:

// // Calls the children callback numTimes to produce a repeated component
// function Repeat(props) {
//   let items = [];
//   for (let i = 0; i < props.numTimes; i++) {
//     items.push(props.children(i));
//   }
//   return <div>{items}</div>;
// }

// function ListOfTenThings() {
//   return (
//     <Repeat numTimes={10}>
//       {(index) => <div key={index}>This is item {index} in the list</div>}
//     </Repeat>
//   );
// }
// Children passed to a custom component can be anything, as long as that component transforms them into something React can understand before rendering. This usage is not common, but it works if you want to stretch what JSX is capable of.


// Booleans, Null, and Undefined Are Ignored
// false, null, undefined, and true are valid children. They simply don't render. These JSX expressions will all render to the same thing:

// <div />

// <div></div>

// <div>{false}</div>

// <div>{null}</div>

// <div>{undefined}</div>

// <div>{true}</div>
// This can be useful to conditionally render React elements. This JSX only renders a <Header /> if showHeader is true:
// <div>
//   {showHeader && <Header />}
//   <Content />
// </div>
// One caveat is that some "falsy" values, such as the 0 number, are still rendered by React. For example, this code will not behave as you might expect because 0 will be printed when props.messages is an empty array:

// <div>
//   {props.messages.length &&
//     <MessageList messages={props.messages} />
//   }
// </div>
// To fix this, make sure that the expression before && is always boolean:
// <div>
//   {props.messages.length > 0 &&
//     <MessageList messages={props.messages} />
//   }
// </div>
// Conversely, if you want a value like false, true, null, or undefined to appear in the output, you have to convert it to a string first:

// <div>
//   My JavaScript variable is {String(myVariable)}.
// </div>


// Refs and the DOM
// In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.

// When to Use Refs
// There are a few good use cases for refs:

// Managing focus, text selection, or media playback.
// Triggering imperative animations.
// Integrating with third-party DOM libraries.
// Avoid using refs for anything that can be done declaratively.

// For example, instead of exposing open() and close() methods on a Dialog component, pass an isOpen prop to it.

// Adding a Ref to a DOM Element
// React supports a special attribute that you can attach to any component. The ref attribute takes a callback function, and the callback will be executed immediately after the component is mounted or unmounted.

// When the ref attribute is used on an HTML element, the ref callback receives the underlying DOM element as its argument. For example, this code uses the ref callback to store a reference to a DOM node:

// class CustomTextInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.focus = this.focus.bind(this);
//   }

//   focus() {
//     // Explicitly focus the text input using the raw DOM API
//     this.textInput.focus();
//   }

// render() {
//     // Use the `ref` callback to store a reference to the text input DOM
//     // element in an instance field (for example, this.textInput).
//     return (
//       <div>
//         <input
//           type="text"
//           ref={(input) => { this.textInput = input; }} />
//         <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.focus}
//         />
//       </div>
//     );
//   }
// }
// React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts.

// Using the ref callback just to set a property on the class is a common pattern for accessing DOM elements. The preferred way is to set the property in the ref callback like in the above example. There is even a shorter way to write it: ref={input => this.textInput = input}.

// render() {
//     // Use the `ref` callback to store a reference to the text input DOM
//     // element in an instance field (for example, this.textInput).
//     return (
//       <div>
//         <input
//           type="text"
//           ref={(input) => { this.textInput = input; }} />
//         <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.focus}
//         />
//       </div>
//     );
//   }
// }
// React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts.

// Using the ref callback just to set a property on the class is a common pattern for accessing DOM elements. The preferred way is to set the property in the ref callback like in the above example. There is even a shorter way to write it: ref={input => this.textInput = input}.

// class CustomTextInput extends React.Component {
//   // ...
// }
// Refs and Functional Components
// You may not use the ref attribute on functional components because they don't have instances:

// function MyFunctionalComponent() {
//   return <input />;
// }

// class Parent extends React.Component {
//   render() {
//     // This will *not* work!
//     return (
//       <MyFunctionalComponent
//         ref={(input) => { this.textInput = input; }} />
//     );
//   }
// }

// You should convert the component to a class if you need a ref to it, just like you do when you need lifecycle methods or state.

// You can, however, use the ref attribute inside a functional component as long as you refer to a DOM element or a class component:

// function CustomTextInput(props) {
//   // textInput must be declared here so the ref callback can refer to it
//   let textInput = null;

//   function handleClick() {
//     textInput.focus();
//   }

// return (
//     <div>
//       <input
//         type="text"
//         ref={(input) => { textInput = input; }} />
//       <input
//         type="button"
//         value="Focus the text input"
//         onClick={handleClick}
//       />
//     </div>
//   );  
// }
// Don't Overuse Refs
// Your first inclination may be to use refs to "make things happen" in your app. If this is the case, take a moment and think more critically about where state should be owned in the component hierarchy. Often, it becomes clear that the proper place to "own" that state is at a higher level in the hierarchy. See the Lifting State Up guide for examples of this.
// Legacy API: String Refs
// If you worked with React before, you might be familiar with an older API where the ref attribute is a string, like "textInput", and the DOM node is accessed as this.refs.textInput. We advise against it because string refs have some issues, are considered legacy, and are likely to be removed in one of the future releases. If you're currently using this.refs.textInput to access refs, we recommend the callback pattern instead.

// Caveats
// If the ref callback is defined as an inline function, it will get called twice during updates, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one. You can avoid this by defining the ref callback as a bound method on the class, but note that it shouldn't matter in most cases.


// Uncontrolled Components
// In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

// To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.

// For example, this code accepts a single name in an uncontrolled component:

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.input.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" ref={(input) => this.input = input} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.input.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" ref={(input) => this.input = input} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// Default Values
// In the React rendering lifecycle, the value attribute on form elements will override the value in the DOM. With an uncontrolled component, you often want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a defaultValue attribute instead of value.

// render() {
//   return (
//     <form onSubmit={this.handleSubmit}>
//       <label>
//         Name:
//         <input
//           defaultValue="Bob"
//           type="text"
//           ref={(input) => this.input = input} />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }
// Likewise, <input type="checkbox"> and <input type="radio"> support defaultChecked, and <select> and <textarea> supports defaultValue.


// Uncontrolled inputs are similar to traditional HTML form inputs:

// class Form extends Component {
//   render() {
//     return (
//       <div>
//         <input type="text" />
//       </div>
//     );
//   }
// }
// It remembers what you typed. You can then get its value using a ref. For example, in onClick handler of a button:
// class Form extends Component {
//   handleSubmitClick = () => {
//     const name = this._name.value;
//     // do something with `name`
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={input => this._name = input} />
//         <button onClick={this.handleSubmitClick}>Sign up</button>
//       </div>
//     );
//   }
// }
// Put differently, you have to ‘pull’ the value from the field when you need it. This typically happens when the form is submitted.
// That is the simplest way to implement the form inputs. There certainly are valid cases for using it: in simple forms in the real world; and when learning React.
// A controlled input accepts its current value as a prop, as well as a callback to change that value. You could say it’s a more “React way” of approaching this (which doesn’t mean you should always use it).

// <input value={someValue} onChange={handleChange} />
// Which is fine and all… but the value of this input has to live in the state somewhere. Typically, the component that renders the input (aka the form component) saves that in its state:

// (Of course, it can be in the state of another component, or even in the separate state store, like Redux.)
// class Form extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//     };
//   }

//   handleNameChange = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.name}
//           onChange={this.handleNameChange}
//         />
//       </div>
//     );
//   }
// }
// Every time you type a new character, handleNameChange is called. It takes in the new value of the input and sets it in the state.
// This flow kind of ‘pushes’ the value changes to the form component, so the Form component always has the current value of the input, without needing to ask for it explicitly.

// This means your data (state) and UI (inputs) are always in sync. The state gives the value to the input, and the input asks the Form to change the current value.

// This also means that the form component can respond to input changes immediately; for example, by:
// in-place feedback, like validations
// disabling the button unless all fields have valid data
// enforcing a specific input format, like credit card numbers
// But if you don’t need any of that and consider uncontrolled to be simpler, go for it.
// in-place feedback, like validations
// disabling the button unless all fields have valid data
// enforcing a specific input format, like credit card numbers
// But if you don’t need any of that and consider uncontrolled to be simpler, go for it.

// in-place feedback, like validations
// disabling the button unless all fields have valid data
// enforcing a specific input format, like credit card numbers
// But if you don’t need any of that and consider uncontrolled to be simpler, go for it.

// use controlled forms in these cases:
// instant field validation	
// conditionally disabling submit button	❌	✅
// enforcing input format	❌	✅
// several inputs for one piece of data	❌	✅
// dynamic inputs

// Optimizing Performance
// Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance. Nevertheless, there are several ways you can speed up your React application.

// Avoid Reconciliation
// React builds and maintains an internal representation of the rendered UI. It includes the React elements you return from your components. This representation lets React avoid creating DOM nodes and accessing existing ones beyond necessity, as that can be slower than operations on JavaScript objects. Sometimes it is referred to as a "virtual DOM", but it works the same way on React Native.

// When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM.

// In some cases, your component can speed all of this up by overriding the lifecycle function shouldComponentUpdate, which is triggered before the re-rendering process starts. The default implementation of this function returns true, leaving React to perform the update:

// shouldComponentUpdate(nextProps, nextState) {
//   return true;
// }
// If you know that in some situations your component doesn't need to update, you can return false from shouldComponentUpdate instead, to skip the whole rendering process, including calling render() on this component and below.

// React Without ES6
// Normally you would define a React component as a plain JavaScript class:

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// If you don't use ES6 yet, you may use the create-react-class module instead:

// var createReactClass = require('create-react-class');
// var Greeting = createReactClass({
//   render: function() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// });
// The API of ES6 classes is similar to createReactClass() with a few exceptions.

// Declaring Default Props
// With functions and ES6 classes defaultProps is defined as a property on the component itself:

// class Greeting extends React.Component {
//   // ...
// }

// Greeting.defaultProps = {
//   name: 'Mary'
// };
// With createReactClass(), you need to define getDefaultProps() as a function on the passed object:

// var Greeting = createReactClass({
//   getDefaultProps: function() {
//     return {
//       name: 'Mary'
//     };
//   },

//   // ...

// });

// Declaring Default Props
// With functions and ES6 classes defaultProps is defined as a property on the component itself:

// class Greeting extends React.Component {
//   // ...
// }

// Greeting.defaultProps = {
//   name: 'Mary'
// };
// With createReactClass(), you need to define getDefaultProps() as a function on the passed object:

// var Greeting = createReactClass({
//   getDefaultProps: function() {
//     return {
//       name: 'Mary'
//     };
//   },

//   // ...

// });

// Autobinding
// In React components declared as ES6 classes, methods follow the same semantics as regular ES6 classes. This means that they don't automatically bind this to the instance. You'll have to explicitly use .bind(this) in the constructor:
// With createReactClass(), this is not necessary because it binds all methods:

// var SayHello = createReactClass({
//   getInitialState: function() {
//     return {message: 'Hello!'};
//   },

//   handleClick: function() {
//     alert(this.state.message);
//   },

//   render: function() {
//     return (
//       <button onClick={this.handleClick}>
//         Say hello
//       </button>
//     );
//   }
// });

// If you'd rather play it safe, you have a few options:

// Bind methods in the constructor.
// Use arrow functions, e.g. onClick={(e) => this.handleClick(e)}.
// Keep using createReactClass.


// React Without JSX
// JSX is not a requirement for using React. Using React without JSX is especially convenient when you don't want to set up compilation in your build environment.

// Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.

// For example, this code written with JSX:

// class Hello extends React.Component {
//   render() {
//     return <div>Hello {this.props.toWhat}</div>;
//   }
// }

// ReactDOM.render(
//   <Hello toWhat="World" />,
//   document.getElementById('root')
// );
// can be compiled to this code that does not use JSX:

// class Hello extends React.Component {
//   render() {
//     return React.createElement('div', null, `Hello ${this.props.toWhat}`);
//   }
// }

// ReactDOM.render(
//   React.createElement(Hello, {toWhat: 'World'}, null),
//   document.getElementById('root')
// );


// Web Components consists of several separate technologies. You can think of Web Components as reusable user interface widgets that are created using open Web technology. They are part of the browser, and so they do not need external libraries like jQuery or Dojo. An existing Web Component can be used without writing code, simply by adding an import statement to an HTML page. Web Components use new or still-developing standard browser capabilities.

// Web Components
// React and Web Components are built to solve different problems. Web Components provide strong encapsulation for reusable components, while React provides a declarative library that keeps the DOM in sync with your data. The two goals are complementary. As a developer, you are free to use React in your Web Components, or to use Web Components in React, or both.

// Most people who use React don't use Web Components, but you may want to, especially if you are using third-party UI components that are written using Web Components.

// Using Web Components in React
// class HelloMessage extends React.Component {
//   render() {
//     return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
//   }
// }

// Using Web Components in React
// class HelloMessage extends React.Component {
//   render() {
//     return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
//   }
// }
// function BrickFlipbox() {
//   return (
//     <brick-flipbox class="demo">
//       <div>front</div>
//       <div>back</div>
//     </brick-flipbox>
//   );
// }
// Using React in your Web Components
// const proto = Object.create(HTMLElement.prototype, {
//   attachedCallback: {
//     value: function() {
//       const mountPoint = document.createElement('span');
//       this.createShadowRoot().appendChild(mountPoint);

//       const name = this.getAttribute('name');
//       const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
//       ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
//     }
//   }
// });
// document.registerElement('x-search', {prototype: proto});

// Higher-Order Components
// A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature.

// Concretely, a higher-order component is a function that takes a component and returns a new component.

// const EnhancedComponent = higherOrderComponent(WrappedComponent);
// Whereas a component transforms props into UI, a higher-order component transforms a component into another component.

// HOCs are common in third-party React libraries, such as Redux's connect and Relay's createContainer

// Use HOCs For Cross-Cutting Concerns
// Note
// We previously recommended mixins as a way to handle cross-cutting concerns. We've since realized that mixins create more trouble than they are worth. Read more about why we've moved away from mixins and how you can transition your existing components.
// Components are the primary unit of code reuse in React. However, you'll find that some patterns aren't a straightforward fit for traditional components.

// For example, say you have a CommentList component that subscribes to an external data source to render a list of comments:


// React's diffing algorithm (called reconciliation) uses component identity to determine whether it should update the existing subtree or throw it away and mount a new one. If the component returned from render is identical (===) to the component from the previous render, React recursively updates the subtree by diffing it with the new one. If they're not equal, the previous subtree is unmounted completely.

// Normally, you shouldn't need to think about this. But it matters for HOCs because it means you can't apply an HOC to a component within the render method of a component:


// React Top-Level API
// React is the entry point to the React library. If you use React as a script tag, these top-level APIs are available on the React global. If you use ES6 with npm, you can write import React from 'react'. If you use ES5 with npm, you can write var React = require('react').

// Overview
// Components
// React components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React components can be defined by subclassing React.Component or React.PureComponent.

// React.Component
// React.PureComponent
// React.Component
// React.Component is the base class for React components when they are defined using ES6 classes.

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// See the React.Component API Reference for a list of methods and properties related to the base React.Component class.

// React.PureComponent
// React.PureComponent is exactly like React.Component but implements shouldComponentUpdate() with a shallow prop and state comparison.

// If your React component's render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.
// React.Component
// React.Component is the base class for React components when they are defined using ES6 classes.

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// See the React.Component API Reference for a list of methods and properties related to the base React.Component class.

// React.PureComponent
// React.PureComponent is exactly like React.Component but implements shouldComponentUpdate() with a shallow prop and state comparison.

// If your React component's render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.
// React.Component
// React.Component is the base class for React components when they are defined using ES6 classes.

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// See the React.Component API Reference for a list of methods and properties related to the base React.Component class.

// React.PureComponent
// React.PureComponent is exactly like React.Component but implements shouldComponentUpdate() with a shallow prop and state comparison.

// If your React component's render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.
// ou will not typically invoke React.createFactory() directly if you are using JSX. 




// React.Component
// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React.Component is provided by React.

// Overview
// React.Component is an abstract base class, so it rarely makes sense to refer to React.Component directly. Instead, you will typically subclass it, and define at least a render() method.

// Normally you would define a React component as a plain JavaScript class:

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// The Component Lifecycle
// Each component has several "lifecycle methods" that you can override to run code at particular times in the process. Methods prefixed with will are called right before something happens, and methods prefixed with did are called right after something happens.

// Mounting
// These methods are called when an instance of a component is being created and inserted into the DOM:

// constructor()
// componentWillMount()
// render()
// componentDidMount()
// Updating
// An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

// componentWillReceiveProps()
// shouldComponentUpdate()
// componentWillUpdate()
// render()
// componentDidUpdate()

// Unmounting
// This method is called when a component is being removed from the DOM:

// componentWillUnmount()
// Other APIs
// Each component also provides some other APIs:

// setState()
// forceUpdate()
// Class Properties
// defaultProps
// displayName
// Instance Properties
// props
// state

// render()
// render()
// The render() method is required.

// When called, it should examine this.props and this.state and return a single React element. This element can be either a representation of a native DOM component, such as <div />, or another composite component that you've defined yourself.

// You can also return null or false to indicate that you don't want anything rendered. When returning null or false, ReactDOM.findDOMNode(this) will return null.

// The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not directly interact with the browser. If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes components easier to think about.
// render()
// render()
// The render() method is required.

// When called, it should examine this.props and this.state and return a single React element. This element can be either a representation of a native DOM component, such as <div />, or another composite component that you've defined yourself.

// You can also return null or false to indicate that you don't want anything rendered. When returning null or false, ReactDOM.findDOMNode(this) will return null.

// The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not directly interact with the browser. If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes components easier to think about.

// render() will not be invoked if shouldComponentUpdate() returns false.

// constructor()
// constructor(props)
// The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.

// The constructor is the right place to initialize state. If you don't initialize state and you don't bind methods, you don't need to implement a constructor for your React component.

// It's okay to initialize state based on props. This effectively "forks" the props and sets the state with the initial props. Here's an example of a valid React.Component subclass constructor:

// constructor(props) {
//   super(props);
//   this.state = {
//     color: props.initialColor
//   };
// }

// Beware of this pattern, as state won't be up-to-date with any props update. Instead of syncing props to state, you often want to lift the state up.

// If you "fork" props by using them for state, you might also want to implement componentWillReceiveProps(nextProps) to keep the state up-to-date with them. But lifting state up is often easier and less bug-prone.

// componentWillMount()
// componentWillMount()
// componentWillMount() is invoked immediately before mounting occurs. It is called before render(), therefore setting state synchronously in this method will not trigger a re-rendering. Avoid introducing any side-effects or subscriptions in this method.

// This is the only lifecycle hook called on server rendering. Generally, we recommend using the constructor() instead.

// componentDidMount()
// componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.

// componentWillReceiveProps(nextProps)
// componentWillReceiveProps() is invoked before a mounted component receives new props. If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method.

// Note that React may call this method even if the props have not changed, so make sure to compare the current and next values if you only want to handle changes. This may occur when the parent component causes your component to re-render.

// React doesn't call componentWillReceiveProps with initial props during mounting. It only calls this method if some of component's props may update. Calling this.setState generally doesn't trigger componentWillReceiveProps.

// shouldComponentUpdate(nextProps, nextState)
// Use shouldComponentUpdate() to let React know if a component's output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.

// shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true. This method is not called for the initial render or when forceUpdate() is used.

// Returning false does not prevent child components from re-rendering when their state changes.

// Currently, if shouldComponentUpdate() returns false, then componentWillUpdate(), render(), and componentDidUpdate() will not be invoked. Note that in the future React may treat shouldComponentUpdate() as a hint rather than a strict directive, and returning false may still result in a re-rendering of the component.

// If you determine a specific component is slow after profiling, you may change it to inherit from React.PureComponent which implements shouldComponentUpdate() with a shallow prop and state comparison. If you are confident you want to write it by hand, you may compare this.props with nextProps and this.state with nextState and return false to tell React the update can be skipped.

// componentWillUpdate()
// componentWillUpdate(nextProps, nextState)
// componentWillUpdate() is invoked immediately before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.

// Note that you cannot call this.setState() here. If you need to update state in response to a prop change, use componentWillReceiveProps() instead.

// Note
// componentWillUpdate() will not be invoked if shouldComponentUpdate() returns false.

// componentDidUpdate(prevProps, prevState)
// componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.

// Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

// Note
// componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.

// componentWillUnmount()
// componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any DOM elements that were created in componentDidMount


// setState(updater, [callback])
// setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.

// Think of setState() as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. React does not guarantee that the state changes are applied immediately.

// setState() does not always immediately update the component. It may batch or defer the update until later. This makes reading this.state right after calling setState() a potential pitfall. Instead, use componentDidUpdate or a setState callback (setState(updater, callback)), either of which are guaranteed to fire after the update has been applied. If you need to set the state based on the previous state, read about the updater argument below.

// setState() will always lead to a re-render unless shouldComponentUpdate() returns false. If mutable objects are being used and conditional rendering logic cannot be implemented in shouldComponentUpdate(), calling setState() only when the new state differs from the previous state will avoid unnecessary re-renders.

// The first argument is an updater function with the signature:
// (prevState, props) => nextState
// prevState is a reference to the previous state. It should not be directly mutated. Instead, changes should be represented by building a new state object based on the input from prevState and props. For instance, suppose we wanted to increment a value in state by props.step:

// this.setState((prevState, props) => {
//   return {counter: prevState.counter + props.step};
// });
// Both prevState and props received by the updater function are guaranteed to be up-to-date.

// The second parameter to setState() is an optional callback function that will be executed once setState is completed and the component is re-rendered. Generally we recommend using componentDidUpdate() for such logic instead.

// You may optionally pass an object as the first argument to setState() instead of a function:

// setState(stateChange, [callback])
// This performs a shallow merge of stateChange into the new state, e.g., to adjust a shopping cart item quantity:

// this.setState({quantity: 2})

// This form of setState() is also asynchronous, and multiple calls during the same cycle may be batched together. For example, if you attempt to increment an item quantity more than once in the same cycle, that will result in the equivalent of:

// Object.assign(
//   previousState,
//   {quantity: state.quantity + 1},
//   {quantity: state.quantity + 1},
//   ...
// )
// Subsequent calls will override values from previous calls in the same cycle, so the quantity will only be incremented once. If the next state depends on the previous state, we recommend using the updater function form, instead:

// this.setState((prevState) => {
//   return {counter: prevState.quantity + 1};
// });

// forceUpdate()
// component.forceUpdate(callback)
// By default, when your component's state or props change, your component will re-render. If your render() method depends on some other data, you can tell React that the component needs re-rendering by calling forceUpdate().

// Calling forceUpdate() will cause render() to be called on the component, skipping shouldComponentUpdate(). This will trigger the normal lifecycle methods for child components, including the shouldComponentUpdate() method of each child. React will still only update the DOM if the markup changes.

// Normally you should try to avoid all uses of forceUpdate() and only read from this.props and this.state in render().

// Class Properties
// defaultProps
// defaultProps can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for null props. For example:

// class CustomButton extends React.Component {
//   // ...
// }

// CustomButton.defaultProps = {
//   color: 'blue'
// };
// If props.color is not provided, it will be set by default to 'blue':
// render() {
//     return <CustomButton /> ; // props.color will be set to blue
//   }
// If props.color is set to null, it will remain null:

//   render() {
//     return <CustomButton color={null} /> ; // props.color will remain null
//   }
// displayName
// The displayName string is used in debugging messages. JSX sets this value automatically


// Instance Properties
// props
// this.props contains the props that were defined by the caller of this component. See Components and Props for an introduction to props.

// In particular, this.props.children is a special prop, typically defined by the child tags in the JSX expression rather than in the tag itself.

// state
// The state contains data specific to this component that may change over time. The state is user-defined, and it should be a plain JavaScript object.

// If you don't use it in render(), it shouldn't be on the state. For example, you can put timer IDs directly on the instance.

// See State and Lifecycle for more information about the state.

// Never mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable.


// ReactDOM
// If you use React as a script tag, these top-level APIs are available on the ReactDOM global. If you use ES6 with npm, you can write import ReactDOM from 'react-dom'. If you use ES5 with npm, you can write var ReactDOM = require('react-dom').

// The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.

// render()
// unmountComponentAtNode()
// findDOMNode()

// render()
// ReactDOM.render(
//   element,
//   container,
//   [callback]
// )
// Render a React element into the DOM in the supplied container and return a reference to the component (or returns null for stateless components).

// If the React element was previously rendered into container, this will perform an update on it and only mutate the DOM as necessary to reflect the latest React element.

// If the optional callback is provided, it will be executed after the component is rendered or updated.
// ReactDOM.render() controls the contents of the container node you pass in. Any existing DOM elements inside are replaced when first called. Later calls use React’s DOM diffing algorithm for efficient updates.
// ReactDOM.render() does not modify the container node (only modifies the children of the container). It may be possible to insert a component to an existing DOM node without overwriting the existing children.
// ReactDOM.render() currently returns a reference to the root ReactComponent instance. However, using this return value is legacy and should be avoided because future versions of React may render components asynchronously in some cases. If you need a reference to the root ReactComponent instance, the preferred solution is to attach a callback ref to the root element.

// ReactDOM.unmountComponentAtNode(container)
// Remove a mounted React component from the DOM and clean up its event handlers and state. If no component was mounted in the container, calling this function does nothing. Returns true if a component was unmounted and false if there was no component to unmount.

// ReactDOM.findDOMNode(component)
// If this component has been mounted into the DOM, this returns the corresponding native browser DOM element. This method is useful for reading values out of the DOM, such as form field values and performing DOM measurements. In most cases, you can attach a ref to the DOM node and avoid using findDOMNode at all. When render returns null or false, findDOMNode returns null.
// findDOMNode is an escape hatch used to access the underlying DOM node. In most cases, use of this escape hatch is discouraged because it pierces the component abstraction.
// findDOMNode only works on mounted components (that is, components that have been placed in the DOM). If you try to call this on a component that has not been mounted yet (like calling findDOMNode() in render() on a component that has yet to be created) an exception will be thrown.
// findDOMNode cannot be used on functional components.


// DOM Elements
// React implements a browser-independent DOM system for performance and cross-browser compatibility. We took the opportunity to clean up a few rough edges in browser DOM implementations.

// In React, all DOM properties and attributes (including event handlers) should be camelCased. For example, the HTML attribute tabindex corresponds to the attribute tabIndex in React. The exception is aria-* and data-* attributes, which should be lowercased.

// Differences In Attributes
// There are a number of attributes that work differently between React and HTML:

// checked
// The checked attribute is supported by <input> components of type checkbox or radio. You can use it to set whether the component is checked. This is useful for building controlled components. defaultChecked is the uncontrolled equivalent, which sets whether the component is checked when it is first mounted.

// className
// To specify a CSS class, use the className attribute. This applies to all regular DOM and SVG elements like <div>, <a>, and others.

// If you use React with Web Components (which is uncommon), use the class attribute instead.

// dangerouslySetInnerHTML
// dangerouslySetInnerHTML is React's replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it's easy to inadvertently expose your users to a cross-site scripting (XSS) attack. So, you can set HTML directly from React, but you have to type out dangerouslySetInnerHTML and pass an object with a __html key, to remind yourself that it's dangerous. For example:

// function createMarkup() {
//   return {__html: 'First &middot; Second'};
// }

// function MyComponent() {
//   return <div dangerouslySetInnerHTML={createMarkup()} />;
// }
// htmlFor
// Since for is a reserved word in JavaScript, React elements use htmlFor instead.

// onChange
// The onChange event behaves as you would expect it to: whenever a form field is changed, this event is fired. We intentionally do not use the existing browser behavior because onChange is a misnomer for its behavior and React relies on this event to handle user input in real time.

// selected
// The selected attribute is supported by <option> components. You can use it to set whether the component is selected. This is useful for building controlled components.

// style
// The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes. For example:

// const divStyle = {
//   color: 'blue',
//   backgroundImage: 'url(' + imgUrl + ')',
// };

// function HelloWorldComponent() {
//   return <div style={divStyle}>Hello World!</div>;
// }
// Note that styles are not autoprefixed. To support older browsers, you need to supply corresponding style properties:

// const divStyle = {
//   WebkitTransition: 'all', // note the capital 'W' here
//   msTransition: 'all' // 'ms' is the only lowercase vendor prefix
// };

// function ComponentWithTransition() {
//   return <div style={divStyle}>This should work cross-browser</div>;
// }
// Style keys are camelCased in order to be consistent with accessing the properties on DOM nodes from JS (e.g. node.style.backgroundImage). Vendor prefixes other than ms should begin with a capital letter. This is why WebkitTransition has an uppercase "W".

// value
// The value attribute is supported by <input> and <textarea> components. You can use it to set the value of the component. This is useful for building controlled components. defaultValue is the uncontrolled equivalent, which sets the value of the component when it is first mounted.
// For example, you may declare a Button component by creating a class. When the app is running, you may have several instances of this component on screen, each with its own properties and local state. This is the traditional object-oriented UI programming. Why introduce elements?

// components, instances, elements
// In this traditional UI model, it is up to you to take care of creating and destroying child component instances. If a Form component wants to render a Button component, it needs to create its instance, and manually keep it up to date with any new information.\

// An element is a plain object describing a component instance or DOM node and its desired properties. It contains only information about the component type (for example, a Button), its properties (for example, its color), and any child elements inside it.

// An element is not an actual instance. Rather, it is a way to tell React what you want to see on the screen. You can’t call any methods on the element. It’s just an immutable description object with two fields: type: (string | ReactClass) and props: Object1.

// An element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.

// A component can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns an element tree as the output.

// When a component receives some props as an input, it is because a particular parent component returned an element with its type and these props. This is why people say that the props flows one way in React: from parents to children.

// An instance is what you refer to as this in the component class you write. It is useful for storing local state and reacting to the lifecycle events.

// Functional components don’t have instances at all. Class components have instances, but you never need to create a component instance directly—React takes care of this.

// Finally, to create elements, use React.createElement(), JSX, or an element factory helper. Don’t write elements as plain objects in the real code—just know that they are plain objects under the hood.


// Design Principles

// Composition
// The key feature of React is composition of components. Components written by different people should work well together. It is important to us that you can add functionality to a component without causing rippling changes throughout the codebase.

// For example, it should be possible to introduce some local state into a component without changing any of the components using it. Similarly, it should be possible to add some initialization and teardown code to any component when necessary.

// There is nothing "bad" about using state or lifecycle hooks in components. Like any powerful feature, they should be used in moderation, but we have no intention to remove them. On the contrary, we think they are integral parts of what makes React useful. We might enable more functional patterns in the future, but both local state and lifecycle hooks will be a part of that model.

// Components are often described as "just functions" but in our view they need to be more than that to be useful. In React, components describe any composable behavior, and this includes rendering, lifecycle, and state. Some external libraries like Relay augment components with other responsibilities such as describing data dependencies. It is possible that those ideas might make it back into React too in some form.


// ## ANGULAR VS REACT ##


// angular vs react:
// angular: full comprehensive framework mvc, two-way binding(any change to the view is reflected in data & vice-versa), provides m,v and c
// react: flux, one-way, only v, vdom-rendering performance, jsx, react native, can also be used with angular as v

// redux
// router
// webpack

// pure components

// version


// prop type checking in reactjs
// import PropTypes from 'prop-types';

// MyComponent.propTypes= {
// 	name: PropTypes.string
// 	PropTypes.bool,
// 	PropTypes.func,
// 	PropTypes.number,
// 	PropTypes.object,
// 	PropTypes.symbol
// }


// <React.Fragment>
// </React.Fragment>

// <React.StrictMode>
// </React.StrictMode>


// Render Prop: sharing code between components using a prop whose value is a function


// Refs: give access to dom nodes/react elements created in their render method

// Portals:  provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.



// * Jest vs Enzyme
// Jest
// Jest is a JavaScript unit testing framework, used by Facebook to test services and React applications.
// Jest acts as a test runner, assertion library, and mocking library.

// Jest also provides Snapshot testing, the ability to create a rendered ‘snapshot’ of a component and compare it to a previously saved ‘snapshot’. The test will fail if the two do not match. Snapshots will be saved for you beside the test file that created them in an auto-generate __snapshots__ folder.

// Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components’ output.
// Enzyme, created by Airbnb, adds some great additional utility methods for rendering a component (or multiple components), finding elements, and interacting with elements.

// Both Jest and Enzyme are specifically designed to test React applications, Jest can be used with any other Javascript app but Enzyme only works with React.
// Jest can be used without Enzyme to render components and test with snapshots, Enzyme simply adds additional functionality.
// Enzyme can be used without Jest, however Enzyme must be paired with another test runner if Jest is not used.
// As described, we will use:

// Jest as the test runner, assertion library, and mocking library
// Enzyme to provide additional testing utilities to interact with elements

// ReactJS Interview Question Bank
// Explain Higher Order Components with an example.
// What is ReactJS?
// Explain advantages and disadvantages of using ReactJS.
// Explain Virtual DOM
// Explain Diffing/Reconciliation algorithm.
// What is an Element ?
// What is a Component ?
// Differentiate between Element and Component.
// What is JSX?
// Is it necessary to use JSX in React?
// Explain Advantages and disadvantages of using JSX.
// What is a prop?
// What is a state?
// Explain the differences between state and prop.
// Different ways to create components in ReactJS
// functional component
// class component
// functional component vs class component
// stateless component
// stateful component
// advantages and disadvantages of functional/stateless component
// advantages and disadvantages of class/stateful component
// How does data binding work in ReactJS?
// React Lifecycle methods
// Which of the lifecycle methods are deprecated and why?
// How does calling setState() in each of the life cycle methods behave?
// Explain the significance of keys with an example
// Controlled Component
// Uncontrolled Component
// Controlled vs Uncontrolled
// What are Refs?
// Why do we need Refs?
// Different ways of creating Refs
// Error boundaries
// When do we use try catch
// Error boundary vs try catch
// getDerivedStateFromError vs componentDidCatch
// React strict mode?
// React pure component
// Fragment
// Hooks
// How can we change the document title for every page in ReactJS?



// # dynamic imports
// import { add } from './math';

// console.log(add(16, 26));

// import("./math").then(math => {
//   console.log(math.add(16, 26));
// });

// import ('./maths').then(math => {
// 	console.log(math.add(16,26))
// })


// React Imp Topics?

// Basics:
// Reconciliation Algo - 
// why we need keys with example?
// architecture - tic tac toe, calendar picker, table, slot machine
// usage of Refs - string, callback, createRef
// type checking - PropTypes, defaultProps
// controlled component vs uncontrolled (<input type=‘file’/>)
// class vs function
// lifecycle methods with setState() call
// props vs state


// Advanced:
// Error Boundaries vs try catch
// getDerivedStateFromError vs componentDidCatch
// render prop?
// <Fragment> - render multiple elements without a wrapper : <table><tr><td>
// <React.StrictMode>
// Pure component, React.memo

// Hooks

// pros & cons

// Javascript

// Output of
// console.log(a)
// setTimeout(0,()=>console.log(b)
// console.log(c)

// ############################################################################################################################
// React Official Docs

// # What is ReactJS?
// 	React is a JavaScript library for building user interfaces.

// # JSX
// 	- syntax extension to javascript
// 	- describe what the ui should look like
// 	- it's a template language with full power of javascript
// 	- React doesn't separate markup and logic in separate files, instead it separates concerns using components
// 	- put any valid JS expression inside a curly braces in JSX
// 	- We split JSX over multiple lines for readability. While it isn’t required, when doing this, we also recommend
// 	  wrapping it in parentheses to avoid the pitfalls of automatic semicolon insertion.
// 	- After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects
// 	- create varaibles, pass it to function as arguments, return from fucntions
// 	- attributes can also contain JS expressions
// 	- JSX is closer to JS than to HTML, hence camelCase (ex: className, tabIndex, htmlFor)
// 	- prevents Injection Attacks
// 	- By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks
// 	- JSX is compiled to JavaScript objects called as “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.
// 	- Since JSX compiles into calls to React.createElement, the React library must also always be in scope from your JSX code. (import React even for function components)

// # Element
// 	- Smallest building blocks of a React app
// 	- describe what should be displayed on screen
// 	- example: const element = <h1>Hello</h1>;
// 	- unlike browser DOM elements, React elements are plain objects
// 	- elements are what components are made of
// 	- elements are immutable
// 	- Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
// 	- the only way to update the UI is to create a new element, and pass it to ReactDOM.render().
// 	- elements represent DOM tags & user defined components
// 	- elemnts can also be user defined components: const element = <Welcome name="Sara" />;

// # Component
// 	- split the UI into independent, reusable pieces, and think about each piece in isolation
// 	- components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen
// 	- function components: written as JS fucntions
// 		- concise & simple
// 		- easy to write & understand
// 	- class components: written an JS class
// 	- When React sees an element representing a user-defined component(Capitalized), it passes JSX attributes to this component as a single object. We call this object “props”
// 	- React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.
// 	- if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component
// 	- React components let you split the UI into independent, reusable pieces, and think about each piece in isolation

// # Props
// 	- We recommend naming props from the component’s own point of view rather than the context in which it is being used
// 	- Props are Read-Only
// 	- components should act as pure functions with respect to props
// 	- pure functions do not attempt to change their inputs, and always return the same result for the same inputs

// # State 
// 	- State allows React components to change their output over time in response to user actions, network responses, and anything else
// 	- Do Not Modify State Directly, this will not re-render a component: this.state.comment = 'Hello';
// 	- use setState(): this.setState({comment: 'Hello'});
// 	- The only place where you can assign this.state is the constructor.
// 	- State Updates May Be Asynchronous
// 		React may batch multiple setState() calls into a single update for performance.
// 		Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

// 		For example, this code may fail to update the counter:

// 		// Wrong
// 		this.setState({
// 		  counter: this.state.counter + this.props.increment,
// 		});

// 		To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

// 		// Correct
// 		this.setState((state, props) => ({
// 		  counter: state.counter + props.increment
// 		}));
// 	- setState() merging is shallow - it completely replaces the state property with new value


// # Component LifeCycle
// 	- mounting : component is rendered to the DOM for the first time
// 		constructor()
// 		static getDerivedStateFromProps()
// 		render()
// 		componentDidMount()
// 	- updating:An update can be caused by changes to props or state
// 		static getDerivedStateFromProps()
// 		shouldComponentUpdate()
// 		render()
// 		getSnapshotBeforeUpdate()
// 		componentDidUpdate()
// 	- unmounting: component is removed from the DOM
// 		componentWillUnmount
// 	- Error Handling: These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
// 		static getDerivedStateFromError()
// 		componentDidCatch()

// 	- render()
// 		The render() method is the only required method in a class component.

// 		When called, it should examine this.props and this.state and return one of the following types:

// 		React elements. Typically created via JSX. For example, <div /> and <MyComponent /> are React elements that instruct React to render a DOM node, or another user-defined component, respectively.
// 		Arrays and fragments. Let you return multiple elements from render. See the documentation on fragments for more details.
// 		Portals. Let you render children into a different DOM subtree. See the documentation on portals for more details.
// 		String and numbers. These are rendered as text nodes in the DOM.
// 		Booleans or null. Render nothing. (Mostly exists to support return test && <Child /> pattern, where test is boolean.)
// 		The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.
// 		If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes components easier to think about.

// 		render() will not be invoked if shouldComponentUpdate() returns false.
// 	- constructor(props)
// 		If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
// 		The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.

// 		Typically, in React constructors are only used for two purposes:

// 		Initializing local state by assigning an object to this.state.
// 		Binding event handler methods to an instance.
// 		You should not call setState() in the constructor(). Instead, if your component needs to use local state, assign the initial state to this.state directly in the constructor:
// 		Constructor is the only place where you should assign this.state directly. In all other methods, you need to use this.setState() instead.

// 		Avoid introducing any side-effects or subscriptions in the constructor. For those use cases, use componentDidMount() instead.

// 		Avoid copying props into state! This is a common mistake:

// 			constructor(props) {
// 			 super(props);
// 			 // Don't do this!
// 			 this.state = { color: props.color };
// 			}
// 		The problem is that it’s both unnecessary (you can use this.props.color directly instead), and creates bugs (updates to the color prop won’t be reflected in the state).

// 		Only use this pattern if you intentionally want to ignore prop updates. In that case, it makes sense to rename the prop to be called initialColor or defaultColor. You can then force a component to “reset” its internal state by changing its key when necessary

// 	- componentDidMount():  method runs after the component output has been rendered to the DOM
// 		- setup Timer, Interval, call API
// 		- componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

// 		This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().

// 		You may call setState() immediately in componentDidMount(). It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state. Use this pattern with caution because it often causes performance issues. In most cases, you should be able to assign the initial state in the constructor() instead. It can, however, be necessary for cases like modals and tooltips when you need to measure a DOM node before rendering something that depends on its size or position.

// 	- componentDidUpdate(prevProps, prevState, snapshot)
// 		componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.

// 		Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

// 		componentDidUpdate(prevProps) {
// 		  // Typical usage (don't forget to compare props):
// 		  if (this.props.userID !== prevProps.userID) {
// 		    this.fetchData(this.props.userID);
// 		  }
// 		}

// 		You may call setState() immediately in componentDidUpdate() but note that it must be wrapped in a condition like in the example above, or you’ll cause an infinite loop. It would also cause an extra re-rendering which, while not visible to the user, can affect the component performance. If you’re trying to “mirror” some state to a prop coming from above, consider using the prop directly instead

// 		If your component implements the getSnapshotBeforeUpdate() lifecycle (which is rare), the value it returns will be passed as a third “snapshot” parameter to componentDidUpdate(). Otherwise this parameter will be undefined.

// 		componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.

// 	- componentWillUnmount() 
// 		is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

// 		You should not call setState() in componentWillUnmount() because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.

// 	- shouldComponentUpdate(nextProps, nextState)
// 		Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.

// 		shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true. This method is not called for the initial render or when forceUpdate() is used.

// 		This method only exists as a performance optimization. Do not rely on it to “prevent” a rendering, as this can lead to bugs. Consider using the built-in PureComponent instead of writing shouldComponentUpdate() by hand. PureComponent performs a shallow comparison of props and state, and reduces the chance that you’ll skip a necessary update.

// 		If you are confident you want to write it by hand, you may compare this.props with nextProps and this.state with nextState and return false to tell React the update can be skipped. Note that returning false does not prevent child components from re-rendering when their state changes.

// 		We do not recommend doing deep equality checks or using JSON.stringify() in shouldComponentUpdate(). It is very inefficient and will harm performance.

// 	- static getDerivedStateFromProps(props, state)
// 		getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.

// 		This method exists for rare use cases where the state depends on changes in props over time. For example, it might be handy for implementing a <Transition> component that compares its previous and next children to decide which of them to animate in and out.

// 		Deriving state leads to verbose code and makes your components difficult to think about

// 		This method doesn’t have access to the component instance. 
// 		Note that this method is fired on every render, regardless of the cause. This is in contrast to UNSAFE_componentWillReceiveProps, which only fires when the parent causes a re-render and not as a result of a local setState.

// 	- getSnapshotBeforeUpdate(prevProps, prevState)
// 		getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().

// 		This use case is not common, but it may occur in UIs like a chat thread that need to handle scroll position in a special way.

// 		A snapshot value (or null) should be returned.

// 	- static getDerivedStateFromError(error)
// 		This lifecycle is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state.

// 		getDerivedStateFromError() is called during the “render” phase, so side-effects are not permitted. For those use cases, use componentDidCatch() instead.

// 	- componentDidCatch(error, info)
// 		This lifecycle is invoked after an error has been thrown by a descendant component. It receives two parameters:

// 		error - The error that was thrown.
// 		info - An object with a componentStack key containing information about which component threw the error.
// 		componentDidCatch() is called during the “commit” phase, so side-effects are permitted. It should be used for things like logging errors:


// 		class ErrorBoundary extends React.Component {
// 			  constructor(props) {
// 			    super(props);
// 			    this.state = { hasError: false };
// 			  }

// 			  static getDerivedStateFromError(error) {
// 			    // Update state so the next render will show the fallback UI.
// 			    return { hasError: true };
// 			  }

// 			  componentDidCatch(error, info) {
// 			    // Example "componentStack":
// 			    //   in ComponentThatThrows (created by App)
// 			    //   in ErrorBoundary (created by App)
// 			    //   in div (created by App)
// 			    //   in App
// 			    logComponentStackToMyService(info.componentStack);
// 			  }

// 			  render() {
// 			    if (this.state.hasError) {
// 			      // You can render any custom fallback UI
// 			      return <h1>Something went wrong.</h1>;
// 			    }

// 			    return this.props.children; 
// 			  }
// 			}







// # Data Flow
// 	- Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.

// 	This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

// 	A component may choose to pass its state down as props to its child components:
// 	This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

// 	If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.

// 	You can use stateless components inside stateful components, and vice versa.

// 	- There should be a single “source of truth” for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow.
// 	- it takes less work to find and isolate bugs. Since any state “lives” in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.


// # Handling Events
// 	Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

// 	React events are named using camelCase, rather than lowercase.
// 	With JSX you pass a function as the event handler, rather than a string.

// 	Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly.
// 	When using React you should generally not need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

// 	- passing an arrow function in the callback as event handler is not preferred
// 	because a different callback is created each time the component renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.


// # Keys
// 	- A “key” is a special string attribute you need to include when creating lists of elements.
// 	- Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements 	  inside the array to give the elements a stable identity
// 	- The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys
// 	- When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort
// 	- We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state
// 	- Keys only make sense in the context of the surrounding array.
// 	- A good rule of thumb is that elements inside the map() call need keys.
// 	- Keys used within arrays should be unique among their siblings. However they don’t need to be globally unique. We can use the same keys when we produce two different arrays
// 	- Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name
// 	* how to pass a prop as 'key'? ex: props.key

// # Forms / Controlled Components
// 	- making the React state the source of truth
// 	- In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it  based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState()
// 	- We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. 
// 	- With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input. For example, if we wanted to enforce that names are written with all uppercase letters, we could write handleChange as:

// 	handleChange(event) {
// 	  this.setState({value: event.target.value.toUpperCase()});
// 	}
// 	- <input type="text">, <textarea>, and <select> all work very similarly - they all accept a value attribute that you can use to implement a controlled component.

// 	- You can pass an array into the value attribute, allowing you to select multiple options in a select tag:

// 	<select multiple={true} value={['B', 'C']}>

// 	- An input form element whose value is controlled by React in this way is called a “controlled component”.

// 	- n HTML, an <input type="file"> lets the user choose one or more files from their device storage to be uploaded to a server or manipulated by JavaScript via the File API.

// 	<input type="file" />
// 	Because its value is read-only, it is an uncontrolled component in React. 
// 	- It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component. 

// # Composition
// 	- resue code between components
// 	- Containment using {props.children}

// # Accessibility
// 	- WCAG: Web Content Accessibility Guidelines
// 	- WAI: Web Accessibility Initiative
// 	- ARIA: Accessibility Rich Internet Applications
// 	- Note that all aria-* HTML attributes are fully supported in JSX. Whereas most DOM properties and attributes in React are camelCased, these attributes should be hyphen-cased (also known as kebab-case, lisp-case, etc) as they are in plain HTML
// 	<input
// 	  type="text"
// 	  aria-label={labelText}
// 	  aria-required="true"
// 	  onChange={onchangeHandler}
// 	  value={inputValue}
// 	  name="name"
// 	/>
// 	- semantic elements
// 	- <label htmlFor="namedInput">Name:</label>
// 	<input id="namedInput" type="text" name="name"/>
// 	- Ensure that all functionality exposed through a mouse or pointer event can also be accessed using the keyboard alone. Depending only on the pointer device will lead to many cases where keyboard users cannot use your application.
// 	- make use of onBlur, onFocus events to hide dropdowns or popovers
// 	- set document language
// 	- set document title
// 	- Ensure that all readable text on your website has sufficient color contrast to remain maximally readable by users with low vision
// 	- eslint-plugin-jsx-a11y 
// 	- screen readers (NVDA- Non Visual Desktop Access), ChromeVox

// # Bundling
// 	- the process of following imported files and merging them into a single file: a “bundle”. This bundle can then be included on a webpage to load an entire app at once
// 	- Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.

// 	- To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle. Code-Splitting is a feature supported by bundlers like Webpack and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.
// 	- Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.
// 	The best way to introduce code-splitting into your app is through the dynamic import() syntax
// 	Dynamic Import : 
// 	ex: 
// 		import {add} from './util.js'
// 		add(n1, n2);
// 			will become
// 		import ('./util').then ((add) => add(n1, n2));
// 	When Webpack comes across this syntax, it automatically starts code-splitting your app
// 	install babel plugin to trnasiple this  babel-plugin-syntax-dynamic-import
// 	React.Lazy
// 	- The React.lazy function lets you render a dynamic import as a regular component.
// 	import OtherComponent from './OtherComponent';

// 	function MyComponent() {
// 	  return (
// 	    <div>
// 	      <OtherComponent />
// 	    </div>
// 	  );
// 	}

// 		this syntax will become
// 	consr OtherComponent = React.lazy(()=>{import '../OtherComponent'});
// 	function MyComponent() {
// 	  return (
// 	    <div>
// 	      <Suspense fallback={<div>Loading...</div>}>
// 	        <OtherComponent />
// 	      </Suspense>
// 	    </div>
// 	  );
// 	}
// 	The fallback prop accepts any React elements that you want to render while waiting for the component to load. You can place the Suspense component anywhere above the lazy component. You can even wrap multiple lazy components with a single Suspense component.

// 	If the other module fails to load (for example, due to network failure), it will trigger an error. You can handle these errors to show a nice user experience and manage recovery with Error Boundaries. Once you’ve created your Error Boundary, you can use it anywhere above your lazy components to display an error state when there’s a network error.

// 	import MyErrorBoundary from './MyErrorBoundary';
// 	const OtherComponent = React.lazy(() => import('./OtherComponent'));
// 	const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

// 	const MyComponent = () => (
// 	  <div>
// 	    <MyErrorBoundary>
// 	      <Suspense fallback={<div>Loading...</div>}>
// 	        <section>
// 	          <OtherComponent />
// 	          <AnotherComponent />
// 	        </section>
// 	      </Suspense>
// 	    </MyErrorBoundary>
// 	  </div>
// 	);

// 	supports only default exports

// 	This will automatically load the bundle containing the OtherComponent when this component gets rendered.

// 	React.lazy takes a function that must call a dynamic import(). This must return a Promise which resolves to a module with a default export containing a React component.

// 	If the module containing the OtherComponent is not yet loaded by the time MyComponent renders, we must show some fallback content while we’re waiting for it to load - such as a loading indicator. This is done using the Suspense component.

// # Context
// 	- Context provides a way to pass data through the component tree without having to pass props down manually at every level
// 	- Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. 
// 	- Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.
// 	const MyContext = React.createContext(defaultValue);
// 	<MyContext.Provider value={/* some value */}>
// 	<MyContext.Consumer>
//   		{value => /* render something based on the context value */}
// 	</MyContext.Consumer>

// # Error Boundaries
// 	- JavaScript errors inside components used to corrupt React’s internal state and cause it to emit cryptic errors on next renders.
// 	- A JavaScript error in a part of the UI shouldn’t break the whole app
// 	- Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. 
// 	- Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
// 	- Error boundaries do not catch errors for:

// 		Event handlers (learn more)
// 		Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
// 		Server side rendering
// 		Errors thrown in the error boundary itself (rather than its children)
// 	- A class component becomes an error boundary if it defines either (or both) of the lifecycle methods static getDerivedStateFromError() or componentDidCatch(). 
// 	- Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown. Use componentDidCatch() to log error information.
// 	- Error boundaries work like a JavaScript catch {} block, but for components. Only class components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once and use it throughout your application.
// 	- Note that error boundaries only catch errors in the components below them in the tree. An error boundary can’t catch an error within itself. If an error boundary fails trying to render the error message, the error will propagate to the closest error boundary above it. This, too, is similar to how catch {} block works in JavaScript.
// 	- React doesn’t need error boundaries to recover from errors in event handlers. Unlike the render method and lifecycle methods, the event handlers don’t happen during rendering. So if they throw, React still knows what to display on the screen.
// 	If you need to catch an error inside event handler, use the regular JavaScript try / catch statement

// # Fragments
// 	- A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
// 	- key is the only attribute that can be passed to Fragment
// 	class Columns extends React.Component {
//   	render() {
// 	    return (
// 	      <React.Fragment>
// 	        <td>Hello</td>
// 	        <td>World</td>
// 	      </React.Fragment>
// 	    );
// 	  }
// 	}

// 	class Columns extends React.Component {
// 	  render() {
// 	    return (
// 	      <>
// 	        <td>Hello</td>
// 	        <td>World</td>
// 	      </>
// 	    );
// 	  }
// 	}

// # HOC / Higher-Order Component ??
// 	- a higher-order component is a function that takes a component and returns a new component
// 		const EnhancedComponent = higherOrderComponent(WrappedComponent);
// 	- Whereas a component transforms props into UI, a higher-order component transforms a component into another component.
// 	- HOCs are common in third-party React libraries, such as Redux’s connect 

// # Performance
// 	- Use the minified Production Build
// 	- It is expected that you use the development mode when working on your app, and the production mode when deploying your app to the users
// 	- Virtualize Long Lists
// 	- If your application renders long lists of data (hundreds or thousands of rows), we recommended using a technique known as “windowing”. This technique only renders a small subset of your rows at any given time, and can dramatically reduce the time it takes to re-render the components as well as the number of DOM nodes created
// 	- react-window and react-virtualized are popular windowing libraries. They provide several reusable components for displaying lists, grids, and tabular data
// 	- make use of shouldComponentUpdate


// # VDOM / Virtual DOM and Reconciliation / Diffing Algo
// 	- When a component’s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM
// 	- the state of the art algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree.

// 	If we used this in React, displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm based on two assumptions:

// 	Two elements of different types will produce different trees.
// 	The developer can hint at which child elements may be stable across different renders with a key prop.
// 	In practice, these assumptions are valid for almost all practical use cases.

// 	- When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements.
// 		- Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch. Going from <a> to <img>, or from <Article> to <Comment>, or from <Button> to <div> - any of those will lead to a full rebuild.

// 		When tearing down a tree, old DOM nodes are destroyed. Component instances receive componentWillUnmount(). When building up a new tree, new DOM nodes are inserted into the DOM. Component instances receive componentWillMount() and then componentDidMount(). Any state associated with the old tree is lost.

// 		Any components below the root will also get unmounted and have their state destroyed. 

// 		- When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes. For example:

// 		<div className="before" title="stuff" />

// 		<div className="after" title="stuff" />
// 		By comparing these two elements, React knows to only modify the className on the underlying DOM node.

// 		When updating style, React also knows to update only the properties that changed. 
// 		- Recursing On Children
// 		By default, when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference.
// 		- When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. For example, adding a key to our inefficient example above can make the tree conversion efficient:


// # Portals
// 	- Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

// 	ReactDOM.createPortal(child, container)
// 	The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element.
// 	- dialogs, hovercards, and tooltips.

// # Default Props and PropTypes
// 	Greeting.defaultProps = {
//   		name: 'Mary'
// 	};

// 	To run typechecking on the props for a component, you can assign the special propTypes property:

// 	import PropTypes from 'prop-types';

// 	class Greeting extends React.Component {
// 	  render() {
// 	    return (
// 	      <h1>Hello, {this.props.name}</h1>
// 	    );
// 	  }
// 	}

// 	Greeting.propTypes = {
// 	  name: PropTypes.string
// 	};

// 	When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.

// 	- With PropTypes.element you can specify that only a single child can be passed to a component as children
// 	import PropTypes from 'prop-types';

// 	class MyComponent extends React.Component {
// 	  render() {
// 	    // This must be exactly one element or it will warn.
// 	    const children = this.props.children;
// 	    return (
// 	      <div>
// 	        {children}
// 	      </div>
// 	    );
// 	  }
// 	}

// 	MyComponent.propTypes = {
// 	  children: PropTypes.element.isRequired
// 	};

// 	- The propTypes typechecking happens after defaultProps are resolved, so typechecking will also apply to the defaultProps.

// # Refs
// 	- Refs provide a way to access DOM nodes or React elements created in the render method
// 	- Usages
// 		Managing focus, text selection, or media playback.
// 		Triggering imperative animations.
// 		Integrating with third-party DOM libraries
// 	- createRef() introduced in 16.3 (before that callback and string refs)
// 	- Refs are created using React.createRef() and attached to React elements via the ref attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component
// 	class MyComponent extends React.Component {
// 	  constructor(props) {
// 	    super(props);
// 	    this.myRef = React.createRef();
// 	  }
// 	  render() {
// 	    return <div ref={this.myRef} />;
// 	  }
// 	}
// 	- When a ref is passed to an element in render, a reference to the node becomes accessible at the current attribute of the ref.

// 	const node = this.myRef.current;
// 	- You may not use the ref attribute on function components because they don’t have instances.
// 	- You should convert the component to a class if you need a ref to it, just like you do when you need lifecycle methods or state.
// 	- You can, however, use the ref attribute inside a function component as long as you refer to a DOM element or a class component:

// 	function CustomTextInput(props) {
// 	  // textInput must be declared here so the ref can refer to it
// 	  let textInput = React.createRef();

// 	  function handleClick() {
// 	    textInput.current.focus();
// 	  }

// 	  return (
// 	    <div>
// 	      <input
// 	        type="text"
// 	        ref={textInput} />

// 	      <input
// 	        type="button"
// 	        value="Focus the text input"
// 	        onClick={handleClick}
// 	      />
// 	    </div>
// 	  );
// 	}

// 	- Ref forwarding is a technique for automatically passing a ref through a component to one of its children. This is typically not necessary for most components in the application. However, it can be useful for some kinds of components, especially in reusable component libraries.
// 	- Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child.
// 	- React.forwardRef()

// # Functional Components
// 	- can't use state, lifecycle methods, refs

// # Strict Mode
// 	- StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.

// 	- Strict mode checks are run in development mode only; they do not impact the production build
// 	You can enable strict mode for any part of your application. For example:

// 		import React from 'react';

// 		function ExampleApplication() {
// 		  return (
// 		    <div>
// 		      <Header />
// 		      <React.StrictMode>
// 		        <div>
// 		          <ComponentOne />
// 		          <ComponentTwo />
// 		        </div>
// 		      </React.StrictMode>
// 		      <Footer />
// 		    </div>
// 		  );
// 		}

// 	- StrictMode currently helps with:

// 		Identifying components with unsafe lifecycles
// 		Warning about legacy string ref API usage
// 		Warning about deprecated findDOMNode usage
// 		Detecting unexpected side effects
// 		Detecting legacy context API

// # Uncontrolled Components
// 	 In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

// 	To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.
// 	- Since an uncontrolled component keeps the source of truth in the DOM, it is sometimes easier to integrate React and non-React code when using uncontrolled components. It can also be slightly less code if you want to be quick and dirty. Otherwise, you should usually use controlled components.

// 	- In the React rendering lifecycle, the value attribute on form elements will override the value in the DOM. With an uncontrolled component, you often want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a defaultValue attribute instead of value.

// 	- Likewise, <input type="checkbox"> and <input type="radio"> support defaultChecked, and <select> and <textarea> supports defaultValue.

// # React.PureComponent
// 	- React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.

// 	If your React component’s render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.

// 	React.PureComponent’s shouldComponentUpdate() only shallowly compares the objects. If these contain complex data structures, it may produce false-negatives for deeper differences. Only extend PureComponent when you expect to have simple props and state, or use forceUpdate() when you know deep data structures have changed. Or, consider using immutable objects to facilitate fast comparisons of nested data.

// 	Furthermore, React.PureComponent’s shouldComponentUpdate() skips prop updates for the whole component subtree. Make sure all the children components are also “pure”.

// # React.memo
// 	- a HOC
// 	- similar to React.PureComponent but for function components instead of classes.
// 	- if your function component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.
// 	const MyComponent = React.memo(function MyComponent(props) {
//   		/* render using props */
// 	});


// ** HOCs
// ** RenderProps
// ** ToDo
// ** Tic Tac Toe


// # Advantages of ReactJS
// 	- One way data binding
// 	- state as single source of truth
// 	- vdom
// 	- component based
// 	- can include in existing project as well for V layer

// React is used to build user interfaces (UI) on the front end.
// React is the view layer of an MVC application (Model View Controller)

// https://reactjs.org/community/courses.html

// https://reactfordesigners.com/

// # Single Responsibility Principle- a component should ideally only do one thing. If it ends up growing, it should be 	   	  decomposed into smaller subcomponents

// You can build top-down or bottom-up. That is, you can either start with building the components higher up in the hierarchy (i.e. starting with FilterableProductTable) or with the ones lower in it (ProductRow). In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up and write tests as you build.

// DRY - Don't Repeat Yourself
// 	- while building reusable components
// 	- creating states (ex: array is enough, no need to keep a varibale for arr.length)

// # How to decide state variables?

// Is it passed in from a parent via props? If so, it probably isn’t state.
// Does it remain unchanged over time? If so, it probably isn’t state.
// Can you compute it based on any other state or props in your component? If so, it isn’t state.


// https://reactjs.org/tutorial/tutorial.html



// #### HP
// 	resume projects detailed
// 	current project, roles
// 	why react?
// 	what's the big thing about unidirection?
// 	why redux?
// 	how does it work internally?
// 	experience with JS?
// 	closures? example in work?
// 	HOCs
// 	button reusable component - backward compatibility, proptypes, publish



// React is a JavaScript library,

// JSX
// const element = <h1>Hello, world!</h1>;
// This funny tag syntax is neither a string nor HTML.

// It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
// JSX produces React "elements".

// You can embed any JavaScript expression in JSX by wrapping it in curly braces.

// For example, 2 + 2, user.firstName, and formatName(user) are all valid expressions:

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// JSX is an Expression Too#
// After compilation, JSX expressions become regular JavaScript objects.

// This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// Specifying Attributes with JSX
// You may use quotes to specify string literals as attributes:

// const element = <div tabIndex="0"></div>;
// You may also use curly braces to embed a JavaScript expression in an attribute:

// const element = <img src={user.avatarUrl}></img>;
// Don't put quotes around curly braces when embedding a JavaScript expression in an attribute. Otherwise JSX will treat the attribute as a string literal rather than an expression. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.

// Specifying Children with JSX
// If a tag is empty, you may close it immediately with />, like XML:

// const element = <img src={user.avatarUrl} />;
// JSX tags may contain children:

// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );

// Since JSX is closer to JavaScript than HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
// For example, class becomes className in JSX, and tabindex becomes tabIndex.

// JSX Prevents Injection Attacks
// It is safe to embed user input in JSX:

// const title = response.potentiallyMaliciousInput;
// // This is safe:
// const element = <h1>{title}</h1>;
// By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that's not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

// JSX Represents Objects
// Babel compiles JSX down to React.createElement() calls.

// These two examples are identical:

// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );


// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );
// React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:

// // Note: this structure is simplified
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world'
//   }
// };

// These objects are called "React elements". You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.


// Rendering Elements
// Elements are the smallest building blocks of React apps.

// An element describes what you want to see on the screen:

// const element = <h1>Hello, world</h1>;
// Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

// Note:
// One might confuse elements with a more widely known concept of "components". We will introduce components in the next section. Elements are what components are "made of", and we encourage you to read this section before jumping ahead.

// Rendering an Element into the DOM
// Let's say there is a <div> somewhere in your HTML file:

// <div id="root"></div>
// We call this a "root" DOM node because everything inside it will be managed by React DOM.

// Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

// To render a React element into a root DOM node, pass both to ReactDOM.render():

// const element = <h1>Hello, world</h1>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


// Updating the Rendered Element
// React elements are immutable. Once you create an element, you can't change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

// With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().

// Consider this ticking clock example:

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);
// It calls ReactDOM.render() every second from a setInterval() callback.
// In practice, most React apps only call ReactDOM.render() once

// React Only Updates What's Necessary
// React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.
// Even though we create an element describing the whole UI tree on every tick, only the text node whose contents has changed gets updated by React DOM.

// In our experience, thinking about how the UI should look at any given moment rather than how to change it over time eliminates a whole class of bugs.

// Components and Props
// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

// Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

// Functional and Class Components
// The simplest way to define a component is to write a JavaScript function:

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// This function is a valid React component because it accepts a single "props" object argument with data and returns a React element. We call such components "functional" because they are literally JavaScript functions.

// You can also use an ES6 class to define a component:

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// The above two components are equivalent from React's point of view.

// Classes have some additional features 

// Rendering a Component
// Previously, we only encountered React elements that represent DOM tags:

// const element = <div />;
// However, elements can also represent user-defined components:

// const element = <Welcome name="Sara" />;
// When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object "props".

// For example, this code renders "Hello, Sara" on the page:

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// Always start component names with a capital letter.
// For example, <div /> represents a DOM tag, but <Welcome /> represents a component and requires Welcome to be in scope.

// Composing Components
// Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

// For example, we can create an App component that renders Welcome many times:

// For example, we can create an App component that renders Welcome many times:

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// Typically, new React apps have a single App component at the very top. However, if you integrate React into an existing app, you might start bottom-up with a small component like Button and gradually work your way to the top of the view hierarchy.

// Caveat:
// Components must return a single root element. This is why we added a <div> to contain all the <Welcome /> elements.


// Extracting Components
// Don't be afraid to split components into smaller components.

// For example, consider this Comment component:

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// It accepts author (an object), text (a string), and date (a date) as props, and describes a comment on a social media website.

// This component can be tricky to change because of all the nesting, and it is also hard to reuse individual parts of it. Let's extract a few components from it.

// First, we will extract Avatar:

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }
// The Avatar doesn't need to know that it is being rendered inside a Comment. This is why we have given its prop a more generic name: user rather than author.

// We recommend naming props from the component's own point of view rather than the context in which it is being used.

// We can now simplify Comment a tiny bit:

// We can now simplify Comment a tiny bit:

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <Avatar user={props.author} />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// Next, we will extract a UserInfo component that renders an Avatar next to user's name:

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }

// This lets us simplify Comment even further:

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }
// Try it on CodePen.

// Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component.

// Props are Read-Only
// Whether you declare a component as a function or a class, it must never modify its own props. Consider this sum function:

// function sum(a, b) {
//   return a + b;
// }
// Such functions are called "pure" because they do not attempt to change their inputs, and always return the same result for the same inputs.

// In contrast, this function is impure because it changes its own input:

// function withdraw(account, amount) {
//   account.total -= amount;
// }
// React is pretty flexible but it has a single strict rule:

// All React components must act like pure functions with respect to their props.

// Of course, application UIs are dynamic and change over time. In the next section, we will introduce a new concept of "state". State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.

// State and Lifecycle
// Consider the ticking clock example from one of the previous sections.

// So far we have only learned one way to update the UI.

// We call ReactDOM.render() to change the rendered output:

// In this section, we will learn how to make the Clock component truly reusable and encapsulated. It will set up its own timer and update itself every second.

// We can start by encapsulating how the clock looks:

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// However, it misses a crucial requirement: the fact that the Clock sets up a timer and updates the UI every second should be an implementation detail of the Clock.

// Ideally we want to write this once and have the Clock update itself:

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );
// To implement this, we need to add "state" to the Clock component.

// State is similar to props, but it is private and fully controlled by the component.

// We mentioned before that components defined as classes have some additional features. Local state is exactly that: a feature available only to classes.


// Converting a Function to a Class
// You can convert a functional component like Clock to a class in five steps:

// Create an ES6 class with the same name that extends React.Component.

// Add a single empty method to it called render().

// Move the body of the function into the render() method.

// Replace props with this.props in the render() body.

// Delete the remaining empty function declaration.

// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// Clock is now defined as a class rather than a function.

// This lets us use additional features such as local state and lifecycle hooks.

// Adding Local State to a Class
// We will move the date from props to state in three steps:

// 1) Replace this.props.date with this.state.date in the render() method:

// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// 2) Add a class constructor that assigns the initial this.state:

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// Note how we pass props to the base constructor:

// Note how we pass props to the base constructor:

//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
// Class components should always call the base constructor with props.

// 3) Remove the date prop from the <Clock /> element:

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );
// We will later add the timer code back to the component itself.

// The result looks like this:

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

// Next, we'll make the Clock set up its own timer and update itself every second.

// Adding Lifecycle Methods to a Class
// In applications with many components, it's very important to free up resources taken by the components when they are destroyed.

// We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called "mounting" in React.

// We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called "unmounting" in React.

// We can declare special methods on the component class to run some code when a component mounts and unmounts:

//  componentDidMount() {

//   }

//   componentWillUnmount() {

//   }
//   These methods are called "lifecycle hooks".

// The componentDidMount() hook runs after the component output has been rendered to the DOM. This is a good place to set up a timer:

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
// Note how we save the timer ID right on this.
// While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store something that is not used for the visual output.

// If you don't use something in render(), it shouldn't be in the state.

// We will tear down the timer in the componentWillUnmount() lifecycle hook:

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
// Finally, we will implement the tick() method that runs every second.

// It will use this.setState() to schedule updates to the component local state:

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );
// Now the clock ticks every second.

// Let's quickly recap what's going on and the order in which the methods are called:

// 1) When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.

// 2) React then calls the Clock component's render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock's render output.

// 3) When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle hook. Inside it, the Clock component asks the browser to set up a timer to call tick() once a second.

// 4) Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

// 5) If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle hook so the timer is stopped.

// Using State Correctly
// There are three things you should know about setState().

// Do Not Modify State Directly
// For example, this will not re-render a component:

// // Wrong
// this.state.comment = 'Hello';
// Instead, use setState():

// // Correct
// this.setState({comment: 'Hello'});
// The only place where you can assign this.state is the constructor.

// State Updates May Be Asynchronous
// React may batch multiple setState() calls into a single update for performance.

// Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

// For example, this code may fail to update the counter:

// // Wrong
// this.setState({
//   counter: this.state.counter + this.props.increment,
// });
// To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

// // Correct
// this.setState((prevState, props) => ({
//   counter: prevState.counter + props.increment
// }));
// We used an arrow function above, but it also works with regular functions:
// // Correct
// this.setState(function(prevState, props) {
//   return {
//     counter: prevState.counter + props.increment
//   };
// });

// State Updates are Merged
// When you call setState(), React merges the object you provide into the current state.

// For example, your state may contain several independent variables:

//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//       comments: []
//     };
//   }
// Then you can update them independently with separate setState() calls:

// Then you can update them independently with separate setState() calls:

//   componentDidMount() {
//     fetchPosts().then(response => {
//       this.setState({
//         posts: response.posts
//       });
//     });

//     fetchComments().then(response => {
//       this.setState({
//         comments: response.comments
//       });
//     });
//   }
// The merging is shallow, so this.setState({comments}) leaves this.state.posts intact, but completely replaces this.state.comments.


// The Data Flows Down
// Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn't care whether it is defined as a function or a class.

// This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

// A component may choose to pass its state down as props to its child components:

// <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
// This also works for user-defined components:

// <FormattedDate date={this.state.date} />
// The FormattedDate component would receive the date in its props and wouldn't know whether it came from the Clock's state, from the Clock's props, or was typed by hand:
// function FormattedDate(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }

// This is commonly called a "top-down" or "unidirectional" data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components "below" them in the tree.

// If you imagine a component tree as a waterfall of props, each component's state is like an additional water source that joins it at an arbitrary point but also flows down.

// To show that all components are truly isolated, we can create an App component that renders three <Clock>s:
// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// Each Clock sets up its own timer and updates independently.

// In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. You can use stateless components inside stateful components, and vice versa.

// Handling Events
// Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

// React events are named using camelCase, rather than lowercase.
// With JSX you pass a function as the event handler, rather than a string.
// For example, the HTML:

// <button onclick="activateLasers()">
//   Activate Lasers
// </button>
// is slightly different in React:

// <button onClick={activateLasers}>
//   Activate Lasers
// </button>

// Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:

// <a href="#" onclick="console.log('The link was clicked.'); return false">
//   Click me
// </a>
// In React, this could instead be:

// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }

//   return (
//     <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//   );
// }

// Here, e is a synthetic event. React defines these synthetic events according to the W3C spec, so you don't need to worry about cross-browser compatibility. See the SyntheticEvent reference guide to learn more.

// When using React you should generally not need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

// When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. For example, this Toggle component renders a button that lets the user toggle between "ON" and "OFF" states:

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );

// You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.

// This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.

// If calling bind annoys you, there are two ways you can get around this. If you are using the experimental property initializer syntax, you can use property initializers to correctly bind callbacks:

// If you aren't using property initializer syntax, you can use an arrow function in the callback:

// class LoggingButton extends React.Component {
//   handleClick() {
//     console.log('this is:', this);
//   }

//   render() {
//     // This syntax ensures `this` is bound within handleClick
//     return (
//       <button onClick={(e) => this.handleClick(e)}>
//         Click me
//       </button>
//     );
//   }
// }

// The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the property initializer syntax, to avoid this sort of performance problem.


// Conditional Rendering
// In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

// Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

// Consider these two components:

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// We'll create a Greeting component that displays either of these components depending on whether a user is logged in:

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// ReactDOM.render(
//   // Try changing to isLoggedIn={true}:
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('root')
// );

// Element Variables
// You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn't change.

// Consider these two new components representing Logout and Login buttons:

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }
// In the example below, we will create a stateful component called LoginControl.

// It will render either <LoginButton /> or <LogoutButton /> depending on its current state. It will also render a <Greeting /> from the previous example:

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button = null;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );

// While declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax. There are a few ways to inline conditions in JSX, explained below

// Inline If with Logical && Operator
// You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. It can be handy for conditionally including an element:

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// );
// Try it on CodePen.

// It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.

// Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.

// Inline If-Else with Conditional Operator
// Another method for conditionally rendering elements inline is to use the JavaScript conditional operator condition ? true : false.

// In the example below, we use it to conditionally render a small block of text.

// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//     </div>
//   );
// }
// It can also be used for larger expressions although it is less obvious what's going on:
// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       {isLoggedIn ? (
//         <LogoutButton onClick={this.handleLogoutClick} />
//       ) : (
//         <LoginButton onClick={this.handleLoginClick} />
//       )}
//     </div>
//   );
// }
// Just like in JavaScript, it is up to you to choose an appropriate style based on what you and your team consider more readable. Also remember that whenever conditions become too complex, it might be a good time to extract a component.

// In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output.

// In the example below, the <WarningBanner /> is rendered depending on the value of the prop called warn. If the value of the prop is false, then the component does not render:

// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }

//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   );
// }
// Returning null from a component's render method does not affect the firing of the component's lifecycle methods. For instance, componentWillUpdate and componentDidUpdate will still be called.


// Lists and Keys
// First, let's review how you transform lists in JavaScript.

// Given the code below, we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it:

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);
// This code logs [2, 4, 6, 8, 10] to the console.

// In React, transforming arrays into lists of elements is nearly identical.

// Rendering Multiple Components
// You can build collections of elements and include them in JSX using curly braces {}.

// Below, we loop through the numbers array using the Javascript map() function. We return an <li> element for each item. Finally, we assign the resulting array of elements to listItems:

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );
// We include the entire listItems array inside a <ul> element, and render it to the DOM:

// ReactDOM.render(
//   <ul>{listItems}</ul>,
//   document.getElementById('root')
// );
// Try it on CodePen.

// This code displays a bullet list of numbers between 1 and 5.

// Basic List Component
// Usually you would render lists inside a component.

// We can refactor the previous example into a component that accepts an array of numbers and outputs an unordered list of elements.

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );
// When you run this code, you'll be given a warning that a key should be provided for list items. A "key" is a special string attribute you need to include when creating lists of elements. We'll discuss why it's important in the next section.

// Let's assign a key to our list items inside numbers.map() and fix the missing key issue.

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

// Keys
// Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li key={number.toString()}>
//     {number}
//   </li>
// );
// The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:

// const todoItems = todos.map((todo) =>
//   <li key={todo.id}>
//     {todo.text}
//   </li>
// );
// When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort:

// const todoItems = todos.map((todo, index) =>
//   // Only do this if items have no stable IDs
//   <li key={index}>
//     {todo.text}
//   </li>
// );
// We don't recommend using indexes for keys if the items can reorder, as that would be slow. 

// Extracting Components with Keys
// Keys only make sense in the context of the surrounding array.

// For example, if you extract a ListItem component, you should keep the key on the <ListItem /> elements in the array rather than on the root <li> element in the ListItem itself.

// Example: Incorrect Key Usage

// function ListItem(props) {
//   const value = props.value;
//   return (
//     // Wrong! There is no need to specify the key here:
//     <li key={value.toString()}>
//       {value}
//     </li>
//   );
// }
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     // Wrong! The key should have been specified here:
//     <ListItem value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );
// Example: Correct Key Usage
// function ListItem(props) {
//   // Correct! There is no need to specify the key here:
//   return <li>{props.value}</li>;
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     // Correct! Key should be specified inside the array.
//     <ListItem key={number.toString()}
//               value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

// A good rule of thumb is that elements inside the map() call need keys.

// Keys Must Only Be Unique Among Siblings
// Keys used within arrays should be unique among their siblings. However they don't need to be globally unique. We can use the same keys when we produce two different arrays:

// Keys serve as a hint to React but they don't get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name:

// const content = posts.map((post) =>
//   <Post
//     key={post.id}
//     id={post.id}
//     title={post.title} />
// );
// With the example above, the Post component can read props.id, but not props.key.

// Embedding map() in JSX
// In the examples above we declared a separate listItems variable and included it in JSX:

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <ListItem key={number.toString()}
//               value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }
// JSX allows embedding any expressions in curly braces so we could inline the map() result:

// function NumberList(props) {
//   const numbers = props.numbers;
//   return (
//     <ul>
//       {numbers.map((number) =>
//         <ListItem key={number.toString()}
//                   value={number} />
//       )}
//     </ul>
//   );
// }
// Try it on CodePen.

// Sometimes this results in clearer code, but this style can also be abused. Like in JavaScript, it is up to you to decide whether it is worth extracting a variable for readability. Keep in mind that if the map() body is too nested, it might be a good time to extract a component.

// Forms
// HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:

// <form>
//   <label>
//     Name:
//     <input type="text" name="name" />
//   </label>
//   <input type="submit" value="Submit" />
// </form>
// This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it's convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called "controlled components".

// Controlled Components
// In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

// We can combine the two by making the React state be the "single source of truth". Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a "controlled component".

// With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input. For example, if we wanted to enforce that names are written with all uppercase letters, we could write handleChange as:

// handleChange(event) {
//   this.setState({value: event.target.value.toUpperCase()});
// }

// this.state = {value: ''};

// handleChange(event)
// {
//   this.setState({value:event.target.value});
// }

//  <input type="text" value={this.state.value} onChange={this.handleChange} />
//  With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input. For example, if we wanted to enforce that names are written with all uppercase letters, we could write handleChange as:

// handleChange(event) {
//   this.setState({value: event.target.value.toUpperCase()});
// }

// With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input. For example, if we wanted to enforce that names are written with all uppercase letters, we could write handleChange as:

// handleChange(event) {
//   this.setState({value: event.target.value.toUpperCase()});
// }
//  <textarea value={this.state.value} onChange={this.handleChange} />

//  The select Tag
// In HTML, <select> creates a drop-down list. For example, this HTML creates a drop-down list of flavors:

// <select>
//   <option value="grapefruit">Grapefruit</option>
//   <option value="lime">Lime</option>
//   <option selected value="coconut">Coconut</option>
//   <option value="mango">Mango</option>
// </select>
// Note that the Coconut option is initially selected, because of the selected attribute. React, instead of using this selected attribute, uses a value attribute on the root select tag. This is more convenient in a controlled component because you only need to update it in one place.

//  <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>

//   Overall, this makes it so that <input type="text">, <textarea>, and <select> all work very similarly - they all accept a value attribute that you can use to implement a controlled component.

//   Handling Multiple Inputs
// When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name.

// Alternatives to Controlled Components
// It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component. This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library. In these situations, you might want to check out uncontrolled components, an alternative technique for implementing input forms.

// Lifting State Up
// Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. Let's see how this works in action.

// In this section, we will create a temperature calculator that calculates whether the water would boil at a given temperature.

// We will start with a component called BoilingVerdict. It accepts the celsius temperature as a prop, and prints whether it is enough to boil the water:

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// Next, we will create a component called Calculator. It renders an <input> that lets you enter the temperature, and keeps its value in this.state.temperature.

// Additionally, it renders the BoilingVerdict for the current input value.

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {
//     const temperature = this.state.temperature;
//     return (
//       <fieldset>
//         <legend>Enter temperature in Celsius:</legend>
//         <input
//           value={temperature}
//           onChange={this.handleChange} />
//         <BoilingVerdict
//           celsius={parseFloat(temperature)} />
//       </fieldset>
//     );
//   }
// }

// Adding a Second Input
// Our new requirement is that, in addition to a Celsius input, we provide a Fahrenheit input, and they are kept in sync.

// We can start by extracting a TemperatureInput component from Calculator. We will add a new scale prop to it that can either be "c" or "f":

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }
//    render() {
//     const temperature = this.state.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }
// We can now change the Calculator to render two separate temperature inputs:

// class Calculator extends React.Component {
//   render() {
//     return (
//       <div>
//         <TemperatureInput scale="c" />
//         <TemperatureInput scale="f" />
//       </div>
//     );
//   }
// }
// We have two inputs now, but when you enter the temperature in one of them, the other doesn't update. This contradicts our requirement: we want to keep them in sync.

// We also can't display the BoilingVerdict from Calculator. The Calculator doesn't know the current temperature because it is hidden inside the TemperatureInput.

// Writing Conversion Functions
// First, we will write two functions to convert from Celsius to Fahrenheit and back:

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }
// These two functions convert numbers. We will write another function that takes a string temperature and a converter function as arguments and returns a string. We will use it to calculate the value of one input based on the other input.

// It returns an empty string on an invalid temperature, and it keeps the output rounded to the third decimal place:

// Lifting State Up
// Currently, both TemperatureInput components independently keep their values in the local state:

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {
//     const temperature = this.state.temperature;
// However, we want these two inputs to be in sync with each other. When we update the Celsius input, the Fahrenheit input should reflect the converted temperature, and vice versa.

// In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called "lifting state up". We will remove the local state from the TemperatureInput and move it into the Calculator instead.

// If the Calculator owns the shared state, it becomes the "source of truth" for the current temperature in both inputs. It can instruct them both to have values that are consistent with each other. Since the props of both TemperatureInput components are coming from the same parent Calculator component, the two inputs will always be in sync.

// Let's see how this works step by step.

// First, we will replace this.state.temperature with this.props.temperature in the TemperatureInput component. For now, let's pretend this.props.temperature already exists, although we will need to pass it from the Calculator in the future:
// There should be a single "source of truth" for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow.

// Lifting state involves writing more "boilerplate" code than two-way binding approaches, but as a benefit, it takes less work to find and isolate bugs. Since any state "lives" in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.

// If something can be derived from either props or state, it probably shouldn't be in the state. For example, instead of storing both celsiusValue and fahrenheitValue, we store just the last edited temperature and its scale. The value of the other input can always be calculated from them in the render() method. This lets us clear or apply rounding to the other field without losing any precision in the user input.

// When you see something wrong in the UI, you can use React Developer Tools to inspect the props and move up the tree until you find the component responsible for updating the state. This lets you trace the bugs to their source:


// Composition vs Inheritance
// React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.

// In this section, we will consider a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition.

// Containment
// Some components don't know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic "boxes".

// We recommend that such components use the special children prop to pass children elements directly into their output:

// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }
// This lets other components pass arbitrary children to them by nesting the JSX:

// function WelcomeDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         Welcome
//       </h1>
//       <p className="Dialog-message">
//         Thank you for visiting our spacecraft!
//       </p>
//     </FancyBorder>
//   );
// }
// Anything inside the <FancyBorder> JSX tag gets passed into the FancyBorder component as a children prop. Since FancyBorder renders {props.children} inside a <div>, the passed elements appear in the final output.

// While this is less common, sometimes you might need multiple "holes" in a component. In such cases you may come up with your own convention instead of using children:

// function SplitPane(props) {
//   return (
//     <div className="SplitPane">
//       <div className="SplitPane-left">
//         {props.left}
//       </div>
//       <div className="SplitPane-right">
//         {props.right}
//       </div>
//     </div>
//   );
// }
// function App() {
//   return (
//     <SplitPane
//       left={
//         <Contacts />
//       }
//       right={
//         <Chat />
//       } />
//   );
// }
// Try it on CodePen.

// React elements like <Contacts /> and <Chat /> are just objects, so you can pass them as props like any other data.
// Specialization
// Sometimes we think about components as being "special cases" of other components. For example, we might say that a WelcomeDialog is a special case of Dialog.

// In React, this is also achieved by composition, where a more "specific" component renders a more "generic" one and configures it with props:

// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         {props.title}
//       </h1>
//       <p className="Dialog-message">
//         {props.message}
//       </p>
//     </FancyBorder>
//   );
// }

// function WelcomeDialog() {
//   return (
//     <Dialog
//       title="Welcome"
//       message="Thank you for visiting our spacecraft!" />
//   );
// }

// Composition works equally well for components defined as classes:
// So What About Inheritance?
// At Facebook, we use React in thousands of components, and we haven't found any use cases where we would recommend creating component inheritance hierarchies.

// Props and composition give you all the flexibility you need to customize a component's look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.

// If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.


// JSX In Depth
// Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function. The JSX code:

// <MyButton color="blue" shadowSize={2}>
//   Click Me
// </MyButton>
// compiles into:

// React.createElement(
//   MyButton,
//   {color: 'blue', shadowSize: 2},
//   'Click Me'
// )
// JSX In Depth
// Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function. The JSX code:

// <MyButton color="blue" shadowSize={2}>
//   Click Me
// </MyButton>
// compiles into:

// React.createElement(
//   MyButton,
//   {color: 'blue', shadowSize: 2},
//   'Click Me'
// )

// Specifying The React Element Type#
// The first part of a JSX tag determines the type of the React element.

// Capitalized types indicate that the JSX tag is referring to a React component. These tags get compiled into a direct reference to the named variable, so if you use the JSX <Foo /> expression, Foo must be in scope.

// React Must Be in Scope
// Since JSX compiles into calls to React.createElement, the React library must also always be in scope from your JSX code.

// For example, both of the imports are necessary in this code, even though React and CustomButton are not directly referenced from JavaScript:

// import React from 'react';
// import CustomButton from './CustomButton';

// function WarningButton() {
//   // return React.createElement(CustomButton, {color: 'red'}, null);
//   return <CustomButton color="red" />;
// }
// If you don't use a JavaScript bundler and added React as a script tag, it is already in scope as a React global.

// Using Dot Notation for JSX Type
// You can also refer to a React component using dot-notation from within JSX. This is convenient if you have a single module that exports many React components. For example, if MyComponents.DatePicker is a component, you can use it directly from JSX with:

// import React from 'react';

// const MyComponents = {
//   DatePicker: function DatePicker(props) {
//     return <div>Imagine a {props.color} datepicker here.</div>;
//   }
// }

// function BlueDatePicker() {
//   return <MyComponents.DatePicker color="blue" />;
// }

// User-Defined Components Must Be Capitalized
// When an element type starts with a lowercase letter, it refers to a built-in component like <div> or <span> and results in a string 'div' or 'span' passed to React.createElement. Types that start with a capital letter like <Foo /> compile to React.createElement(Foo) and correspond to a component defined or imported in your JavaScript file.

// We recommend naming components with a capital letter. If you do have a component that starts with a lowercase letter, assign it to a capitalized variable before using it in JSX.

// For example, this code will not run as expected:

// import React from 'react';

// // Wrong! This is a component and should have been capitalized:
// function hello(props) {
//   // Correct! This use of <div> is legitimate because div is a valid HTML tag:
//   return <div>Hello {props.toWhat}</div>;
// }

// function HelloWorld() {
//   // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
//   return <hello toWhat="World" />;
// }
// To fix this, we will rename hello to Hello and use <Hello /> when referring to it:

// Choosing the Type at Runtime
// You cannot use a general expression as the React element type. If you do want to use a general expression to indicate the type of the element, just assign it to a capitalized variable first. This often comes up when you want to render a different component based on a prop:

// import React from 'react';
// import { PhotoStory, VideoStory } from './stories';

// const components = {
//   photo: PhotoStory,
//   video: VideoStory
// };

// function Story(props) {
//   // Wrong! JSX type can't be an expression.
//   return <components[props.storyType] story={props.story} />;
// }
// To fix this, we will assign the type to a capitalized variable first:
// import React from 'react';
// import { PhotoStory, VideoStory } from './stories';

// const components = {
//   photo: PhotoStory,
//   video: VideoStory
// };

// function Story(props) {
//   // Correct! JSX type can be a capitalized variable.
//   const SpecificStory = components[props.storyType];
//   return <SpecificStory story={props.story} />;
// }
// Props in JSX
// There are several different ways to specify props in JSX.

// JavaScript Expressions as Props
// You can pass any JavaScript expression as a prop, by surrounding it with {}. For example, in this JSX:

// <MyComponent foo={1 + 2 + 3 + 4} />

// For MyComponent, the value of props.foo will be 10 because the expression 1 + 2 + 3 + 4 gets evaluated.

// if statements and for loops are not expressions in JavaScript, so they can't be used in JSX directly. Instead, you can put these in the surrounding code. For example:

// function NumberDescriber(props) {
//   let description;
//   if (props.number % 2 == 0) {
//     description = <strong>even</strong>;
//   } else {
//     description = <i>odd</i>;
//   }
//   return <div>{props.number} is an {description} number</div>;
// }

// String Literals
// You can pass a string literal as a prop. These two JSX expressions are equivalent:

// <MyComponent message="hello world" />

// <MyComponent message={'hello world'} />
// When you pass a string literal, its value is HTML-unescaped. So these two JSX expressions are equivalent:

// <MyComponent message="&lt;3" />

// <MyComponent message={'<3'} />
// This behavior is usually not relevant. It's only mentioned here for completeness.

// Props Default to "True"
// If you pass no value for a prop, it defaults to true. These two JSX expressions are equivalent:
// This behavior is usually not relevant. It's only mentioned here for completeness.

// Props Default to "True"
// If you pass no value for a prop, it defaults to true. These two JSX expressions are equivalent:

// <MyTextBox autocomplete />

// <MyTextBox autocomplete={true} />
// In general, we don't recommend using this because it can be confused with the ES6 object shorthand {foo} which is short for {foo: foo} rather than {foo: true}. This behavior is just there so that it matches the behavior of HTML.

// Spread Attributes
// If you already have props as an object, and you want to pass it in JSX, you can use ... as a "spread" operator to pass the whole props object. These two components are equivalent:

// function App1() {
//   return <Greeting firstName="Ben" lastName="Hector" />;
// }

// function App2() {
//   const props = {firstName: 'Ben', lastName: 'Hector'};
//   return <Greeting {...props} />;
// }
// Spread attributes can be useful when you are building generic containers. However, they can also make your code messy by making it easy to pass a lot of irrelevant props to components that don't care about them. We recommend that you use this syntax sparingly.

// Children in JSX
// In JSX expressions that contain both an opening tag and a closing tag, the content between those tags is passed as a special prop: props.children. There are several different ways to pass children:

// String Literals
// You can put a string between the opening and closing tags and props.children will just be that string. This is useful for many of the built-in HTML elements. For example:

// <MyComponent>Hello world!</MyComponent>
// This is valid JSX, and props.children in MyComponent will simply be the string "Hello world!". HTML is unescaped, so you can generally write JSX just like you would write HTML in this way:

// <div>This is valid HTML &amp; JSX at the same time.</div>
// JSX removes whitespace at the beginning and ending of a line. It also removes blank lines. New lines adjacent to tags are removed; new lines that occur in the middle of string literals are condensed into a single space. So these all render to the same thing:

// <div>Hello World</div>

// <div>
//   Hello World
// </div>

// <div>
//   Hello
//   World
// </div>

// <div>

//   Hello World
// </div>
// JSX Children
// You can provide more JSX elements as the children. This is useful for displaying nested components:

// <MyContainer>
//   <MyFirstComponent />
//   <MySecondComponent />
// </MyContainer>
// You can mix together different types of children, so you can use string literals together with JSX children. This is another way in which JSX is like HTML, so that this is both valid JSX and valid HTML:

// <div>
//   Here is a list:
//   <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//   </ul>
// </div>
// A React component can't return multiple React elements, but a single JSX expression can have multiple children, so if you want a component to render multiple things you can wrap it in a div like this.

// JavaScript Expressions as Children
// You can pass any JavaScript expression as children, by enclosing it within {}. For example, these expressions are equivalent:

// <MyComponent>foo</MyComponent>

// <MyComponent>{'foo'}</MyComponent>
// This is often useful for rendering a list of JSX expressions of arbitrary length. For example, this renders an HTML list:
// function Item(props) {
//   return <li>{props.message}</li>;
// }

// function TodoList() {
//   const todos = ['finish doc', 'submit pr', 'nag dan to review'];
//   return (
//     <ul>
//       {todos.map((message) => <Item key={message} message={message} />)}
//     </ul>
//   );
// }
// JavaScript expressions can be mixed with other types of children. This is often useful in lieu of string templates:

// function Hello(props) {
//   return <div>Hello {props.addressee}!</div>;
// }


// Functions as Children
// Normally, JavaScript expressions inserted in JSX will evaluate to a string, a React element, or a list of those things. However, props.children works just like any other prop in that it can pass any sort of data, not just the sorts that React knows how to render. For example, if you have a custom component, you could have it take a callback as props.children:

// // Calls the children callback numTimes to produce a repeated component
// function Repeat(props) {
//   let items = [];
//   for (let i = 0; i < props.numTimes; i++) {
//     items.push(props.children(i));
//   }
//   return <div>{items}</div>;
// }

// function ListOfTenThings() {
//   return (
//     <Repeat numTimes={10}>
//       {(index) => <div key={index}>This is item {index} in the list</div>}
//     </Repeat>
//   );
// }
// Children passed to a custom component can be anything, as long as that component transforms them into something React can understand before rendering. This usage is not common, but it works if you want to stretch what JSX is capable of.


// Booleans, Null, and Undefined Are Ignored
// false, null, undefined, and true are valid children. They simply don't render. These JSX expressions will all render to the same thing:

// <div />

// <div></div>

// <div>{false}</div>

// <div>{null}</div>

// <div>{undefined}</div>

// <div>{true}</div>
// This can be useful to conditionally render React elements. This JSX only renders a <Header /> if showHeader is true:
// <div>
//   {showHeader && <Header />}
//   <Content />
// </div>
// One caveat is that some "falsy" values, such as the 0 number, are still rendered by React. For example, this code will not behave as you might expect because 0 will be printed when props.messages is an empty array:

// <div>
//   {props.messages.length &&
//     <MessageList messages={props.messages} />
//   }
// </div>
// To fix this, make sure that the expression before && is always boolean:
// <div>
//   {props.messages.length > 0 &&
//     <MessageList messages={props.messages} />
//   }
// </div>
// Conversely, if you want a value like false, true, null, or undefined to appear in the output, you have to convert it to a string first:

// <div>
//   My JavaScript variable is {String(myVariable)}.
// </div>


// Refs and the DOM
// In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.

// When to Use Refs
// There are a few good use cases for refs:

// Managing focus, text selection, or media playback.
// Triggering imperative animations.
// Integrating with third-party DOM libraries.
// Avoid using refs for anything that can be done declaratively.

// For example, instead of exposing open() and close() methods on a Dialog component, pass an isOpen prop to it.

// Adding a Ref to a DOM Element
// React supports a special attribute that you can attach to any component. The ref attribute takes a callback function, and the callback will be executed immediately after the component is mounted or unmounted.

// When the ref attribute is used on an HTML element, the ref callback receives the underlying DOM element as its argument. For example, this code uses the ref callback to store a reference to a DOM node:

// class CustomTextInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.focus = this.focus.bind(this);
//   }

//   focus() {
//     // Explicitly focus the text input using the raw DOM API
//     this.textInput.focus();
//   }

// render() {
//     // Use the `ref` callback to store a reference to the text input DOM
//     // element in an instance field (for example, this.textInput).
//     return (
//       <div>
//         <input
//           type="text"
//           ref={(input) => { this.textInput = input; }} />
//         <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.focus}
//         />
//       </div>
//     );
//   }
// }
// React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts.

// Using the ref callback just to set a property on the class is a common pattern for accessing DOM elements. The preferred way is to set the property in the ref callback like in the above example. There is even a shorter way to write it: ref={input => this.textInput = input}.

// render() {
//     // Use the `ref` callback to store a reference to the text input DOM
//     // element in an instance field (for example, this.textInput).
//     return (
//       <div>
//         <input
//           type="text"
//           ref={(input) => { this.textInput = input; }} />
//         <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.focus}
//         />
//       </div>
//     );
//   }
// }
// React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts.

// Using the ref callback just to set a property on the class is a common pattern for accessing DOM elements. The preferred way is to set the property in the ref callback like in the above example. There is even a shorter way to write it: ref={input => this.textInput = input}.

// class CustomTextInput extends React.Component {
//   // ...
// }
// Refs and Functional Components
// You may not use the ref attribute on functional components because they don't have instances:

// function MyFunctionalComponent() {
//   return <input />;
// }

// class Parent extends React.Component {
//   render() {
//     // This will *not* work!
//     return (
//       <MyFunctionalComponent
//         ref={(input) => { this.textInput = input; }} />
//     );
//   }
// }

// You should convert the component to a class if you need a ref to it, just like you do when you need lifecycle methods or state.

// You can, however, use the ref attribute inside a functional component as long as you refer to a DOM element or a class component:

// function CustomTextInput(props) {
//   // textInput must be declared here so the ref callback can refer to it
//   let textInput = null;

//   function handleClick() {
//     textInput.focus();
//   }

// return (
//     <div>
//       <input
//         type="text"
//         ref={(input) => { textInput = input; }} />
//       <input
//         type="button"
//         value="Focus the text input"
//         onClick={handleClick}
//       />
//     </div>
//   );  
// }
// Don't Overuse Refs
// Your first inclination may be to use refs to "make things happen" in your app. If this is the case, take a moment and think more critically about where state should be owned in the component hierarchy. Often, it becomes clear that the proper place to "own" that state is at a higher level in the hierarchy. See the Lifting State Up guide for examples of this.
// Legacy API: String Refs
// If you worked with React before, you might be familiar with an older API where the ref attribute is a string, like "textInput", and the DOM node is accessed as this.refs.textInput. We advise against it because string refs have some issues, are considered legacy, and are likely to be removed in one of the future releases. If you're currently using this.refs.textInput to access refs, we recommend the callback pattern instead.

// Caveats
// If the ref callback is defined as an inline function, it will get called twice during updates, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one. You can avoid this by defining the ref callback as a bound method on the class, but note that it shouldn't matter in most cases.


// Uncontrolled Components
// In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

// To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.

// For example, this code accepts a single name in an uncontrolled component:

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.input.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" ref={(input) => this.input = input} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.input.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" ref={(input) => this.input = input} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// Default Values
// In the React rendering lifecycle, the value attribute on form elements will override the value in the DOM. With an uncontrolled component, you often want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a defaultValue attribute instead of value.

// render() {
//   return (
//     <form onSubmit={this.handleSubmit}>
//       <label>
//         Name:
//         <input
//           defaultValue="Bob"
//           type="text"
//           ref={(input) => this.input = input} />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }
// Likewise, <input type="checkbox"> and <input type="radio"> support defaultChecked, and <select> and <textarea> supports defaultValue.


// Uncontrolled inputs are similar to traditional HTML form inputs:

// class Form extends Component {
//   render() {
//     return (
//       <div>
//         <input type="text" />
//       </div>
//     );
//   }
// }
// It remembers what you typed. You can then get its value using a ref. For example, in onClick handler of a button:
// class Form extends Component {
//   handleSubmitClick = () => {
//     const name = this._name.value;
//     // do something with `name`
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={input => this._name = input} />
//         <button onClick={this.handleSubmitClick}>Sign up</button>
//       </div>
//     );
//   }
// }
// Put differently, you have to ‘pull’ the value from the field when you need it. This typically happens when the form is submitted.
// That is the simplest way to implement the form inputs. There certainly are valid cases for using it: in simple forms in the real world; and when learning React.
// A controlled input accepts its current value as a prop, as well as a callback to change that value. You could say it’s a more “React way” of approaching this (which doesn’t mean you should always use it).

// <input value={someValue} onChange={handleChange} />
// Which is fine and all… but the value of this input has to live in the state somewhere. Typically, the component that renders the input (aka the form component) saves that in its state:

// (Of course, it can be in the state of another component, or even in the separate state store, like Redux.)
// class Form extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//     };
//   }

//   handleNameChange = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.name}
//           onChange={this.handleNameChange}
//         />
//       </div>
//     );
//   }
// }
// Every time you type a new character, handleNameChange is called. It takes in the new value of the input and sets it in the state.
// This flow kind of ‘pushes’ the value changes to the form component, so the Form component always has the current value of the input, without needing to ask for it explicitly.

// This means your data (state) and UI (inputs) are always in sync. The state gives the value to the input, and the input asks the Form to change the current value.

// This also means that the form component can respond to input changes immediately; for example, by:
// in-place feedback, like validations
// disabling the button unless all fields have valid data
// enforcing a specific input format, like credit card numbers
// But if you don’t need any of that and consider uncontrolled to be simpler, go for it.
// in-place feedback, like validations
// disabling the button unless all fields have valid data
// enforcing a specific input format, like credit card numbers
// But if you don’t need any of that and consider uncontrolled to be simpler, go for it.

// in-place feedback, like validations
// disabling the button unless all fields have valid data
// enforcing a specific input format, like credit card numbers
// But if you don’t need any of that and consider uncontrolled to be simpler, go for it.

// use controlled forms in these cases:
// instant field validation	
// conditionally disabling submit button	❌	✅
// enforcing input format	❌	✅
// several inputs for one piece of data	❌	✅
// dynamic inputs

// Optimizing Performance
// Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance. Nevertheless, there are several ways you can speed up your React application.

// Avoid Reconciliation
// React builds and maintains an internal representation of the rendered UI. It includes the React elements you return from your components. This representation lets React avoid creating DOM nodes and accessing existing ones beyond necessity, as that can be slower than operations on JavaScript objects. Sometimes it is referred to as a "virtual DOM", but it works the same way on React Native.

// When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM.

// In some cases, your component can speed all of this up by overriding the lifecycle function shouldComponentUpdate, which is triggered before the re-rendering process starts. The default implementation of this function returns true, leaving React to perform the update:

// shouldComponentUpdate(nextProps, nextState) {
//   return true;
// }
// If you know that in some situations your component doesn't need to update, you can return false from shouldComponentUpdate instead, to skip the whole rendering process, including calling render() on this component and below.

// React Without ES6
// Normally you would define a React component as a plain JavaScript class:

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// If you don't use ES6 yet, you may use the create-react-class module instead:

// var createReactClass = require('create-react-class');
// var Greeting = createReactClass({
//   render: function() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// });
// The API of ES6 classes is similar to createReactClass() with a few exceptions.

// Declaring Default Props
// With functions and ES6 classes defaultProps is defined as a property on the component itself:

// class Greeting extends React.Component {
//   // ...
// }

// Greeting.defaultProps = {
//   name: 'Mary'
// };
// With createReactClass(), you need to define getDefaultProps() as a function on the passed object:

// var Greeting = createReactClass({
//   getDefaultProps: function() {
//     return {
//       name: 'Mary'
//     };
//   },

//   // ...

// });

// Declaring Default Props
// With functions and ES6 classes defaultProps is defined as a property on the component itself:

// class Greeting extends React.Component {
//   // ...
// }

// Greeting.defaultProps = {
//   name: 'Mary'
// };
// With createReactClass(), you need to define getDefaultProps() as a function on the passed object:

// var Greeting = createReactClass({
//   getDefaultProps: function() {
//     return {
//       name: 'Mary'
//     };
//   },

//   // ...

// });

// Autobinding
// In React components declared as ES6 classes, methods follow the same semantics as regular ES6 classes. This means that they don't automatically bind this to the instance. You'll have to explicitly use .bind(this) in the constructor:
// With createReactClass(), this is not necessary because it binds all methods:

// var SayHello = createReactClass({
//   getInitialState: function() {
//     return {message: 'Hello!'};
//   },

//   handleClick: function() {
//     alert(this.state.message);
//   },

//   render: function() {
//     return (
//       <button onClick={this.handleClick}>
//         Say hello
//       </button>
//     );
//   }
// });

// If you'd rather play it safe, you have a few options:

// Bind methods in the constructor.
// Use arrow functions, e.g. onClick={(e) => this.handleClick(e)}.
// Keep using createReactClass.


// React Without JSX
// JSX is not a requirement for using React. Using React without JSX is especially convenient when you don't want to set up compilation in your build environment.

// Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.

// For example, this code written with JSX:

// class Hello extends React.Component {
//   render() {
//     return <div>Hello {this.props.toWhat}</div>;
//   }
// }

// ReactDOM.render(
//   <Hello toWhat="World" />,
//   document.getElementById('root')
// );
// can be compiled to this code that does not use JSX:

// class Hello extends React.Component {
//   render() {
//     return React.createElement('div', null, `Hello ${this.props.toWhat}`);
//   }
// }

// ReactDOM.render(
//   React.createElement(Hello, {toWhat: 'World'}, null),
//   document.getElementById('root')
// );


// Web Components consists of several separate technologies. You can think of Web Components as reusable user interface widgets that are created using open Web technology. They are part of the browser, and so they do not need external libraries like jQuery or Dojo. An existing Web Component can be used without writing code, simply by adding an import statement to an HTML page. Web Components use new or still-developing standard browser capabilities.

// Web Components
// React and Web Components are built to solve different problems. Web Components provide strong encapsulation for reusable components, while React provides a declarative library that keeps the DOM in sync with your data. The two goals are complementary. As a developer, you are free to use React in your Web Components, or to use Web Components in React, or both.

// Most people who use React don't use Web Components, but you may want to, especially if you are using third-party UI components that are written using Web Components.

// Using Web Components in React
// class HelloMessage extends React.Component {
//   render() {
//     return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
//   }
// }

// Using Web Components in React
// class HelloMessage extends React.Component {
//   render() {
//     return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
//   }
// }
// function BrickFlipbox() {
//   return (
//     <brick-flipbox class="demo">
//       <div>front</div>
//       <div>back</div>
//     </brick-flipbox>
//   );
// }
// Using React in your Web Components
// const proto = Object.create(HTMLElement.prototype, {
//   attachedCallback: {
//     value: function() {
//       const mountPoint = document.createElement('span');
//       this.createShadowRoot().appendChild(mountPoint);

//       const name = this.getAttribute('name');
//       const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
//       ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
//     }
//   }
// });
// document.registerElement('x-search', {prototype: proto});

// Higher-Order Components
// A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature.

// Concretely, a higher-order component is a function that takes a component and returns a new component.

// const EnhancedComponent = higherOrderComponent(WrappedComponent);
// Whereas a component transforms props into UI, a higher-order component transforms a component into another component.

// HOCs are common in third-party React libraries, such as Redux's connect and Relay's createContainer

// Use HOCs For Cross-Cutting Concerns
// Note
// We previously recommended mixins as a way to handle cross-cutting concerns. We've since realized that mixins create more trouble than they are worth. Read more about why we've moved away from mixins and how you can transition your existing components.
// Components are the primary unit of code reuse in React. However, you'll find that some patterns aren't a straightforward fit for traditional components.

// For example, say you have a CommentList component that subscribes to an external data source to render a list of comments:


// React's diffing algorithm (called reconciliation) uses component identity to determine whether it should update the existing subtree or throw it away and mount a new one. If the component returned from render is identical (===) to the component from the previous render, React recursively updates the subtree by diffing it with the new one. If they're not equal, the previous subtree is unmounted completely.

// Normally, you shouldn't need to think about this. But it matters for HOCs because it means you can't apply an HOC to a component within the render method of a component:


// React Top-Level API
// React is the entry point to the React library. If you use React as a script tag, these top-level APIs are available on the React global. If you use ES6 with npm, you can write import React from 'react'. If you use ES5 with npm, you can write var React = require('react').

// Overview
// Components
// React components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React components can be defined by subclassing React.Component or React.PureComponent.

// React.Component
// React.PureComponent
// React.Component
// React.Component is the base class for React components when they are defined using ES6 classes.

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// See the React.Component API Reference for a list of methods and properties related to the base React.Component class.

// React.PureComponent
// React.PureComponent is exactly like React.Component but implements shouldComponentUpdate() with a shallow prop and state comparison.

// If your React component's render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.
// React.Component
// React.Component is the base class for React components when they are defined using ES6 classes.

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// See the React.Component API Reference for a list of methods and properties related to the base React.Component class.

// React.PureComponent
// React.PureComponent is exactly like React.Component but implements shouldComponentUpdate() with a shallow prop and state comparison.

// If your React component's render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.
// React.Component
// React.Component is the base class for React components when they are defined using ES6 classes.

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// See the React.Component API Reference for a list of methods and properties related to the base React.Component class.

// React.PureComponent
// React.PureComponent is exactly like React.Component but implements shouldComponentUpdate() with a shallow prop and state comparison.

// If your React component's render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.
// ou will not typically invoke React.createFactory() directly if you are using JSX. 




// React.Component
// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React.Component is provided by React.

// Overview
// React.Component is an abstract base class, so it rarely makes sense to refer to React.Component directly. Instead, you will typically subclass it, and define at least a render() method.

// Normally you would define a React component as a plain JavaScript class:

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// The Component Lifecycle
// Each component has several "lifecycle methods" that you can override to run code at particular times in the process. Methods prefixed with will are called right before something happens, and methods prefixed with did are called right after something happens.

// Mounting
// These methods are called when an instance of a component is being created and inserted into the DOM:

// constructor()
// componentWillMount()
// render()
// componentDidMount()
// Updating
// An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

// componentWillReceiveProps()
// shouldComponentUpdate()
// componentWillUpdate()
// render()
// componentDidUpdate()

// Unmounting
// This method is called when a component is being removed from the DOM:

// componentWillUnmount()
// Other APIs
// Each component also provides some other APIs:

// setState()
// forceUpdate()
// Class Properties
// defaultProps
// displayName
// Instance Properties
// props
// state

// render()
// render()
// The render() method is required.

// When called, it should examine this.props and this.state and return a single React element. This element can be either a representation of a native DOM component, such as <div />, or another composite component that you've defined yourself.

// You can also return null or false to indicate that you don't want anything rendered. When returning null or false, ReactDOM.findDOMNode(this) will return null.

// The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not directly interact with the browser. If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes components easier to think about.
// render()
// render()
// The render() method is required.

// When called, it should examine this.props and this.state and return a single React element. This element can be either a representation of a native DOM component, such as <div />, or another composite component that you've defined yourself.

// You can also return null or false to indicate that you don't want anything rendered. When returning null or false, ReactDOM.findDOMNode(this) will return null.

// The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not directly interact with the browser. If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes components easier to think about.

// render() will not be invoked if shouldComponentUpdate() returns false.

// constructor()
// constructor(props)
// The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.

// The constructor is the right place to initialize state. If you don't initialize state and you don't bind methods, you don't need to implement a constructor for your React component.

// It's okay to initialize state based on props. This effectively "forks" the props and sets the state with the initial props. Here's an example of a valid React.Component subclass constructor:

// constructor(props) {
//   super(props);
//   this.state = {
//     color: props.initialColor
//   };
// }

// Beware of this pattern, as state won't be up-to-date with any props update. Instead of syncing props to state, you often want to lift the state up.

// If you "fork" props by using them for state, you might also want to implement componentWillReceiveProps(nextProps) to keep the state up-to-date with them. But lifting state up is often easier and less bug-prone.

// componentWillMount()
// componentWillMount()
// componentWillMount() is invoked immediately before mounting occurs. It is called before render(), therefore setting state synchronously in this method will not trigger a re-rendering. Avoid introducing any side-effects or subscriptions in this method.

// This is the only lifecycle hook called on server rendering. Generally, we recommend using the constructor() instead.

// componentDidMount()
// componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.

// componentWillReceiveProps(nextProps)
// componentWillReceiveProps() is invoked before a mounted component receives new props. If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method.

// Note that React may call this method even if the props have not changed, so make sure to compare the current and next values if you only want to handle changes. This may occur when the parent component causes your component to re-render.

// React doesn't call componentWillReceiveProps with initial props during mounting. It only calls this method if some of component's props may update. Calling this.setState generally doesn't trigger componentWillReceiveProps.

// shouldComponentUpdate(nextProps, nextState)
// Use shouldComponentUpdate() to let React know if a component's output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.

// shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true. This method is not called for the initial render or when forceUpdate() is used.

// Returning false does not prevent child components from re-rendering when their state changes.

// Currently, if shouldComponentUpdate() returns false, then componentWillUpdate(), render(), and componentDidUpdate() will not be invoked. Note that in the future React may treat shouldComponentUpdate() as a hint rather than a strict directive, and returning false may still result in a re-rendering of the component.

// If you determine a specific component is slow after profiling, you may change it to inherit from React.PureComponent which implements shouldComponentUpdate() with a shallow prop and state comparison. If you are confident you want to write it by hand, you may compare this.props with nextProps and this.state with nextState and return false to tell React the update can be skipped.

// componentWillUpdate()
// componentWillUpdate(nextProps, nextState)
// componentWillUpdate() is invoked immediately before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.

// Note that you cannot call this.setState() here. If you need to update state in response to a prop change, use componentWillReceiveProps() instead.

// Note
// componentWillUpdate() will not be invoked if shouldComponentUpdate() returns false.

// componentDidUpdate(prevProps, prevState)
// componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.

// Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

// Note
// componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.

// componentWillUnmount()
// componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any DOM elements that were created in componentDidMount


// setState(updater, [callback])
// setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.

// Think of setState() as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. React does not guarantee that the state changes are applied immediately.

// setState() does not always immediately update the component. It may batch or defer the update until later. This makes reading this.state right after calling setState() a potential pitfall. Instead, use componentDidUpdate or a setState callback (setState(updater, callback)), either of which are guaranteed to fire after the update has been applied. If you need to set the state based on the previous state, read about the updater argument below.

// setState() will always lead to a re-render unless shouldComponentUpdate() returns false. If mutable objects are being used and conditional rendering logic cannot be implemented in shouldComponentUpdate(), calling setState() only when the new state differs from the previous state will avoid unnecessary re-renders.

// The first argument is an updater function with the signature:
// (prevState, props) => nextState
// prevState is a reference to the previous state. It should not be directly mutated. Instead, changes should be represented by building a new state object based on the input from prevState and props. For instance, suppose we wanted to increment a value in state by props.step:

// this.setState((prevState, props) => {
//   return {counter: prevState.counter + props.step};
// });
// Both prevState and props received by the updater function are guaranteed to be up-to-date.

// The second parameter to setState() is an optional callback function that will be executed once setState is completed and the component is re-rendered. Generally we recommend using componentDidUpdate() for such logic instead.

// You may optionally pass an object as the first argument to setState() instead of a function:

// setState(stateChange, [callback])
// This performs a shallow merge of stateChange into the new state, e.g., to adjust a shopping cart item quantity:

// this.setState({quantity: 2})

// This form of setState() is also asynchronous, and multiple calls during the same cycle may be batched together. For example, if you attempt to increment an item quantity more than once in the same cycle, that will result in the equivalent of:

// Object.assign(
//   previousState,
//   {quantity: state.quantity + 1},
//   {quantity: state.quantity + 1},
//   ...
// )
// Subsequent calls will override values from previous calls in the same cycle, so the quantity will only be incremented once. If the next state depends on the previous state, we recommend using the updater function form, instead:

// this.setState((prevState) => {
//   return {counter: prevState.quantity + 1};
// });

// forceUpdate()
// component.forceUpdate(callback)
// By default, when your component's state or props change, your component will re-render. If your render() method depends on some other data, you can tell React that the component needs re-rendering by calling forceUpdate().

// Calling forceUpdate() will cause render() to be called on the component, skipping shouldComponentUpdate(). This will trigger the normal lifecycle methods for child components, including the shouldComponentUpdate() method of each child. React will still only update the DOM if the markup changes.

// Normally you should try to avoid all uses of forceUpdate() and only read from this.props and this.state in render().

// Class Properties
// defaultProps
// defaultProps can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for null props. For example:

// class CustomButton extends React.Component {
//   // ...
// }

// CustomButton.defaultProps = {
//   color: 'blue'
// };
// If props.color is not provided, it will be set by default to 'blue':
// render() {
//     return <CustomButton /> ; // props.color will be set to blue
//   }
// If props.color is set to null, it will remain null:

//   render() {
//     return <CustomButton color={null} /> ; // props.color will remain null
//   }
// displayName
// The displayName string is used in debugging messages. JSX sets this value automatically


// Instance Properties
// props
// this.props contains the props that were defined by the caller of this component. See Components and Props for an introduction to props.

// In particular, this.props.children is a special prop, typically defined by the child tags in the JSX expression rather than in the tag itself.

// state
// The state contains data specific to this component that may change over time. The state is user-defined, and it should be a plain JavaScript object.

// If you don't use it in render(), it shouldn't be on the state. For example, you can put timer IDs directly on the instance.

// See State and Lifecycle for more information about the state.

// Never mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable.


// ReactDOM
// If you use React as a script tag, these top-level APIs are available on the ReactDOM global. If you use ES6 with npm, you can write import ReactDOM from 'react-dom'. If you use ES5 with npm, you can write var ReactDOM = require('react-dom').

// The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.

// render()
// unmountComponentAtNode()
// findDOMNode()

// render()
// ReactDOM.render(
//   element,
//   container,
//   [callback]
// )
// Render a React element into the DOM in the supplied container and return a reference to the component (or returns null for stateless components).

// If the React element was previously rendered into container, this will perform an update on it and only mutate the DOM as necessary to reflect the latest React element.

// If the optional callback is provided, it will be executed after the component is rendered or updated.
// ReactDOM.render() controls the contents of the container node you pass in. Any existing DOM elements inside are replaced when first called. Later calls use React’s DOM diffing algorithm for efficient updates.
// ReactDOM.render() does not modify the container node (only modifies the children of the container). It may be possible to insert a component to an existing DOM node without overwriting the existing children.
// ReactDOM.render() currently returns a reference to the root ReactComponent instance. However, using this return value is legacy and should be avoided because future versions of React may render components asynchronously in some cases. If you need a reference to the root ReactComponent instance, the preferred solution is to attach a callback ref to the root element.

// ReactDOM.unmountComponentAtNode(container)
// Remove a mounted React component from the DOM and clean up its event handlers and state. If no component was mounted in the container, calling this function does nothing. Returns true if a component was unmounted and false if there was no component to unmount.

// ReactDOM.findDOMNode(component)
// If this component has been mounted into the DOM, this returns the corresponding native browser DOM element. This method is useful for reading values out of the DOM, such as form field values and performing DOM measurements. In most cases, you can attach a ref to the DOM node and avoid using findDOMNode at all. When render returns null or false, findDOMNode returns null.
// findDOMNode is an escape hatch used to access the underlying DOM node. In most cases, use of this escape hatch is discouraged because it pierces the component abstraction.
// findDOMNode only works on mounted components (that is, components that have been placed in the DOM). If you try to call this on a component that has not been mounted yet (like calling findDOMNode() in render() on a component that has yet to be created) an exception will be thrown.
// findDOMNode cannot be used on functional components.


// DOM Elements
// React implements a browser-independent DOM system for performance and cross-browser compatibility. We took the opportunity to clean up a few rough edges in browser DOM implementations.

// In React, all DOM properties and attributes (including event handlers) should be camelCased. For example, the HTML attribute tabindex corresponds to the attribute tabIndex in React. The exception is aria-* and data-* attributes, which should be lowercased.

// Differences In Attributes
// There are a number of attributes that work differently between React and HTML:

// checked
// The checked attribute is supported by <input> components of type checkbox or radio. You can use it to set whether the component is checked. This is useful for building controlled components. defaultChecked is the uncontrolled equivalent, which sets whether the component is checked when it is first mounted.

// className
// To specify a CSS class, use the className attribute. This applies to all regular DOM and SVG elements like <div>, <a>, and others.

// If you use React with Web Components (which is uncommon), use the class attribute instead.

// dangerouslySetInnerHTML
// dangerouslySetInnerHTML is React's replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it's easy to inadvertently expose your users to a cross-site scripting (XSS) attack. So, you can set HTML directly from React, but you have to type out dangerouslySetInnerHTML and pass an object with a __html key, to remind yourself that it's dangerous. For example:

// function createMarkup() {
//   return {__html: 'First &middot; Second'};
// }

// function MyComponent() {
//   return <div dangerouslySetInnerHTML={createMarkup()} />;
// }
// htmlFor
// Since for is a reserved word in JavaScript, React elements use htmlFor instead.

// onChange
// The onChange event behaves as you would expect it to: whenever a form field is changed, this event is fired. We intentionally do not use the existing browser behavior because onChange is a misnomer for its behavior and React relies on this event to handle user input in real time.

// selected
// The selected attribute is supported by <option> components. You can use it to set whether the component is selected. This is useful for building controlled components.

// style
// The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes. For example:

// const divStyle = {
//   color: 'blue',
//   backgroundImage: 'url(' + imgUrl + ')',
// };

// function HelloWorldComponent() {
//   return <div style={divStyle}>Hello World!</div>;
// }
// Note that styles are not autoprefixed. To support older browsers, you need to supply corresponding style properties:

// const divStyle = {
//   WebkitTransition: 'all', // note the capital 'W' here
//   msTransition: 'all' // 'ms' is the only lowercase vendor prefix
// };

// function ComponentWithTransition() {
//   return <div style={divStyle}>This should work cross-browser</div>;
// }
// Style keys are camelCased in order to be consistent with accessing the properties on DOM nodes from JS (e.g. node.style.backgroundImage). Vendor prefixes other than ms should begin with a capital letter. This is why WebkitTransition has an uppercase "W".

// value
// The value attribute is supported by <input> and <textarea> components. You can use it to set the value of the component. This is useful for building controlled components. defaultValue is the uncontrolled equivalent, which sets the value of the component when it is first mounted.
// For example, you may declare a Button component by creating a class. When the app is running, you may have several instances of this component on screen, each with its own properties and local state. This is the traditional object-oriented UI programming. Why introduce elements?

// components, instances, elements
// In this traditional UI model, it is up to you to take care of creating and destroying child component instances. If a Form component wants to render a Button component, it needs to create its instance, and manually keep it up to date with any new information.\

// An element is a plain object describing a component instance or DOM node and its desired properties. It contains only information about the component type (for example, a Button), its properties (for example, its color), and any child elements inside it.

// An element is not an actual instance. Rather, it is a way to tell React what you want to see on the screen. You can’t call any methods on the element. It’s just an immutable description object with two fields: type: (string | ReactClass) and props: Object1.

// An element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.

// A component can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns an element tree as the output.

// When a component receives some props as an input, it is because a particular parent component returned an element with its type and these props. This is why people say that the props flows one way in React: from parents to children.

// An instance is what you refer to as this in the component class you write. It is useful for storing local state and reacting to the lifecycle events.

// Functional components don’t have instances at all. Class components have instances, but you never need to create a component instance directly—React takes care of this.

// Finally, to create elements, use React.createElement(), JSX, or an element factory helper. Don’t write elements as plain objects in the real code—just know that they are plain objects under the hood.


// Design Principles

// Composition
// The key feature of React is composition of components. Components written by different people should work well together. It is important to us that you can add functionality to a component without causing rippling changes throughout the codebase.

// For example, it should be possible to introduce some local state into a component without changing any of the components using it. Similarly, it should be possible to add some initialization and teardown code to any component when necessary.

// There is nothing "bad" about using state or lifecycle hooks in components. Like any powerful feature, they should be used in moderation, but we have no intention to remove them. On the contrary, we think they are integral parts of what makes React useful. We might enable more functional patterns in the future, but both local state and lifecycle hooks will be a part of that model.

// Components are often described as "just functions" but in our view they need to be more than that to be useful. In React, components describe any composable behavior, and this includes rendering, lifecycle, and state. Some external libraries like Relay augment components with other responsibilities such as describing data dependencies. It is possible that those ideas might make it back into React too in some form.



// What is React?

// React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications.

// The key point in this answer is that React’s core purpose is to build UI components; it is often referred to as just the “V” (View) in an “MVC” 
// architecture. Therefore it has no opinions on the other pieces of your technology stack and can be seamlessly integrated into any application.

// React focuses exclusively on the creation of components, and has few (if any) opinions about an application’s architecture. This allows a developer an
//  incredible amount of flexibility in choosing the architecture they deem “best” — though it also places the responsibility of choosing (or building) 
//  those parts on the developer.

// Question #2: What happens during the lifecycle of a React component?

// High-Level Component Lifecycle

// At the highest level, React components have lifecycle events that fall into three general categories:

// Initialization
// State/Property Updates
// Destruction
// Every React component defines these events as a mechanism for managing its properties, state, and rendered output. Some of these events only happen 
// once, others happen more frequently; understanding these three general categories should help you clearly visualize when certain logic needs to be 
// applied.

// For example, a component may need to add event listeners to the DOM when it first mounts. However, it should probably remove those event listeners 
// when 
// the component unmounts from the DOM so that irrelevant processing does not occur.

// class MyComponent extends React.Component {
//     // when the component is added to the DOM...
//     componentDidMount() {
//         window.addEventListener(‘resize’, this.onResizeHandler);
//     }

//     // when the component is removed from the DOM...
//     componentWillUnmount() {
//         window.removeEventListener(‘resize’, this.onResizeHandler);
//     }

//     onResizeHandler() {
//         console.log(‘The window has been resized!’);
//     }
// }


// https://s3.amazonaws.com/codementor_content/2016-Jul/reactjs-qs1.png

// Take a look at the diagram above. The events under “Initialization” only happen when a component is first initialized or added to the DOM. Similarly, 
// the events under “Destruction” only happen once (when the component is removed from the DOM). However, the events under “Update” happen every time the properties or state of the component change.

// life cycle methods help improve the performance
// For example, components will automatically re-render themselves any time their properties or state change. However, in some cases a component might not need to update — so preventing the component from re-rendering might improve the performance of our application.

// class MyComponent extends React.Component {

//     // only re-render if the ID has changed!
//     shouldComponentUpdate(nextProps, nextState) {
//         return nextProps.id === this.props.id;
//     }
// }

// Question #3: What can you tell me about JSX?

// When Facebook first released React to the world, they also introduced a new dialect of JavaScript called JSX that embeds raw HTML templates inside JavaScript code. JSX code by itself cannot be read by the browser; it must be transpiled into traditional JavaScript using tools like Babel and webpack. While many developers understandably have initial knee-jerk reactions against it, JSX (in tandem with ES2015) has become the defacto method of defining React components.

// class MyComponent extends React.Component {
//     render() {
//         let props = this.props;

//         return (
//             <div className=”my-component”>
//                 <a href={props.url}>{props.name}>/a>
//             </div>
//         );
//     }
// }


// Developers do not have to use JSX (and ES2015) to write an application in React.

// This is certainly true. Having said that, many React developers prefer to use JSX as its syntax is far more declarative and reduces overall code complexity. Facebook certainly encourages it in all of their documentation!

// Adopting JSX allows the developer to simultaneously adopt ES2015 — giving immediate access to some wonderful syntactic sugar.

// ES2015 introduced a variety of new features to JavaScript that makes writing large applications far easier than ever before: classes, block scoping via let, and the new spread operator are just a small portion of the additions.

// import AnotherClass from ‘./AnotherClass’;

// class MyComponent extends React.Component {
//     render() {
//         let props = this.props;

//         return (
//             <div className=”my-component”>
//                 <AnotherClass {...props} />
//             </div>
//         );
//     }
// }

// }
// But while ES2015 is becoming more and more widespread, it still is far from widely supported by the major browsers — so you’ll need to use a tool like Babel or webpack to convert everything into legacy ES5 code.

// If you have built a React application using JSX and ES2015, be sure to speak about some specific pros or cons you encountered:


// Question #4: Are you familiar with Flux?

// Flux is an architectural pattern that enforces unidirectional data flow — its core purpose is to control derived data so that multiple components can interact with that data without risking pollution.

// The Flux pattern is generic; it’s not specific to React applications, nor is it required to build a React app. However, Flux is commonly used by React developers because React components are declarative — the rendered UI (View) is simply a function of state (Store data).

// react.js interview questions
// https://s3.amazonaws.com/codementor_content/2016-Jul/reactjs-qs2.png


// In the Flux pattern, the Store is the central authority for all data; any mutations to the data must occur within the store. Changes to the Store data are subsequently broadcast to subscribing Views via events. Views then update themselves based on the new state of received data.

// To request changes to any Store data, Actions may be fired. These Actions are controlled by a central Dispatcher; Actions may not occur simultaneously, ensuring that a Store only mutates data once per Action.

// The strict unidirectional flow of this Flux pattern enforces data stability, reducing data-related runtime errors throughout an application.


// Flux vs MVC

// Traditional MVC patterns have worked well for separating the concerns of data (Model), UI (View) and logic (Controller) — but many web developers have discovered limitations with that approach as applications grow in size. Specifically, MVC architectures frequently encounter two main problems:

// Poorly defined data flow: The cascading updates which occur across views often lead to a tangled web of events which is difficult to debug.
// Lack of data integrity: Model data can be mutated from anywhere, yielding unpredictable results across the UI.

// With the Flux pattern complex UIs no longer suffer from cascading updates; any given React component will be able to reconstruct its state based on the data provided by the store. The flux pattern also enforces data integrity by restricting direct access to the shared data.

// During a technical interview, it would be great to discuss the differences between the Flux and MVC design patterns within the context of a specific example:

// For example, imagine we have a “master/detail” UI in which the user can select a record from a list (master view) and edit it using an auto-populated form (detail view).

// With an MVC architecture, the data contained within the Model is shared between both the master and detail Views. Each of these views might have its own Controller delegating updates between the Model and the View. At any point the data contained within the Model might be updated — and it’s difficult to know where exactly that change occurred. Did it happen in one of the Views sharing that Model, or in one of the Controllers? Because the Model’s data can be mutated by any actor in the application, the risk of data pollution in complex UIs is greater than we’d like.

// With a Flux architecture, the Store data is similarly shared between multiple Views. However this data can’t be directly mutated — all of the requests to update the data must pass through the Action > Dispatcher chain first, eliminating the risk of random data pollution. When updates are made to the data, it’s now much easier to locate the code requesting those changes.

// Flux pattern encourages the use of immutable data. Because the store is the central authority on all data, any mutations to that data must occur within the store. The risk of data pollution is greatly reduced.

// Testing

// One of the most valuable aspects of applications built on Flux is that their components become incredibly easy to test. Developers can recreate and test the state of any React component by simply updating the store — direct interactions with the UI  (with tools like Selenium) are no longer necessary in many cases.

// Popular Flux Libraries

// While Flux is a general pattern for enforcing data flow through an application, there exist many implementations from which to choose from. There are nuances between each implementation, as well as specific pros and cons to consider. In a technical interview, you should be prepared to discuss any real-world experience you have using Flux.

// For example, you might discuss:

// <Redux: perhaps the most popular Flux library today.
// Alt.js: another popular library for managing data in React applications.

// Question #5: What are stateless components?

// If React components are essentially state machines that generate UI markup, then what are stateless components?

// Stateless components (a flavor of “reusable” components) are nothing more than pure functions that render DOM based solely on the properties provided to them.

// const StatelessCmp = (props) => {
//     return (
//         <div className=”my-stateless-component”>
//             {props.name}: {props.birthday}
//         </div>
//     );
// };

// // ---
// ReactDOM.render(
//     <StatelessCmp name=”Art” birthday=”10/01/1980” />,
//     document.getElementById(“main”)
// );

// As you can see, this component has no need for any internal state — let alone a constructor or lifecycle handlers. The output of the component is purely a function of the properties provided to it.


// Compare and contrast creating React Components in ES5 and ES2015 (also known as ES6). What are the advantages and disadvantages of using one or the other? Include notes about default props, initial state, PropTypes, and DisplayName.

// Creating React Components the ES5 way involves using the React.createClass() method:


// var Comments = React.createClass({

//     displayName: 'Comments',

//     getInitialState: function(){
//         return {comments: []}
//     },

//     getDefaultProps: function(){
//         return {some_object: {a:1, b:2, c:3}}
//     },

//     _handleClick: function(){
//         alert('hello world!')
//     },

//     render: function(){
//         return <div>
//             There are {this.state.comments.length} comments
//             <button onClick={this._handleClick}>click me!</button>
//         </div>
//     }
// })
// This Comments Component can now be rendered either inside another React Component or directly in the call to ReactDOM.render():

// ReactDOM.render(<Comments />, document.querySelector('.app'))

// ES5 Components have some particular qualities, which we’ll note:

// Like the above example, to set the state to an initial value, create the getInitialState() function on the Component. What it returns will be the initial state for a Component when rendered.
// Additionally, you can set the default props for the component to have a certain value with the getDefaultProps() method on the ES5 version.
// The displayName is used in debugging and error reporting by React. If you use JSX, then the displayName is automatically filled out.
// For some, it is common practice to denote a custom method added to a React Component by prefixing it with an underscore, hence _handleClick. _handleClick is passed as the onClick callback for a button in the code above. We can’t do this so easily in the ES6 API of React, because the ES5 version has autobinding, but the ES6 does not. Let’s take a look at what autobinding provides:
// Auto-binding

// Consider the following piece of code:

// var thing = {
//     name: 'jen',
//     speak: function(){ console.log(this.name) }
// }

// window.addEventListener('keyup', thing.speak)
// Invoking thing.speak() in the console will log "jen", but pressing a key will log undefined because the context of the callback is the global object. The browser’s global object – window – becomes this inside the speak() function, so this.name becomes window.name, which is undefined.

// React in ES5 automatically does autobinding, effectively doing the following:

// window.addEventListener('keyup', thing.speak.bind(thing))
// Autobinding automatically binds our functions to the React Component instance so that passing the function by reference in the render() works seamlessly.

// Creating React Components the ES6 way works a little differently, favoring the ES6 class ... extends ... syntax, and no autobinding feature:

// class Comments extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {comments: []}
//     }

//     _handleClick(){
//         alert('hello world!')
//     }

//     render(){
//         return <div>
//             There are {this.state.comments.length} comments
//             <button onClick={() => this._handleClick}>click me!</button>
//         </div>
//     }
// }
// Comments.defaultProps = {a:1, b:2, c:3}
// Comments.displayName = 'Comments'
// Notice that in ES6, we have a constructor() that we use to set the initial state,
// We can add default props and a display name as properties of the new class created, and
// The render() method, which works as normal, but we’ve had to alter how we pass in the callback function. This current approach (<button onClick={() => this._handleClick}>click me!</button>) will create a new function each time the component is re-rendered; so if it becomes a performance bottleneck, you can always bind manually and store the callback:
//     class Comments extends React.Component {
//         constructor(props){
//             super(props)
//             // this._handleClick = this._handleClick.bind(this)
//         }
//         // ...
//         render(){
//             return <button onClick={this._handleClick}> click me! </button>
//             // or
//             return  <button onClick={this._handleClick.bind(this)}> click me! </button>
//         }
//     }
// Many React utility libraries on npm provide a single function to bind all handlers in the constructor, just like React does:

// class Comments extends React.Component {
//     constructor(props){
//         super(props)
//         // this._handleClick = this._handleClick.bind(this)
//     }
//     // ...
//     render(){
//         return <button onClick={this._handleClick}> click me! </button>
//         // or
//         return  <button onClick={this._handleClick.bind(this)}> click me! </button>
//     }
// }



// Explain the Virtual DOM, and a pragmatic overview of how React renders it to the DOM.

// The Virtual DOM is an interesting concept; it’s a complex idea that boils down into a much simpler algorithm.

// In React, if we create simple ES6 class and print it out, we have a function (as all functions can be used as a constructor in JavaScript):

// const app = () => {
//     let React = react,
//         {Component} = React,
//         DOM = reactDom

//     class Comments extends Component {
//         constructor(props){ super(props) }
//         render(){ return <div>test</div> }
//     }

//     console.log(Comments)
// }

// require('react', 'react-dom').then(app)
// The console.log(Comments) gives us something that looks like this (after compiled by Babel from ES6 to ES5):

// function Comments(props) {
//     _classCallCheck(this, Comments);

//     return _possibleConstructorReturn(this, Object.getPrototypeOf(Comments).call(this, props));
// }
// When we write something to draw a React Component to the screen, we might have something like the following:

// DOM.render(<Comments />, document.body)
// The JSX gets transpiled into ES5 by Babel as well:

// DOM.render(React.createElement(Comments, null), document.body);
// We can see that <Comments /> is transpiled directly into React.createElement(Comments, null). This is where we can see what a Virtual DOM object actually is: a plain JavaScript Object that represents the tag to be rendered onto the screen.

// Let’s inspect the output of React.createElement():

// console.log(<div/>)
// // or
// console.log(React.createElement('div', null))
// This gives us:

// {"type":"div","key":null,"ref":null,"props":{},"_owner":null,"_store":{}}
// See how the type is a string? DOM.render({...}) gets this object above and looks at the type, and decides whether or not to reuse an existing <div> element on the DOM or create a new <div> and append it.

// The Virtual DOM is not a simple Object – it is a recursive structure. For example, if we add two elements beneath the <div/>:

// console.log(<div><span/><button/></div>)
// // or
// console.log(React.createElement(
//     'div',
//     null,
//     React.createElement('span', null),
//     React.createElement('button', null)
// ))
// What we get is a nested Object-tree:

// {
//     "type":"div",
//     "key":null,
//     "ref":null,
//     "props":{
//         "children": [
//             {"type":"span","key":null,"ref":null,"props":{}},
//             {"type":"button","key":null,"ref":null,"props":{}}
//         ]
//     }
// }
// This is why, in a React Component’s code, we can access the child and ancestor elements via this.props.children. What React will do is walk down a very deep tree of nested Objects (depending on your UI complexity), each sitting in their parent element’s children.

// One thing to note is that the type so far has just been a string. When a React Element is made from a custom Component (like Comments above), the type is a function:

// console.log(<Comments />)
// // or
// console.log(React.createElement(Comments, null))
// gives us:

// {
//     "key":null,
//     "ref":null,
//     "props":{},
//     “type”: function Component() { ... }
	
	
	
	
// 	Explain the standard JavaScript toolchain, transpilation (via Babel or other compilers), JSX, and these items’ significance in recent development. What sort of tools might you use in the build steps to optimize the compiled output React code?
// 	The bleeding edge JavaScript toolchain can seem quite complex, and it’s very important to feel confident in the toolchain and to have a mental picture of how the pieces fit together.

// There are a couple primary pillars in the JavaScript toolchain: Dependency Management, Linting, Style-checking, Transpilation, and Compilation, Minification, Source-Mapping.

// Typically, we use build tools like Gulp, Watchify/Browserify, Broccoli, or Webpack to watch thea filesystem for file events (like when you add or edit a file). After this occurs, the build tool is configured to carry out a group of sequential or parallel tasks.

// This part is the most complex piece, and is the center of the development process.

// The rest of the tools belong in that group of sequential or parallel tasks:

// Style linting - typically a linter like JSCS is used to ensure the source code is following a certain structure and style
// Dependency Management - for JavaScript projects, most people use other packages from npm; some plugins exist for build systems (e.g. Webpack) and compilers (e.g. Babel) that allow automatic installation of packages being imported or require()‘d
// Transpilation - a specific sub-genre of compilation, transpilation involves compiling code from one source version to another, only to a similar runtime level (e.g. ES6 to ES5)
// Compilation - specifically separate from transpiling ES6 and JSX to ES5, is the act of including assets, processing CSS files as JSON, or other mechanisms that can load and inject external assets and code into a file. In addition, there are all sorts of build steps that can analyze your code and even optimize it for you.
// Minification and Compression - typically part of – but not exclusively controlled by – compilation, is the act of minifying and compressing a JS file into fewer and/or smaller files
// Source-Mapping - another optional part of compilation is building source maps, which help identify the line in the original source code that corresponds with the line in the output code (i.e. where an error occurred)

// For React, there are specific build tool plugins, such as the babel-react-optimize presets that involves compiling code into a format that optimizes React, such as automatically compiling any React.createElement() calls into a JavaScript Object that inlines right into the source code:

// class MyComponent extends React.Component {
//   render() {
//     return (
//       <div className={this.props.className}>
//         <span>Hello World</span>
//       </div>
//     );
//   }
// }
// becomes

// class MyComponent extends React.Component {
//   render() {
//     return (
//       _jsx('div', { className: this.props.className }, void 0,
//         _jsx('span', {}, void 0, 'Hello World')
//       )
//     );
//   }
// }


// Compare and contrast the various React Component lifecycle methods. How might understanding these help build certain interfaces/features?

// There are several React lifecycle methods that help us manage the asynchronous and non-determinate nature of a Component during it’s lifetime in an app – we need provided methods to help us handle when a component is created, rendered, updates, or removed from the DOM.

// Let’s first classify and define the life-cycle methods:

// The “Will’s” - invoked right before the event represented occurs.

// componentWillMount() - Invoked once, both on the client and server, immediately before the initial rendering occurs. If you call setState within this method, render() will see the updated state and will be executed only once despite the state change.
// componentWillReceiveProps(object nextProps) - Invoked when a component is receiving new props. This method is not called for the initial render. Calling this.setState() within this function will not trigger an additional render. One common mistake is for code executed during this lifecycle method to assume that props have changed.
// componentWillUnmount() - Invoked immediately before a component is unmounted from the DOM. Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount.
// componentWillUpdate(object nextProps, object nextState) - Invoked immediately before rendering when new props or state are being received. This method is not called for the initial render.
// The “Did’s”

// componentDidMount() - Invoked once, only on the client (not on the server), immediately after the initial rendering occurs. At this point in the lifecycle, you can access any refs to your children (e.g., to access the underlying DOM representation). The componentDidMount() method of child components is invoked before that of the parent component.

// componentDidUpdate(object prevProps, object prevState) - Invoked immediately after the component’s updates are flushed to the DOM. This method is not called for the initial render. Use this as an opportunity to operate on the DOM when the component has been updated.
// The “Should’s”

// shouldComponentUpdate(object nextState, object nextProps) - Invoked before rendering when new props or state are being received. This method is not called for the initial render or when forceUpdate() is used. Use this as an opportunity to return false when you’re certain that the transition to the new props and state will not require a component update.
// Having a strong understanding of how these fit together – and how setState() or forceUpdate() affect the lifecycle – will help the conscious React developer build robust UIs.

// How would you create Higher Order Components (HOCs) in React?

// Higher Order Components (HOCs) are the coined term for a custom Component that accepts dynamically provided children. For example, let’s make <LazyLoad /> Component that takes child image tags as children, waits until the <LazyLoad /> Component is scrolled into view, and then loads the images they point to in the background (before rendering them to the DOM).

// An HOC accepts children via props:

// DOM.render(
//     <LazyLoad>
//         <img src="https://media.giphy.com/media/HhvUpQhBWMtwc/200.gif"/>
//         <img src="https://media2.giphy.com/media/3oEduUDvycvu3GYkdG/200w.gif"/>
//         <img src="https://media0.giphy.com/media/142UITjG5GjIRi/200w.gif" />
//     </LazyLoad>,
//     document.body)
// Creating an HOC means handling this.props.children in the Component’s code:

// interactive example can be found at https://goo.gl/ns0B6j
// class LazyLoad extends Component {
//     constructor(p){
//         super(p)
//         this.state = { loaded:0 }
//         this._scroll = this._scroll.bind(this)
//     }
//     _scroll(){
//         let el = DOM.findDOMNode(this)
//         let {top} = el.getBoundingClientRect()
//         let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
//         if(top < (viewportHeight + this.props.top)) {
//             window.removeEventListener('scroll', this._scroll)
//             this.setState({loaded:1})
//         }
//     }
//     componentDidMount(){
//         window.addEventListener('scroll', this._trackYPosition)
//         this._scroll()
//     }
//     componentWillUnmount(){
//         window.removeEventListener('scroll', this._trackYPosition)
//     }
//     render(){
//         let {children} = this.props,
//             {loaded} = this.state
//         return <div>
//             {loaded && children}
//         </div>
//     }
// }

// LazyLoad.defaultProps = {
//     top: 100
// }
// Noting a few things about this code:

// We set up initial state (this.state = {loaded: 0}) in the constructor(). This will be set to 1 when the parent container is scrolled into view.
// The render() returns the props.children as child elements when this occurs. Extract the src by using ES6 destructuring, where {props:{src}} creates a variable src with the appropriate value.
// We used a single componentDidMount() lifecycle method. This is used because on mount, we’d like the component to check if the HOC is visible.
// The largest function of our component, _scroll(), grabs the HOC Component’s DOM element with DOM.findDOMNode() and then gets the elements position. This position is compared to the height of the browser window, and if it is less than 100px from the bottom, then the scroll listener is removed and loaded is set to 1.
// This technique is called HOC (Higher Order Component) because we pass in elements as this.props.children when we nest those elements inside the container component:

// <HOC>
//     <div>some</div>
//     <span>children</span>
//     <Props/>
// </HOC>
// All of these nested elements (which can be custom components) are nested under <HOC/>, thus HOC’s code will be able to access them as this.props.children.


// Compare and contrast incorporating mixins and enforcing modularity in React Components. (extend, createClass and mixins, HOCs) Why would you use these techniques, and what are the drawbacks of each?

// Modularity is – in effect – something partially done with intention while coding, and partially done when refactoring afterwards.

// Let’s first paint a scenario which we’ll model using each method above. Imagine we have three React Components: onScrollable, Loadable, and Loggable.

// an onScrollable Component will listen to the window.onscroll event, and use a logging mechanism to record it
// a Loadable Component will not render until one or more async requests have finished loading, and will use a logging mechanism to record when this occurs
// a Loggable Component provides a logging mechanism, be it a console, a Winston Node.js logging setup on our own server, or some 3rd party logging service that records logs via JSON requests
// First, let’s model this with React’s ES5 API and mixins.

// Interactive code sample at Matthew Keas’ github.
// var onKeypress = {
//     componentDidMount(){
//         this.onpress && window.addEventListener('keyup', this.onpress)
//     },
//     componentWillUnmount(){
//         this.onpress && window.removeEventListener('keyup', this.onpress)
//     }
// }

// var Loadable = {
//     componentDidMount(){
//         if(this.load){
//             this.setState({loaded: false})
//             Promise.all([].concat(this.load))
//                 .then(() =>
//                     this.setState({loaded: true}))
//         }
//     }
// }

// var Loggable = {
//     log(...args) {
//         alert(args)
//     }
// }

// var Example = React.createClass({
//     mixins: [Loggable, Loadable, onKeypress],
//     componentWillMount(){
//         this.onpress = (e) => this.log(e.which, 'pressed!')
//         this.load = [new Promise((res,rej) => setTimeout(res, 3000))]
//         this.log = (...args) => console.log(...args)
//     },
//     getInitialState(){
//         return {}
//     },
//     render() {
//         if(!this.state.loaded)
//             return <div>loading...</div>
//         return <div>test</div>
//     }
// })

// DOM.render(<Example />, document.body)

// Let’s note a few things about the above code:

// There are three POJOs (Plain ol’ JS Objects) created, which hold lifecycle and/or custom methods.
// When creating the Example Component, we add mixins: [Loggable, Loadable, onKeypress], meaning that any functions from all three objects are included in the Example class.
// Both onKeypress and Loadable add a componentDidMount(), but this doesn’t mean the latter cancels out the prior. In fact, all componentDidMount() functions from each mixin will be invoked when the event occurs. The same is true for all lifecycle methods added to mixins. This way, both the onKeypress and Loadable mixins will work simultaneously!
// Mixins are possible, but not built-in to React’s ES6 API. However, the ES6 API makes it easier to create a custom Component that extends another custom Component.

// So our Components’ prototype chains would look like the following:

// [Example] --- extends ---> [Loggable] --- extends ---> [Loadable] --- extends ---> [onKeypress]
// This would result from Components written as such:

// class onKeypress {}
// class Loadable extends onKeypress {}
// class Loggable extends Loadable {}
// class Example extends Loggable {}
// Creating anonymous classes would help here, because then Loggable would not have to extend Loadable and onKeypress.

// class Example extends (class a extends Loggable extends ...) {

// }
// With a mixin() function, this could look more like:

// class Example extends mixin(Loggable, Loadable, onKeypress) {

// }
// Let’s try to write mixin() by building a chain of anonymous classes that extend Loggable, Loadable, and onKeypress:

// const mixin = (...classes) =>
//     classes.reduce((a,v) => {
//         return (class temp extends a)
//     }, (class temp {}))
// There’s a caveat, though – if Loadable extends onKeypress and both implement componentDidMount(), Loadable’s version will be lower on the prototype chain, which means the function from onKeypress will never be invoked.

// The takeaway here is that the mixin pattern isn’t easily implemented by relying only on the ES6 extends approach. Let’s try to implement mixin() again, but build a more robust function:

// const mixin = (...classes) => {
//     class _mixin {}
//     let proto = _mixin.prototype

//     classes.map(({prototype:p}) => {
//         Object.getOwnPropertyNames(p).map(key => {
//             let oldFn = proto[key] || (() => {})
//             proto[key] = (...args) => {
//                 oldFn(...args)
//                 return p[key](...args)
//             }
//         })
//     })

//     return _mixin
// }
// This new mixin() implementation maps over each class, and cascades function calls from a parent class’s componentDidMount() alongside the child’s componentDidMount().

// There are similar implementations of mixin() available on npm, using packages like react-mixin and es6-react-mixins.

// We use mixin() from above like so:

// interactive code sample available at https://goo.gl/VnQ21R
// class A {
//     componentDidMount(){
//         console.log(1)
//     }
// }

// class B {
//     componentDidMount(){
//         console.log(2)
//     }
// }

// class C extends mixin(A,B) {
//     componentDidMount(...p){
//         super.componentDidMount(...p)
//         console.log(3)
//     }
// }

// let c = new C()
// c.componentDidMount() // logs 1, 2, 3
// Recently, React provided support for – and documented its preference of – React Components declared with ES6 classes. ES6 classes allow us to create component heirarchies with less code, however this makes it more difficult to create a single Component that inherits properties from several mixins, instead forcing us to create prototype chains.

// What is the significance of keys in React?
// Hide answer
// Keys in React are used to identify unique VDOM Elements with their corresponding data driving the UI; having them helps React optimize rendering by recycling existing DOM elements. Let’s look at an example to portray this.

// We have two <TwitterUser> Components being rendered to a page, drawn in decreasing order of followers:

// -----------
// | A - 103 |
// -----------
// -----------
// | B - 92  |
// -----------
// Let’s say that B gets updated with 105 Twitter followers, so the app re-renders, and switches the ordering of A and B:

// -----------
// | B - 105 |
// -----------
// -----------
// | A - 103 |
// -----------
// Without keys, React would primarily re-render both <TwitterUser> Elements in the DOM. It would re-use DOM elements, but React won’t re-order DOM Elements on the screen.

// With keys, React would actually re-order the DOM elements, instead of rendering a lot of nested DOM changes. This can serve as a huge performance enhancement, especially if the DOM and VDOM/React Elements being used are costly to render.

// Keys themselves should be a unique number or string; so if a React Component is the only child with its key, then React will repurpose the DOM Element represented by that key in future calls to render().

// Let’s demonstrate this with a simple list of todos rendered with React:
// class List extends Component {
//     constructor(p){
//         super(p)
//         this.state = {
//             items: Array(5).fill(1).map((x,i) => ({id:i}))
//         }
//     }

//     componentDidMount(){
//         const random = (a,b) => Math.random() < .5 ? -1 : 1

//         setInterval(() => {
//             this.setState({
//                 items: this.state.items.sort(random)
//             })
//         }, 20)
//     }

//     render() {
//         let {items} = this.state
//         return <ul>
//             {items.map(item =>
//                 <li key={item.id}>{item.id}</li>)}
//         </ul>
//     }
// }

// DOM.render(<List />, document.body)
// The setInterval() occurring on mount reorders the items array in this.state every 20ms. Computationally, if React is reordering the items in state, then it would manipulate the DOM elements themselves instead of “dragging” them around between positions in the <ul>.

// It is worth noting here that if you render a homogenous array of children – such as the <li>’s above – React will actually console.warn() you of the potential issue, giving you a stack trace and line number to debug from. You won’t have to worry about React quietly breaking.

// What is the significance of refs in React?
// Hide answer
// Similarly to keys, refs are added as an attribute to a React.createElement() call, such as <li ref="someName"/>. The ref serves a different purpose, it provides us quick and simple access to the DOM Element represented by a React Element.

// Refs can be either a string or a function. Using a string will tell React to automatically store the DOM Element as this.refs[refValue]. For example:

// class List extends Component {
//     constructor(p){
//         super(p)
//     }

//     _printValue(){
//         console.log(this.refs.someThing.value)
//     }

//     render() {
//         return <div onClick={e => this._printValue()}>
//             <p>test</p>
//             <input type="text" ref="someThing" />
//         </div>
//     }
// }

// DOM.render(<List />, document.body)
// this.refs.someThing inside componentDidUpdate() used to refer to a special identifier that we could use with React.findDOMNode(refObject) – which would provide us with the DOM node that exists on the DOM at this very specific instance in time. Now, React automatically attaches the DOM node to the ref, meaning that this.refs.someThing will directly point to a DOM Element instance.

// Additionally, a ref can be a function that takes a single input. This is a more dynamic means for you assign and store the DOM nodes as variables in your code. For example:

// class List extends Component {
//     constructor(p){
//         super(p)
//     }

//     _printValue(){
//         console.log(this.myTextInput.value)
//     }

//     render() {
//         return <div onClick={e => this._printValue()}>
//             <p>test</p>
//             <input type="text" ref={node => this.myTextInput = node} />
//         </div>
//     }
// }

// DOM.render(<List />, document.body)

// Compare and contrast setState() and forceUpdate(). What is the significance of each, and when would you use one or the other? In addition, how might you use any data layer with React (like Backbone, Ember, or Redux)? What are the systemic requirements of doing so?
// Hide answer
// setState() called within a Component will tell React to trigger the proper re-rendering. It will also invoke the lifecycle methods, and those methods’ control on the rendering process. For example, if setState() is called within componentWillMount(), the state update will be synchronous, and the Component will only render once. If called within componentWillReceiveProps(), there will not be an additional render. It will also not render if shouldComponentUpdate() returns false.
// forceUpdate(), on the other hand, completely overrules the rendering process and queues up a new render for React to display to the screen; it will also not call shouldComponentUpdate().
// In most cases, you should use setState() unless your code is setup to need a bypass for shouldComponentUpdate(). As per the React docs, if your render() method reads from something other than this.props or this.state, such as if your Component has access to a shared variable that holds a Backbone Model, Redux Store, Ember Model, etc. In these cases, you’ll need to likely use forceUpdate(). It’s worth noting that you should never mutate this.state directly.

// In a general overview, how might React Router and its techniques differ from more traditional JavaScript routers like Backbone’s Router?
// Hide answer
// “Traditional” routers like the ever-popular Backbone.Router establish a predefined set of routes, in which each route defines a series of actions to take when a route is triggered. When combining Backbone.Router with React, you may have to mount and unmount React Components when the route changes:

// var MyRouter = Backbone.Router.extend({
//     routes: {
//         'home': 'showHome',
//         'search/:q': 'showSearch',
//         '*default': 'show404'
//     },
//     showHome(){
//         DOM.unmountComponentAtNode(document.body)
//         DOM.render(<Home />, document.body)
//     },
//     showSearch(q){
//         DOM.unmountComponentAtNode(document.body)
//         DOM.render(<Search query={q} />, document.body)
//     },
//     show404(){
//         DOM.unmountComponentAtNode(document.body)
//         DOM.render(<Error />, document.body)
//     }
// })

// The router exists externally of the React Components, and the VDOM has to mount and unmount potentially frequently, introducing a possible slew of problems. React Router focuses on not just “single-level” routing, but enables - nay, empowers - the creation of HOCs that can “decide for themselves” what to render within them.

// This is where the advanced HOC implementations can really help simplify a seemingly complex notion. Let’s look at using a tiny router to assess some of the beauty of embedding application routers inside React HOCs. Here, we define a Component that wraps it’s own routing mechanism (router() not provided here, see universal-utils):

// // router(routesObject, callback) --> when a route event occurs, we invoke callback() with
// // the React Element and the props passed via the route params

// class Router extends Component {
//     constructor(...a){
//         super(...a)

//         let p = this.props

//         this.state = {
//             routes: p.routes || {},
//             default: p.default || '/'
//         }

//         this.router = router(this.state.routes, (el, props) => {
//             this.current = el
//         })

//         this.router.trigger(this.state.default)
//     }
//     render(){
//         return this.current()
//     }
// }
// DOM.render(<Router routes={{
//     '/': () => <Home/>,
//     '/search/:q': ({q}) => <Search query={q} />,
//     '*': () => <Error />
// }}/>, document.body)
// This Router Component opts for parsing the routes object passed into this.props instead of reading over an array of React Components passed as this.props.children. React Router opts for the latter technique. Need proof? Take a look at this example code provided by React Router’s docs:

// DOM.render(
//     <Router history={browserHistory}>
//         <Route path="/" component={App}>
//             <Route path="about" component={About}/>
//             <Route path="users" component={Users}>
//                 <Route path="/user/:userId" component={User}/>
//             </Route>
//             <Route path="*" component={NoMatch}/>
//         </Route>
//   </Router>
// , document.body)

// A <Router /> Component has one or more <Route /> Components as items in this.props.children, and <Route />s can have sub-<Route />s. React Router’s code recursively walks down the tree of children until there are no more to process, allowing the developer to recursively declare routes in a structure that encapsulates sub-routes, instead of having to implement a Backbone-esque flat list of routes (i.e. "/", "/about", "/users", "/users/:id", etc).

// What are pure functional Components?
// Hide answer
// Traditional React Components as we have seen thus far are creating a class with class Example extends React.Component or React.createClass(). These create stateful components if we ever set the state (i.e. this.setState(), getInitialState(), or this.state = {} inside a constructor()).

// If we have no intention for a Component to need state, or to need lifecycle methods, we can actually write Components with a pure function, hence the term “pure functional Component”:

// function Date(props){
//     let {msg="The date is:"} = props
//     let now = new Date()
//     return <div>
//         <span>{msg}</span>
//         <time>{now.toLocaleDateString()}</time>
//     </div>
// }
// This function that returns a React Element can be used whereever we see fit:

// DOM.render(<div><Date msg="Today is"/><div>)
// You might notice that <Date/> also takes a prop – we can still pass information into the Component.

// How might React handle or restrict Props to certain types, or require certain Props to exist?
// Hide answer
// You may recall a previous example that looked like the following (some parts of the code left out):

// class LazyLoad extends Component {
//     constructor(p){
//         super(p)
//         this.state = { loaded:0 }
//     }
//     render(){
//         let {children} = this.props,
//             {loaded} = this.state
//         return <div>
//             {loaded && children}
//         </div>
//     }
// }
// When rendering the <LazyLoad/>, we can pass in props (i.e. <LazyLoad top={0}/>). Props are essentially inputs or values being passed down to one Component from the parent rendering context, and the code that passes the props to the element may not be compliant with your code. For example, top here seems to be just a number, but would I be able to verify that the prop is in-fact a number before my component is rendered? It’s certainly possible to write this code in each and every Component that uses props. However, React provides us a much simpler and shorter solution: Prop Types.

// let p = React.PropTypes
// LazyLoad.PropTypes = {
//     top: p.number
// }
// When using React’s non-minified development version (i.e. when building and testing in development), React will throw an error to alert you of any instances where a Prop is either missing or the wrong type. Above, top should always be a number.

// We can make top a required prop by adding:

// let p = React.PropTypes
// LazyLoad.PropTypes = {
//     top: p.number.isRequired
// }
// PropTypes can be used to test Props for any kind of value (see https://facebook.github.io/react/docs/reusable-components.html for more info). Here’s a few quick type-checkers React has for JavaScript’s built-in types:

// React.PropTypes.array,
// React.PropTypes.bool,
// React.PropTypes.func,
// React.PropTypes.number,
// React.PropTypes.object,
// React.PropTypes.string,
// React.PropTypes.symbol,
// We can also test that props are React and DOM types:

// React.PropTypes.node,
// React.PropTypes.element,
// And we have the ability to test more complex types, such as “shapes”, “instances of”, or “collections of”:

// React.PropTypes.instanceOf(Message),
// React.PropTypes.oneOf(['News', 'Photos']),
// React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number, React.PropTypes.instanceOf(Message)])
// React.PropTypes.arrayOf(React.PropTypes.number),
// React.PropTypes.shape({ color: React.PropTypes.string, fontSize: React.PropTypes.number })
// Use these PropTypes to produce errors and track down bugs. When used effectively, PropTypes will prevent your team from losing too much time in the debugging and documentation process, ensuring stricter standards and understanding of your growing library of Components.

// JavaScript front end UI library for creating interactive, stateful & reusable UI components for web as well as mobile applications.

// Q1: What is ReactJS? What are the advantages of using ReactJS and how it’s different from other JavaScript Frameworks? What are its limitations?

// React is an open source JavaScript front end UI library developed by Facebook  for creating interactive, stateful & reusable UI components for web and mobile app. It is used by Facebook, Instagram and many more web apps.

// ReactJS is used for handling view layer for web and mobile applications. One of React’s unique major points is that  it perform not only on the client side, but also can be rendered on server side, and they can work together inter-operably.

// Advantages of ReactJS:

// React uses virtual DOM which is JavaScript object. This improves application performance as JavaScript virtual DOM is faster than the regular DOM.

// React can be used on client and as well as server side too.
// Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaing larger apps.
// React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer.
// React’s JSX makes it easier to read the code of our component. It’s really very easy to see the layout. How components are interacting, plugged and combined with each other in app.
// Limitations of ReactJS:

// React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for development.
// React is using inline templating and JSX. This can seem awkward to some developers.
// The library of react  is too  large.
// Learning curve  for ReactJS may be steep.


// http://www.webdevelopmenthelp.net/wp-content/uploads/2016/12/ReactJs-Operations.jpg

// Q2: Please explain step by step approach on how to setup environment for ReactJS?

// Next we will discuss how to set up environment for React.js successful development.

// Q3: What is ReactJS-JSX? What are the advantages of using JSX? Explain basic code snippet of JSX with the help of a practical example?

// JSX (JavaScript XML), lets us to build DOM nodes with HTML-like syntax. JSX is a preprocessor step which adds XML syntax to JavaScript.

// Like XML, JSX tags have a tag name, attributes, and children JSX also has the same. If an attribute/property value is enclosed in quotes(“”), the value is said to be string. Otherwise, wrap the value in braces and the value is the enclosed JavaScript expression. We can represent JSX as <HelloWorld/>.

// JSX is completely optional and its not mandatory, we don’t need to use it in order to use React, but it has several advantages  and a lot of nice features in JSX.

// JSX is always faster as it performs optimization while compiling code to vanilla JavaScript.
// JSX is also type-safe, means it is strictly typed  and most of the errors can be caught during compilation of the JSX code to JavaScript.
// JSX always makes it easier and faster to write templates if we are familiar with HTML syntax.
// Our browsers does not understand JSX code natively, we need to convert it to JavaScript first which can be understand by our browsers. We have aplugin which handles including Babel 5’s in-browser ES6 and JSX transformer called browser.js.

// Babel will understand and recognize JSX code in <script type=”text/babel”></script> tags and transform/convert it to normal JavaScript code.

// In case of production we will need to pre-compile our JSX code into JS before deploying to production environment so that our app renders faster.

// Q4: What are Components in ReactJS? Explain the Component Lifecycle with the help of a diagram explaining each component method in detail. Also, Give an example of both Stateless and Stateful components with source code?

// React encourages the idea of reusable components. They are widgets or other parts of a layout (a form, a button, or anything that can be marked up using HTML) that you can reuse multiple times in your web application.

// ReactJS enables us to create components by invoking the React.createClass() method  features a render() method which is responsible for displaying the HTML code.

// When designing interfaces, we have to break down the individual design elements (buttons, form fields, layout components, etc.) into reusable components with well-defined interfaces. That way, the next time we need to build some UI, we can write much less code. This means faster development time, fewer bugs, and fewer bytes down the wire.

// http://www.webdevelopmenthelp.net/wp-content/uploads/2016/12/4.-Component-LifeCycle-Methods.jpg

// getDefaultProps and getInitialState, both methods are called only once while initially rendering of the component.
// componentWillMount : This method is executed just before rendering on both client and server side.
// ComponentDidMount: This method is executed after first rendering only on the client side. This is where AJAX requests and DOM or state updates usually occurs. This method is also used for integration with other JavaScript frameworks.
// ComponentWillReceiveProps: This method is invoked as soon as the props are updated before another render is called.
// ShouldComponentUpdate: This method  should return true or false value. This  determines whether if a component will be updated or not. Default it is set to true.
// ComponentWillUpdate: This method  is called just before rendering.
// ComponentDidUpdate: This method is called just after rendering.
// ComponentWillUnmount: This method is called after the component is unmounted from the DOM.

// Stateless and Stateful components

// Stateless: When a component is “stateless”, it calculates state is calculated internally but it directly  never mutates it. With the same inputs, it will always produce the same output. It means it has no knowledge of the past, current or future state changes.


// var React = require('react');
// var Header = React.createClass({
//     render: function() {
//         return( <img src={this.props.imageSource} />   ); }
// });
// ReactDOM.render(<Header imageSource="myImage.png"/>, document.body);
// 1
// 2
// 3
// 4
// 5
// 6
// var React = require('react');
// var Header = React.createClass({
//     render: function() {
//         return( <img src={this.props.imageSource} />   ); }
// });
// ReactDOM.render(<Header imageSource="myImage.png"/>, document.body);
// Stateful : When a component is “stateful”, it is a central point that stores every information in memory about the app/component’s state, do has the ability to change it. It has knowledge of past, current and potential future state changes.
// Stateful component  change the state, using this.setState method.


// var React = require('react');
// var Header = React.createClass({
//     getInitialState: function() {
//         return { imageSource: "header.png" };
//     },

//     changeImage: function() {
//         this.setState({imageSource: "changeheader.png"});
//     },
//     render: function() {
//         return(
//             <img src={this.state.imageSource} onClick={this.changeImage.bind(this)} />
//         );
//     }
// });

// module.exports = Header;
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// var React = require('react');
// var Header = React.createClass({
//     getInitialState: function() {
//         return { imageSource: "header.png" };
//     },
 
//     changeImage: function() {
//         this.setState({imageSource: "changeheader.png"});
//     },
//     render: function() {
//         return(
//             <img src={this.state.imageSource} onClick={this.changeImage.bind(this)} />
//         );
//     }
// });
 
// module.exports = Header;

// Q5: What are State and Props in ReactJS? What is the difference between the two? Give a proper example of using State and Props to elaborate the concept with complete source code?

// State is the place where the data comes from. We must follow approach  to make our state as simple as possible and minimize number of stateful components.

// For example, ten components that need data from the state, we should create one container component that will keep the state for all of them.

// The state starts with a default value and when a Component mounts and then suffers from mutations in time (basically generated from user events).

// A Component manages its own state internally, but—besides setting an initial state—has no business fiddling with the stateof its children. You could say the state is private.

// JavaScript

// import React from 'react';
// import ReactDOM from 'react-dom';

// var StepCounter = React.createClass({
//  getInitialState: function() {
//          return {counter: this.props.initialCount};
// },

//   handleClick: function() {
//   this.setState({counter: this.state. counter + 1});
//  },

//   render: function() {
//   return <div onClick={this.handleClick}>{this.state.counter }</div>;
//  }
// });

// ReactDOM.render(< StepCounter initialCount={7}/>, document.getElementById('content'));
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// import React from 'react';
// import ReactDOM from 'react-dom';
 
// var StepCounter = React.createClass({
//  getInitialState: function() {
//          return {counter: this.props.initialCount};
// },
 
//   handleClick: function() {
//   this.setState({counter: this.state. counter + 1});
//  },
 
//   render: function() {
//   return <div onClick={this.handleClick}>{this.state.counter }</div>;
//  }
// });
 
// ReactDOM.render(< StepCounter initialCount={7}/>, document.getElementById('content'));

// Props: They are immutable, this is why container component should define state that can be updated and changed. It is used to pass data down from our view-controller(our top level component).

// When we need immutable data in our component we can just add props to reactDOM.render() function.


// import React from 'react';
// import ReactDOM from 'react-dom';

// class PropsApp extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>{this.props.headerProperty}</h1>
//             <h2>{this.props.contentProperty}</h2>
//          </div>
//       );
//    }
//  }

// ReactDOM.render(<PropsApp headerProperty = "Header from props..." contentProperty = "Content
//    from props..."/>, document.getElementById('app'));
// }
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// import React from 'react';
// import ReactDOM from 'react-dom';
 
// class PropsApp extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>{this.props.headerProperty}</h1>
//             <h2>{this.props.contentProperty}</h2>
//          </div>
//       );
//    }
//  }
 
// ReactDOM.render(<PropsApp headerProperty = "Header from props..." contentProperty = "Content
//    from props..."/>, document.getElementById('app'));
// }
// Props	State
// Passes in from parent component.<PropsApp headerProperty = “Header from props…” contentProperty = “Content&nbsp;from props…”/>This properties are being read by  PropsApp component and sent to ReactDOM View.	Created inside component by getInitialState.this.state reads the property of component and update its value it by this.setState() method and then returns to ReactDOM view.State is private within the component.

// Q6: How to apply validation on Props in ReactJS? Apply validation in previously developed example in above question?

// When the application is running in development mode, React will automatically check  for all props that we set on components to make sure they must right correct and right data type.

// For instance, if we say a component has a Message prop which is a string and is required, React will automatically check and warn  if it gets invalid string or number or boolean objects. For performance reasons this check is only done on dev environments  and on production it is disabled so that rendering of objects is done in fast manner .

// Warning messages are generated   easily  using a set of predefined options such as:

// React.PropTypes.string
// React.PropTypes.number
// React.PropTypes.func
// React.PropTypes.node
// React.PropTypes.bool

// import ReactDOM from 'react-dom';
 
// class PropsValidation extends React.Component {
//     render() {
//         return (  <div>
//                 <h1>Propert Validation in ReactJS to validate Element Property type</h1>
//                 {this.props.children} </div>
//         );
//     }
// }
 
// PropsValidation.propTypes = {
//     children: React.PropTypes.node,
// };
 
// export default PropsValidation;
// Execute the above example, when wrong prop type is being detected it generate error message in console, try using React.PropTypes.string in the code above and we will  see that our page still loads fine, but an error message  in console.

// Q7: How to use Forms in ReactJS? Give an example of using Forms in ReactJS by developing a User Registration Form?

// In React’s virtual DOM, HTML Input element presents an interesting problem. With the others DOM environment, we can  render the input or textarea and thus allows the browser maintain its   state that is (its value). we can then get and set the value implicitly with the DOM API.

// In HTML, form elements such as <input>, <textarea>, and <select> itself  maintain their own state and update its state  based on the input provided by user .In React, components’ mutable state is handled by the state property  and is only updated by setState().

// HTML <input> and <textarea> components use the value attribute.
// HTML <input> checkbox and radio components, checked attribute is used.
// <option> (within <select>) components, selected attribute is used for select box.



// var AccountFields = React.createClass({

//   render: function() {
//     return ( <div>
//      <div> <label>Name</label> </div>
//      <div> <input type="text"
//              ref="name"
//              defaultValue='Imran' /></div>

//       <div> <label>Password</label></div>
//       <div><input type="password"
//              ref="password"
//              defaultValue='' /></div>
//       <div> <label>Email</label></div>
//       <div><input type="email"
//              ref="email"
//              defaultValue='test.example.com' /></div>
//       <button onClick={ this.saveAndContinue }>Save and Continue</button></div>
//     )
//   },

//   saveAndContinue: function(e) {

//   console.log(this.refs);
//   }
// });

// ReactDOM.render(  <AccountFields />,   document.getElementById('content') );
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// var AccountFields = React.createClass({
 
//   render: function() {
//     return ( <div>
//      <div> <label>Name</label> </div>
//      <div> <input type="text"
//              ref="name"
//              defaultValue='Imran' /></div>
 
//       <div> <label>Password</label></div>
//       <div><input type="password"
//              ref="password"
//              defaultValue='' /></div>
//       <div> <label>Email</label></div>
//       <div><input type="email"
//              ref="email"
//              defaultValue='test.example.com' /></div>
//       <button onClick={ this.saveAndContinue }>Save and Continue</button></div>
//     )
//   },
 
//   saveAndContinue: function(e) {
 
//   console.log(this.refs);
//   }
// });
 
// ReactDOM.render(  <AccountFields />,   document.getElementById('content') );

// Q8: How to use Events in ReactJS? Give an example of using events?

// React identifies every events so that it must  have common and consistent behavior  across all the browsers. Normally, in normal JavaScript or other frameworks, the onchange event is triggered after we have typed something into a Textfield and then “exited out of it”. In  ReactJS we cannot do it in this way.

// The explanation is typical and  non-trivial:

// *”<input type=”text” value=”dataValue”> renders an input textbox initialized with the value, “dataValue”.

// When the user changes the input in text field, the node’s value property will update and change. However, node.getAttribute(‘value’) will still return the value used at initialization time that is dataValue.

// Form Events:

// onChange: onChange event  watches input changes and update state accordingly.
// onInput: It is triggered on input data
// onSubmit: It is triggered on submit button.
// Mouse Events:

// onClick: OnClick of any components event is triggered on.
// onDoubleClick: onDoubleClick of any components event is triggered on.
// onMouseMove: onMouseMove of any components, panel event is triggered on.
// onMouseOver: onMouseOver of any components, panel, divs event is triggered on.

// Touch Events:

// onTouchCancel: This event is for canceling an events.
// onTouchEnd: Time Duration attached to touch of a screen.
// onTouchMove: Move during touch device .
// onTouchStart: On touching a device event is generated.

// import ReactDOM from 'react-dom';
 
// var StepCounter = React.createClass({
//                     getInitialState: function() { return {counter: this.props.initialCounter }; },
//                     handleClick: function() {             
//                         this.setState({counter: this.state.counter + 1});  },
//                render: function() {
//                return <div onClick={this.handleClick}> OnClick Event, Click Here: {this.state.counter }</div>;
//             }
// });
 
// ReactDOM.render(< StepCounter initialCounter={7}/>, document.getElementById('content'));

// Q9: How to set up routing in ReactJS. Explain with the help of step by step approach?

// Routing is the  key features of web applications (and even other platforms) could not be left out in React. We can develop full featured single page applications (SPA) with React, one of the key feature is routing.

// We use library called React-Router for routing in reactJS. React goodness is  to keep things as simple as possible and that is why the core library exactly does what React is about, components. Routing, DOM rendering and other logics are abstracted to a different library.

// We need to install library by command to initialization router


// $ user@administrator:/var/www/html/reactjs$  npm install react react-dom react-router –save
// 1
// $ user@administrator:/var/www/html/reactjs$  npm install react react-dom react-router –save
// After Installing library we need to write following below code to verify routing is working in desired manner.

// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './RouterApp.jsx'
// ReactDOM.render(<RouterApp />, document.getElementById('app'))

// File: RouterApp.jsx
// import React, { Component } from 'react'
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

// class RouterApp extends Component {
//   render() {
//     return (
//       <Router history={hashHistory}>
//         <Route path='/' component={Home} />
//         <Route path='/address' component={Address} />
//                      <Route path='/country' component={Country} />
//       </Router>
//     )
//   }
// }

// const Home = () => <h1>Hello from Home!, you can call "/address", "/country" to verify routing</h1>
// const Address = () => <h1>We are located at 555 MG Street, Sector 15.</h1>
// const Country = () => <h1>We are located in India.</h1>
// export default  RouterApp
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// File: RouterApp.jsx
// import React, { Component } from 'react'
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
 
// class RouterApp extends Component {
//   render() {
//     return (
//       <Router history={hashHistory}>
//         <Route path='/' component={Home} />
//         <Route path='/address' component={Address} />
//                      <Route path='/country' component={Country} />
//       </Router>
//     )
//   }
// }
 
// const Home = () => <h1>Hello from Home!, you can call "/address", "/country" to verify routing</h1>
// const Address = () => <h1>We are located at 555 MG Street, Sector 15.</h1>
// const Country = () => <h1>We are located in India.</h1>
// export default  RouterApp


// Q10: What is Flux concept in ReactJS? Explain various flux elements including Action, Dispatcher, Store and View. Give a simple practical example of installing and using Flux in an application?

// Flux is the architecture of an application that Facebook uses for developing client-side web applications. Facebook uses internally when working with React. It is not a framework or a library. This is simply a new technique that complements React and the concept of Unidirectional Data Flow.

// Facebook dispatcher library is a sort of global pub/sub handler technique which broadcasts payloads to registered callbacks.

// Flux can be better explained by defining its individual components:

// Actions – They are helper methods that facilitate passing data to the Dispatcher.
// Dispatcher – It is Central hub of app, it receives actions and broadcasts payloads to registered callbacks.
// Stores – It is said to be Containers for application state & logic that have callbacks registered to the dispatcher. Every store maintains particular state and it will update  when it is needed. It wakes up on a relevant dispatch to retrieve the requested data. It is accomplished by registering with the dispatcher  when constructed. They are  similar to  model in a traditional MVC (Model View Controller), but they manage the state of many objects —  it does not represent a single record of data like ORM models do.
// Controller Views – React Components  grabs the state from Stores and pass it down through props to child components to view to render application.
// In this Web Development Tutorial, first we have to install all the steps mentioned in Question 2 i.e. step by step installation of react.

// then, we need to install flux:


// user@administrator:/var/www/html/reactjs$ npm install --save react-redux
// 1
// user@administrator:/var/www/html/reactjs$ npm install --save react-redux
// Flux Overview – How it works?

// Flux encourage the design in  of a uni-directional data flow.

// All user interactions within a view call an action creator, which causes an action event to be emitted from a singleton dispatcher.

// The dispatcher is a single-point-of-emission for all actions in a flux application. The action is sent from the dispatcher to stores, which update themselves in response to the action.

// The flow doesn’t change significantly for additional stores or views. The dispatcher simply sends every action to all the stores in the application.

// Each store is responsible for a domain of the application, and only update themselves in response to actions.

// When a store updates, it emits a change event. In many React applications, special views (known sometimes as “controller-views”) are responsible for watching for this change event, reading the stores’ new data, and passing that data through properties to child views.

// It completely avoids performance issues , complex bugs that can rise while trying to watch for specific property changes on models and  views only slightly.

// http://www.webdevelopmenthelp.net/wp-content/uploads/2016/12/Flux-Architecture.jpg

// Question: What is ReactJS?
// React is front end library developed by Facebook.


// Question: Why ReactJS is used?
// React is used to handle the view part of Mobile application and Web application.


// Question: Does ReactJS use HTML?
// No, It uses JSX which is simiar to HTM.


// Question: When ReactJS released?
// March 2013


// Question: What is current stable version of ReactJS?
// Version: 15.5 
// Release on: April 7, 2017

// Question: What are the life Cycle of ReactJS?
// Initialization
// State/Property Updates
// Destruction



// Question: What are the feature of ReactJS?
// JSX: JSX is JavaScript syntax extension.
// Components : React is all about components.
// One direction flow: React implements one way data flow which makes it easy to reason about your app

// Question: What are the Advantages of ReactJS?
// React uses virtual DOM which is JavaScript object. This will improve apps performance
// It can be used on client and server side
// Component and Data patterns improve readability.
// Can be used with other framework also.

// Question: How to embed two components in One component?
// import React from 'react';
// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <Header/>
//             <Content/>
//          </div>
//       );
//    }
// }

// class Header extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Header</h1>
//          </div>
//       );
//    }
// }

// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <h2>Content</h2>
//             <p>The content text!!!</p>
//          </div>
//       );
//    }
// }

// export default App;

// an amazing open source JavaScript front end UI library for creating interactive, stateful &amp; reusable UI components for  web as well as mobile applications.

// Be prepared to explain the difference between state and props. Props are immutable, a component's state can't be changed from outside that component, etc.

// What happens when you call setState?

// The first thing React will do when setState is called is merge the object you passed into setState into the current state of the component. This will kick off a process called reconciliation. The end goal of reconciliation is to, in the most efficient way possible, update the UI based on this new state. To do this, React will construct a new tree of React elements (which you can think of as an object representation of your UI). Once it has this tree, in order to figure out how the UI should change in response to the new state, React will diff this new tree against the previous element tree. By doing this, React will then know the exact changes which occurred, and by knowing exactly what changes occurred, will able to minimize its footprint on the UI by only making updates where absolutely necessary.

// What’s the difference between an Element and a Component in React?

// Simply put, a React element describes what you want to see on the screen. Not so simply put, a React element is an object representation of some UI.

// A React component is a function or a class which optionally accepts input and returns a React element (typically via JSX which gets transpiled to a createElement invocation).

// When would you use a Class Component over a Functional Component?

// If your component has state or a lifecycle method(s), use a Class component. Otherwise, use a Functional component.


// What are refs in React and why are they important?

// Refs are an escape hatch which allow you to get direct access to a DOM element or an instance of a component. In order to use them you add a ref attribute to your component whose value is a callback function which will receive the underlying DOM element or the mounted instance of the component as its first argument.

// class UnControlledForm extends Component {
//   handleSubmit = () => {
//     console.log("Input Value: ", this.input.value)
//   }
//   render () {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type='text'
//           ref={(input) => this.input = input} />
//         <button type='submit'>Submit</button>
//       </form>
//     )
//   }
// }
// Above notice that our input field has a ref attribute whose value is a function. That function receives the actual DOM element of input which we then put on the instance in order to have access to it inside of the handleSubmit function.

// It’s often misconstrued that you need to use a class component in order to use refs, but refs can also be used with functional components by leveraging closures in JavaScript.

// function CustomForm ({handleSubmit}) {
//   let inputElement
//   return (
//     <form onSubmit={() => handleSubmit(inputElement.value)}>
//       <input
//         type='text'
//         ref={(input) => inputElement = input} />
//       <button type='submit'>Submit</button>
//     </form>
//   )
// }


// What are keys in React and why are they important?

// Keys are what help React keep track of what items have changed, been added, or been removed from a list.

// render () {
//   return (
//     <ul>
//       {this.state.todoItems.map(({task, uid}) => {
//         return <li key={uid}>{task}</li>
//       })}
//     </ul>
//   )
// }

// It’s important that each key be unique among siblings. We’ve talked a few times already about reconciliation and part of this reconciliation process is performing a diff of a new element tree with the most previous one. Keys make this process more efficient when dealing with lists because React can use the key on a child element to quickly know if an element is new or if it was just moved when comparing trees. And not only do keys make this process more efficient, but without keys, React can’t know which local state corresponds to which item on move. So never neglect keys when mapping.


// If you created a React element like Twitter below, what would the component definition of Twitter look like?

// <Twitter username='tylermcginnis33'>
//   {(user) => user === null
//     ? <Loading />
//     : <Badge info={user} />}
// </Twitter>
// import React, { Component, PropTypes } from 'react'
// import fetchUser from 'twitter'
// // fetchUser take in a username returns a promise
// // which will resolve with that username's data.

// class Twitter extends Component {
//   // finish this
// }

// If you’re not familiar with the render callback pattern, this will look a little strange. In this pattern, a component receives a function as its child. Take notice of what’s inside the opening and closing <Twitter> tags above. Instead of another component as you’ve probably seen before, the Twitter component’s child is a function. What this means is that in the implementation of the Twitter component, we’ll need to treat props.children as a function.

// Here’s how I went about solving it.
// import React, { Component, PropTypes } from 'react'
// import fetchUser from 'twitter'

// class Twitter extends Component {
//   state = {
//     user: null,
//   }
//   static propTypes = {
//     username: PropTypes.string.isRequired,
//   }
//   componentDidMount () {
//     fetchUser(this.props.username)
//       .then((user) => this.setState({user}))
//   }
//   render () {
//     return this.props.children(this.state.user)
//   }
// }

// Notice that, just as I mentioned above, I treat props.children as a function by invoking it and passing it the user.

// What’s great about this pattern is that we’ve decoupled our parent component from our child component. The parent component manages the state and the consumer of the parent component can decide in which way they’d like to apply the arguments they receive from the parent to their UI.

// To demonstrate this, let’s say in another file we want to render a Profile instead of a Badge, because we’re using the render callback pattern, we can easily swap around the UI without changing our implementation of the parent (Twitter) component.

// <Twitter username='tylermcginnis33'>
//   {(user) => user === null
//     ? <Loading />
//     : <Profile info={user} />}
// </Twitter>

// What is the difference between a controlled component and an uncontrolled component?

// A large part of React is this idea of having components control and manage their own state. What happens when we throw native HTML form elements (input, select, textarea, etc) into the mix? Should we have React be the “single source of truth” like we’re used to doing with React or should we allow that form data to live in the DOM like we’re used to typically doing with HTML form elements? These two questions are at the heart of controlled vs uncontrolled components.

// A controlled component is a component where React is in control and is the single source of truth for the form data. As you can see below, username doesn’t live in the DOM but instead lives in our component state. Whenever we want to update username, we call setState as we’re used to.

// class ControlledForm extends Component {
//   state = {
//     username: ''
//   }
//   updateUsername = (e) => {
//     this.setState({
//       username: e.target.value,
//     })
//   }
//   handleSubmit = () => {}
//   render () {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type='text'
//           value={this.state.username}
//           onChange={this.updateUsername} />
//         <button type='submit'>Submit</button>
//       </form>
//     )
//   }
// }

// An uncontrolled component is where your form data is handled by the DOM, instead of inside your React component.

// You use refs to accomplish this.

// class UnControlledForm extends Component {
//   handleSubmit = () => {
//     console.log("Input Value: ", this.input.value)
//   }
//   render () {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type='text'
//           ref={(input) => this.input = input} />
//         <button type='submit'>Submit</button>
//       </form>
//     )
//   }
// }
// Though uncontrolled components are typically easier to implement since you just grab the value from the DOM using refs, it’s typically recommended that you favor controlled components over uncontrolled components. The main reasons for this are that controlled components support instant field validation, allow you to conditionally disable/enable buttons, enforce input formats, and are more “the React way”.

// n which lifecycle event do you make AJAX requests and why?

// AJAX requests should go in the componentDidMount lifecycle event.

// There are a few reasons for this,

// Fiber, the next implementation of React’s reconciliation algorithm, will have the ability to start and stop rendering as needed for performance benefits. One of the trade-offs of this is that componentWillMount, the other lifecycle event where it might make sense to make an AJAX request, will be “non-deterministic”. What this means is that React may start calling componentWillMount at various times whenever it feels like it needs to. This would obviously be a bad formula for AJAX requests.

// You can’t guarantee the AJAX request won’t resolve before the component mounts. If it did, that would mean that you’d be trying to setState on an unmounted component, which not only won’t work, but React will yell at you for. Doing AJAX in componentDidMount will guarantee that there’s a component to update.


// What does shouldComponentUpdate do and why is it important?

// Above we talked about reconciliation and what React does when setState is called. What shouldComponentUpdate does is it’s a lifecycle method that allows us to opt out of this reconciliation process for certain components (and their child components). Why would we ever want to do this? As mentioned above, “The end goal of reconciliation is to, in the most efficient way possible, update the UI based on new state”. If we know that a certain section of our UI isn’t going to change, there’s no reason to have React go through the trouble of trying to figure out if it should. By returning false from shouldComponentUpdate, React will assume that the current component, and all its child components, will stay the same as they currently are.

// How do you tell React to build in Production mode and what will that do?

// Typically you’d use Webpack’s DefinePlugin method to set NODE_ENV to production. This will strip out things like propType validation and extra warnings. On top of that, it’s also a good idea to minify your code because React uses Uglify’s dead-code elimination to strip out development only code and comments, which will drastically reduce the size of your bundle.


// Why would you use React.Children.map(props.children, () => ) instead of props.children.map(() => )

// It’s not guaranteed that props.children will be an array.

// Take this code for example,

// <Parent>
//   <h1>Welcome.</h1>
// </Parent>
// Inside of Parent if we were to try to map over children using props.children.map it would throw an error because props.children is an object, not an array.

// React only makes props.children an array if there are more than one child elements, like this
// <Parent>
//   <h1>Welcome.</h1>
//   <h2>props.children will now be an array</h2>
// </Parent>
// This is why you want to favor React.Children.map because its implemention takes into account that props.children may be an array or an object.

// Describe how events are handled in React.

// In order to solve cross browser compatibility issues, your event handlers in React will be passed instances of SyntheticEvent, which is React’s cross-browser wrapper around the browser’s native event. These synthetic events have the same interface as native events you’re used to, except they work identically across all browsers.

// What’s mildly interesting is that React doesn’t actually attach events to the child nodes themselves. React will listen to all events at the top level using a single event listener. This is good for performance and it also means that React doesn’t need to worry about keeping track of event listeners when updating the DOM.

// What is the difference between createElement and cloneElement?

// createElement is what JSX gets transpiled to and is what React uses to create React Elements (object representations of some UI). cloneElement is used in order to clone an element and pass it new props. They nailed the naming on these two 🙂

// What is the second argument that can optionally be passed to setState and what is its purpose?

// A callback function which will be invoked when setState has finished and the component is re-rendered.

// Something that’s not spoken of a lot is that setState is asynchronous, which is why it takes in a second callback function. Typically it’s best to use another lifecycle method rather than relying on this callback function, but it’s good to know it exists.

// this.setState(
//   { username: 'tylermcginnis33' },
//   () => console.log('setState has finished and the component has re-rendered.')
// )

// What is wrong with this code?

// this.setState((prevState, props) => {
//   return {
//     streak: prevState.streak + props.count
//   }
// })
// Nothing is wrong with it 🙂. It’s rarely used and not well known, but you can also pass a function to setState that receives the previous state and props and returns a new state, just as we’re doing above. And not only is nothing wrong with it, but it’s also actively recommended if you’re setting state based on previous state.



// https://www.quora.com/How-do-I-prepare-for-ReactJS-technical-interview

// Basic question about React:

// Different ways of defining an Element? (ES2015 class, React.createClass, stateless function — render only)
// What are the differences between state and props?
// Explain component lifecycle (componentWillMount, componentDidMount, componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate, componentWillUnmount); when is each of these functions called? Everything explained on this docs page: Component Specs and Lifecycle | React
// How to optimize React component to render it less often? (using shouldComponentUpdate to determine if any relevant data changed)
// What are best practices? (for example why not to use getInitialState, try to find others and know how to explain them)
// As we all know, React is rarely used by itself, so expect some questions about data layer, most commonly an implementation of flux:

// What is flux? How it’s different from the more traditional MVC pattern?
// What is your preferred flux implementation? Why? (Hopefully your answer is Redux, as mostly everyone seems to be using it)
// How does Redux data flow work? (view, action creator, reducer, view — you should know and explain responsibilities of each; also how state is represented — state tree)
// Depending on what technologies the company is using, you might also want to take a look at Relay and GraphQL, although those are a bit more advanced and only vaguely related to React interview. But regardless, those have some cool concepts worth learning.

// You can also expect some basic JavaScript questions and, based on the job position, even CSS and HTML. Based on current React ecosystem, I wouldn’t be surprised to see some ES2015+ questions.

// It will also help to know if they plan to test your coding skills, so you can prepare ahead by trying it yourself first, depending on how you handle these situations, i.e. how nervous you get and how do you perform when in this state. 
// I wouldn’t risk it by having more than a basic boilerplate prepared or even getting familiar with one of those React starter kits available online. It’s important to get this step done ASAP and get to coding, it’s very likely to have a tight deadline. 
// Whatever you choose as project base, you should learn how the project is structured and why things are where they are.

// For the task itself, it’s very common to test the knowledge of building a simple single page app. One example would be a todo list options to add new item, edit, delete, view details, filter by date and store all changes to the server via REST API. It’s a simple example, but will put to test knowledge of handling CRUD operations, routing, storing to server.
// Even without coding interview, this would be a great practice to really brush up on your skills and ace that interview.

// What are the limitations of ReactJS?

// What are the features of ReactJS?

// What is the difference between Virtual DOM and DOM?

// Can we nest JSX elements in other JSX elements?

// WHAT IS REACTJS? 

// ReactJS is an Open Source JavaScript library or web framework. It is developed and released in March 2013 by Facebook for creating more interactive and re usable components or user interfaces for the web and mobile applications. Initially it was used on Facebook and Instagram later it's been using many more web apps. 

// Pursue react js online course right away from your location. 

// REACTJS INTERVIEW QUESTIONS AND ANSWERS FOR FRESHERS ARE AS FOLLOWS

// 1. What are advantages of ReactJS?
//   i. ReactJS is simple and declarative.

//   ii. Useful to create composable components in less time.

//   iii. It can be used on client side and server side as well.

//  iv. It uses JavaScript virtual DOM which faster than DOM and improves app performance.

// v. Its components, Data patterns enhances readability of applications.

// vi. It improves creating and maintenance of large applications.  4

// 2. What are the limitations of ReactJS?
//  i. ReactJS only focuses on view layer I.e. User interface of the web and mobile applications so still developers needs more technologies to design over all development.

//  ii. It uses inline templating and JavaScript extension this would be difficult for many developers.

//  iii. React JavaScript library is excessive.

// 3. What are the features of ReactJS?
//  i. One way data flow

//  ii. Virtual Document Object Model

//  iii. JavaScript Extension(JSX)

//  iv. React native

//  v. Architecture beyond HTML
 
//  4. What is JSX?
// JSX is an embeddable XML-like syntax in a simple descriptive manner it can be expresses as a syntax extension for JavaScript language. It embeds huge sets of HTML templates inside of JavaScript code.

// 5. Why browsers can not read JSX?
// JSX code  cannot be read by any of the browsers because it embeds XML-like and HTML templates inside the JavaScript code. It can not readable by the browsers unless it is converted into original JavaScript format. There are tools available to convert JSX into original JavaScript format. Ex: Web pack, Babel. 

// Learn react js online course from best online courses training institute 

// 6. What is the difference between Virtual DOM and DOM?
// DOM stands for Document Object Model. It is used to represent structures documents in objects. The main disadvantage of DOM is it can not be useful for creating dynamic user interfaces due to heavy weighable parts.  

// Virtual DOM creates a abstract version of DOM and it is works faster than working directly with DOM.

// 7. What is Prop?
// ReactJs components get customized with some parameters while of their creation. Those creation parameters are called Props.

// 8. What is State in ReactJS?
// State is a place from where the required comes. The main considerable thing while dealing with state is we need to keep it as simple as possible to minimize number of stateful components.

// 9. What is syntax of JSX?
// The general usage or syntax of JSX as follows 

// Syntax: React.createElement(component, props, ...children) 

// Ex:       React.createElement(  

// MyButton,  

// {color: 'red', shadowSize: 4},  

// 'Click Here'  

// )


// 10. Can we nest JSX elements in other JSX elements?
// Yes, we can nest JSX elements in other JSX elements as like HTML elements. 


// To make a child component update its parent's state, the first step is something that you've 
// seen before: you must define a state-changing function on the parent.

// variable: the  value stored in memory; pointed to by using a identifier
// Number, string
// boolean
// null
// ndefined
// symbol
// object

// primitive are immutable; objects r mutable

// each object property has 3 attributes:
// configurable
// enumerable
// writable

// accessor properties- gett & sett

// object creation:
// 1) literal
// 2) constructor: using new
// 3) constructor pattern : inheritance
// 	fucntion fruit(name, color, taste)
// 	{
// 	this.name=
// 	...
// 	}
	
// 	var mango= new fruit(.......)
// 	we can also add more properties to different objects
// 	an inherited property is defined in the object's prototype property
// 	mango.prototype.name="";
	
// 	an own property is defined directly on object
	
// 	someobject.somefn=function(){}
	
// 4) prototype pattern for creating objcets

// 	function Fruit()
// 	{
// 	}
// 	Fruit.prototype.name="name";
// 	Fruit.prototype.showName=function()
// 	{
// 	}
	
// 	var mango = new Fruit();//all the values will come to mango
// 	mango.name will return "name"
// 	//can add new properties
	
	
	



// patterns: solutions for reeated & common tasks


// for accessing properties: dot & bracket notation

// inherited properties are inherited from objects prototype object

// in operator
// to ceck if a property exists on an object
// var mango={name:"",}
// console.log("name" in mango)

// ​// Prints true because the mango object inherited the toString method from Object.prototype. ​
// console.log("toString" in mango);  // true

// each object will have its own prototype property (which is an object) and each child object will
// inherit prototype from parent

// *hasOwnProperty
// mango.hasOwnProperty("name");//true
// mango.hasOwnProperty("toString");//false

// accessing property names:
// using for in/for

// properties inherited from Object.prototype are not enumerable;but other parent properties are enummerable
