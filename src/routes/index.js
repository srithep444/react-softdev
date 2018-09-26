import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home/index'
import Game from '../pages/Game/Apps'
import Contact from '../pages/Contact/index'

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Contact" component={Contact} />
    <Route exact path="/Game" component={Game} />
  </Switch>
)