import React from 'react'
import Search from '../components/Search'
import { Router, Route, DefaultRoute } from 'react-router'

export default (
  <Route name="app" path="/" handler={Search}>
  </Route>
)
