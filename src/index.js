import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routes } from './router'

import { Provider } from 'react-redux'
import store from './store/index'

import './assets/css/common.less'

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>{renderRoutes(routes)}</HashRouter>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
