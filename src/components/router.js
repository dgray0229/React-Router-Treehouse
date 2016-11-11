// Library
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import App from './App';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Teachers from './Teachers';

// Routes
const routes = (
    <Router history={hashHistory}>
        <Route component={App}>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/teachers" component={Teachers} />
            <Route path="/courses" component={Courses} />
        </Route>
    </Router>

);

export default routes;