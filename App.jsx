import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './'

export default class App extends Component {
  

  render() {
    return (
      <div>
         <Router>
            <Switch>
               <Route exact path='/detail/:id' component={ () => {}}/>
               <Route component={Home}/>
            </Switch>
         </Router>
      </div>
    )
  }
}



