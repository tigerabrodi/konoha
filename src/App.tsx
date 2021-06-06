import { Home } from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
)
