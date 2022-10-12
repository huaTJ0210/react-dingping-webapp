import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import { HashRouter } from 'react-router-dom'

import { routes, renderRoutes } from './router/index'

import { Provider } from 'react-redux'
import store from './store/index'

import './assets/css/common.less'

const App = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Provider store={store}>
        <HashRouter>{renderRoutes(routes)}</HashRouter>
      </Provider>
    </Suspense>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
