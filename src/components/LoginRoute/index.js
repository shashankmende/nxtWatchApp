import Login from '../Login'
import {Route, Switch} from 'react-router-dom'

const LoginRoute = () => (
  <Switch>
    <Route path="" component={Login} />
  </Switch>
)
