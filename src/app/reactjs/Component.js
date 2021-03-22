import React, { Component } from 'react';
import TopActionBar from '../common/topnav/TopActionBar';

export default class Components extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <TopActionBar heading={'React Component'} />
            <ul>
                <li>
                    React is all about components. You need to think of everything as a component. This will help you to maintain the code when working on larger scale projects.
                </li>
                <li>
                    Two types of components
                    <ul>
                        <li>
                            Class components
                            <ul>
                                <li>
                                    {
                                        <code><pre>
                                            {`function Welcome(props) {
                                            return <div>Welcome!! {props.name}</div>
                                        }`}</pre>
                                        </code>
                                    }
                                </li>
                            </ul>
                        </li>
                        <li>
                            Function components
                            <ul>
                                <li>
                                    {
                                        <code>
                                            {`Class Welcome extends React.Component {`}<br/>
                                                {`render() {
                                                    return(<div>Welcome!! {this.props.name}</div>)
                                                }
                                            }`}
                                        </code>
                                    }
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Stateful components
                        </li>
                        <li>
                            Stateless components
                        </li>
                    </ul>
                </li>
            </ul>
        </div>)
    }
}

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
