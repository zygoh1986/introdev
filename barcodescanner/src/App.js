/**
 * Home page. Users can navigate to Cart
 */

import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import Scan from './containers/Scan/Scan'
import Cart from './containers/Cart/Cart'
import Objective from './containers/Objective/Objective'
import './App.css';



class App extends Component {



  render(){
    let routes = (
      <Switch>
        <Route exact path='/Cart' component={Cart}/>
        <Route exact path='/Scan' component={Scan}/>
        <Route exact path='/' component={Objective}/>
      </Switch>
    )
    return (
    <BrowserRouter>
      <div className="bkg">
        <div className="container">

          <Navigation />
        
          {routes}

        </div>
      </div>
    </BrowserRouter>
  )};
}

export default App;
