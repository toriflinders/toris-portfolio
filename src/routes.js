import React from 'react';
import {Switch, Route} from 'react-router-dom'
import About from './Components/About/about'
import Projects from './Components/Projects/projects'
import Contact from './Components/Contact/contact'

export default (
  <Switch>
    <Route exact path='/' component={About} />
    <Route path='/projects' component={Projects} />
    <Route path='/contact' component={Contact} />  
  </Switch>
);