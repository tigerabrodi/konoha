import { Home } from 'pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer } from 'components/Footer'
import { Navigation } from 'components/Navigation'

export const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
    <Footer />
  </Router>
)
