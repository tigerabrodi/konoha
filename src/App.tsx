import { Home } from 'pages/Home'
import { CharacterDetail } from 'pages/CharacterDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer } from 'components/Footer'
import { Navigation } from 'components/Navigation'

export const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/character" exact component={CharacterDetail} />
    </Switch>
    <Footer />
  </Router>
)
