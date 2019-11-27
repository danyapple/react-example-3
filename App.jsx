import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';

export default class App extends Component {

  render() {
    return (
      <div className='container'>
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



