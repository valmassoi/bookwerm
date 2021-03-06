import React from "react"
import { Route, IndexRoute } from "react-router"

import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Library from "./pages/Library"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Settings from "./pages/Settings"
import RequireAuth from './components/require_auth'
import NotFound from './pages/404'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="signup" component={Signup} />
    <Route path="signin" component={Signin} />
    <Route path="library" component={Library} />
    <Route path="dashboard" component={RequireAuth(Dashboard)} />
    <Route path="settings" component={RequireAuth(Settings)} />
    <Route path="*" component={NotFound} />
  </Route>
)
