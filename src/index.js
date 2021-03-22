import React from 'react';
import ReactDOM from 'react-dom';
import Main from './app/home/MainContainer';
import '../src/styles/index.scss'
import { Route, HashRouter } from 'react-router-dom'
import Navbar from './app/common/Navbar';
import Page1 from './app/reactjs/index';
import Page2 from './app/javascript/index';
import Page3 from './app/redux/index';
import Page4 from './app/scss/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('container');

ReactDOM.render(<HashRouter>
  <div className='app-container'>
    <Route path="/" component={Navbar} />
    <Route path="/" exact component={Main} />
    <Route exact path="/reactjs" render={() => <Page1 page='page1' />} />
    <Route exact path="/reactjs/intro" render={() => <Page1 page='page1' />} />
    <Route exact path="/reactjs/jsx" render={() => <Page1 page='page2' />} />
    <Route exact path="/reactjs/vdom" render={() => <Page1 page='page3' />} />
    <Route exact path="/reactjs/element" render={() => <Page1 page='page4' />} />
    <Route exact path="/reactjs/component" render={() => <Page1 page='page5' />} />
    <Route exact path="/reactjs/state" render={() => <Page1 page='page6' />} />
    <Route exact path="/reactjs/props" render={() => <Page1 page='page7' />} />
    <Route exact path="/reactjs/lifecycle" render={() => <Page1 page='page8' />} />
    <Route exact path="/reactjs/keys" render={() => <Page1 page='page9' />} />
    <Route exact path="/reactjs/refs" render={() => <Page1 page='page10' />} />
    <Route exact path="/reactjs/hoc" render={() => <Page1 page='page11' />} />
    <Route exact path="/reactjs/best" render={() => <Page1 page='page12' />} />
    <Route exact path="/reactjs/interview" render={() => <Page1 page='page13' />} />
    <Route exact path="/reactjs/hooks" render={() => <Page1 page='page14' />} />
    <Route exact path="/reactjs/error" render={() => <Page1 page='page15' />} />
    <Route exact path="/reactjs/reactdom" render={() => <Page1 page='page16' />} />
    <Route path="/javascript" component={Page2} />
    <Route path="/redux" component={Page3} />
    <Route path="/scss" component={Page4} />
  </div>
</HashRouter>, container);
