import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '@pages/home'
import City from '@pages/city'
import Search from '@pages/search'
import Detail from '@pages/detail'
import User from '@pages/user'
import NotFound from '@pages/not-found'
import Login from '@pages/login'

import { isLogin } from '@utils/index'

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/city',
    component: City,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/detail/:id',
    component: Detail,
  },
  {
    path: '/user',
    component: User,
    auth: true,
  },
  {
    path: '*',
    component: NotFound,
  },
]

export function renderRoutes(routes, extraProps = {}, switchProps = {}) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) =>
            route.render ? (
              route.render({ ...props, ...extraProps, route: route })
            ) : route.auth && !isLogin() ? (
              <Redirect to="/login" />
            ) : (
              <route.component {...props} {...extraProps} route={route} />
            )
          }
        />
      ))}
    </Switch>
  ) : null
}

export default renderRoutes
