import React from 'react'
import ReactDOM from 'react-dom'
import { setup } from 'twind'
import { App } from './App'

setup({
  theme: {
    colors: {
      white: 'F0F3F6',
      darkBlue: '0A1625',
      lightBlue: 'ACD5F2',
    },
    fontFamily: {
      overpass: 'Overpass',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
