import React from "react"
import { Route, IndexRoute } from "react-router"

import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Login from "./pages/Login"
import Settings from "./pages/Settings"

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="login" component={Login} />
    <Route path="settings" component={Settings} />
  </Route>
)
