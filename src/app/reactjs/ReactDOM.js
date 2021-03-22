import React, {Component} from 'react';
import TopActionBar from '../common/topnav/TopActionBar';

export default class ReactDOM extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div>
            <TopActionBar heading={'ReactDOM'} />
            <ul>
                <li>
                    
                </li>
            </ul>
        </div>)
    }
}

// ##ReactDOM##

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );
// - displays a heading 'Hello, world!' on the page


//     Applications built with just React usually have a single root DOM node
//     <div id="root"></div>
//     To render a React element into a root DOM node, pass both to ReactDOM.render():
    
//     const element = <h1>Hello, world</h1>;
//     ReactDOM.render(element, document.getElementById('root'));

//     It displays “Hello, world” on the page.