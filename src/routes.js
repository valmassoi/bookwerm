import React from "react"
import { Route, IndexRoute } from "react-router"

import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Login from "./pages/Login"

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="login" component={Login} />
  </Route>
)
