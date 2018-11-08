import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Users from './components/Users';
import Todo from './components/Todo';
import Posts from './components/Posts';
import './App.css';

class App extends Component {

  render(){
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Users} />
	        <Route  path="/posts" component={Posts} />
		    <Route  path="/todo" component={Todo} />
            <Route  path="/users/:user" component={Users} />

        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
