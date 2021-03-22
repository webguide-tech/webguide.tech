import React, {Component} from 'react';
import TopActionBar from '../common/topnav/TopActionBar';

export default class Props extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div>
            <TopActionBar heading={'React Props'} />
            <ul>
                <li>

                </li>
            </ul>
        </div>)
    }
}


// ## Props ##
// - Props are read only
// - All React components must act like pure functions with respect to their props
// - Whether you declare a component as a function or a class, it must never modify its own props
