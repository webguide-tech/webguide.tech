import React, {Component} from 'react';
import TopActionBar from '../common/topnav/TopActionBar';

export default class BestPractices extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div>
            <TopActionBar heading={'React Best Practices'} />
            <ul>
                <li>
                    Composition
                    <ul>
                        <li>Build small reusable components</li>
                    </ul>
                </li>
                <li>
                    Single Responsibility principle
                    <ul>
                        <li>
                            a component should ideally only do one thing - one component should only be responsible for one functionality
                        </li>
                        <li>
                            If some of your components have with more than one functionality, you should refactor and create new component for every functionality
                        </li>
                        <li>
                            If a component ends up growing, it should be decomposed into smaller subcomponents
                        </li>
                    </ul>
                </li>
                <li>
                    DRY - Don't Repeat Yourself
                    <ul>
                        <li>The state should be avoided as much as possible</li>
                        <li>State is only needed when there's a changing data which needs rerender of DOM</li>
                        <li>
                            Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand
                        </li>
                    </ul>
                </li>
                <li>
                    Component name should be capitalized
                </li>
                <li>
                    Always use Controlled conmponents for implementing form elements
                    <ul>
                        <li>
                            Avoid the usage of uncontrolled components/refs as much as possible
                        </li>
                    </ul>
                </li>
                <li>
                    Use keys whenever an array of similar elements is rendered
                </li>
                <li>
                    Follow unidirectional data flow - Top down approach - Flux pattern
                    <ul>
                        <li>
                            centralize the state and pass it down the component tree as props
                        </li>
                    </ul>
                </li>
                <li>
                    Lift state up
                    <ul>
                        <li> Whenever you have group of components that needs the same data, you should set container element around them that will hold the state </li>
                        <li>Lift the state up to near common ancestor</li>
                    </ul>
                </li>
                <li> 
                    PropTypes and Default Props
                </li>
                <li>
                    Do not use this.state except inside constructor()
                    <ul>
                        <li>
                            Always use this.setState() to update the state
                        </li>
                    </ul>
                </li>
            </ul>
        </div>)
    }
}

// * In JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false
// Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods. For instance componentDidUpdate will still be called.

// ## Composition ##
//     - props.children lets other components pass arbitrary children to them by nesting the JSX:
//     -  components may accept arbitrary props, including primitive values, React elements, or functions


// RENDER - Most of the app's logic should be moved inside render method. You should try to minimize logic in component lifecycle methods and move that
// logic in render method. The less state and props you are using, the cleaner your code will be. You should always make your state as simple as possible. 
// If you need to calculate something from state or props you can do it inside render method.


// HIGHER ORDER COMPONENTS (HOC) - Former React versions were offering mixins for handling reusable functionalities. Since mixins are now deprecated, 
// one of the solutions is to use higher order components.




