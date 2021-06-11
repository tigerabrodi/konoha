import { Home } from 'pages/Home'
import { CharacterDetail } from 'pages/CharacterDetail'
import { createClient, Provider } from 'urql'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer } from 'components/Footer'
import { Navigation } from 'components/Navigation'

const client = createClient({
  url: 'https://graphql.anilist.co/',
})

export const App = () => (
  <Provider value={client}>
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/character" exact component={CharacterDetail} />
      </Switch>
      <Footer />
    </Router>
  </Provider>
)
