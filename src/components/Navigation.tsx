import { tw } from 'twind'
import { Link } from 'react-router-dom'
import { ReactComponent as NinjaSVG } from 'assets/ninja.svg'

export const Navigation = () => (
  <nav className={tw`relative w-screen h-16`}>
    <Link
      to="/"
      aria-label="To homepage"
      className={tw`h-5/6 w-20 absolute top-0 left-0 mt-4 ml-2`}
    >
      <NinjaSVG aria-hidden="true" className={tw`w-full h-full`} />
    </Link>
  </nav>
)
