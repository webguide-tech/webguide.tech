import React, {Component} from 'react';
import TopActionBar from '../common/topnav/TopActionBar';

export default class Keys extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div>
            <TopActionBar heading={'React Keys'} />
            <ul>
                <li>
                    
                </li>
            </ul>
        </div>)
    }
}


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

// React keys are useful when working with dynamically created components or when your lists are altered by users. Setting the key value will keep your components uniquely identified after the change.

// Using Keys
// Let's dynamically create Content elements with unique index (i). The map function will create three elements from our data array. Since key value needs to be unique for every element, we will assign i as a key for each created element.

// If we add or remove some elements in the future or change the order of the dynamically created elements, React will use the key values to keep track of each element.

