import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

// import 'dnb-ui-lib/src/style'
import 'dnb-ui-lib/style/basis'
import 'dnb-ui-lib/style/components'
import 'dnb-ui-lib/style/themes/ui'

import EufemiaProvider from 'dnb-ui-lib/shared/Provider'

// This polyfill is only needed if we use Styled Components (CSS-in-JS) syntax
import cssVars from 'css-vars-ponyfill'
cssVars()

ReactDOM.render(
  <EufemiaProvider formRow={{}}>
    <App />
  </EufemiaProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
