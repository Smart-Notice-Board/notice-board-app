import React from 'react'
import Search from '../components/Search'
import Home from '../components/Home'
import Splash from '../components/Splash'
import { Router, Route, DefaultRoute } from 'react-router'

export default (
  <Route name="app" path="/" handler={Splash} >
    <DefaultRoute name="search" handler={Search} />
    <Route name="notice" path="/notice" handler={Home}></Route>
  </Route>
)
