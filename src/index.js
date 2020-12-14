/**
 * To showcase the usage of the dnb-ui-lib/src in React
 *
 */

import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import 'dnb-ui-lib/style/basis'
import 'dnb-ui-lib/style/components'
import 'dnb-ui-lib/style/themes/ui'

import { CacheProvider } from '@emotion/react'
import createEmotionCache from '@emotion/cache'
import stylisPlugin from 'dnb-ui-lib/style/stylis'

import EufemiaProvider from 'dnb-ui-lib/shared/Provider'

// IE 11 Polyifll: Use either the global polyfill ...
// import cssVars from 'css-vars-ponyfill'
// cssVars()

// ... or the stylis plugin
const emotionCache = createEmotionCache({
  key: 'demo',
  stylisPlugins: [stylisPlugin]
})

ReactDOM.render(
  <EufemiaProvider formRow={{}}>
    <CacheProvider value={emotionCache}>
      <App />
    </CacheProvider>
    ,
  </EufemiaProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
