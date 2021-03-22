import React, {Component} from 'react';
import TopActionBar from '../common/topnav/TopActionBar';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div>
            <TopActionBar heading={'Error boundary'} />
            <ul>
                <li>
                    
                </li>
            </ul>
        </div>)
    }
}