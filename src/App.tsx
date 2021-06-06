import { Home } from './pages/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { ReactComponent as NinjaSVG } from 'assets/ninja.svg'
import { tw } from 'twind'

export const App = () => (
  <Router>
    <nav className={tw`relative w-screen h-16`}>
      <Link
        to="/"
        aria-label="To homepage"
        className={tw`h-5/6 w-20 absolute top-0 left-0 mt-4 ml-2`}
      >
        <NinjaSVG aria-hidden="true" className={tw`w-full h-full`} />
      </Link>
    </nav>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
    <footer
      className={tw`h-16 w-full border-t-2 border-white flex flex-row items-center justify-center`}
    >
      <p className={tw`text-blue.light`}>Built and designed by</p>
      <a
        href="https://github.com/tigerabrodi"
        target="_blank"
        rel="noreferrer"
        className={tw`text-white underline pl-1`}
      >
        Tiger Abrodi
      </a>
    </footer>
  </Router>
)
