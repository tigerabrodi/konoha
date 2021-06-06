import { tw } from 'twind'
import { css } from 'twind/css'

const styles = css`
  height: calc(100vh - 8rem);
`

export const Home = () => <div className={tw(styles)}>Hello World</div>
