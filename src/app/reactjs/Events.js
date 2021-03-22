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
