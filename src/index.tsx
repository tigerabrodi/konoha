import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { css, theme } from 'twind/css'
import { setup } from 'twind'

setup({
  preflight: (preflight) => css`
    ${preflight}
    body {
      background-color: ${theme('colors.blue.dark')};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  `,
  theme: {
    extend: {
      colors: {
        white: '#F0F3F6',
        blue: {
          dark: '#0A1625',
          light: '#ACD5F2',
        },
      },
      fontFamily: {
        overpass: 'Overpass',
      },
    },
    screens: {
      phone: '425px',
      tablet: '768px',
      desktop: '1024px',
      laptop: '1440px',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
