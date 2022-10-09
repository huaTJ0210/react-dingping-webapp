import Home from '@pages/home'
import City from '@pages/city'
import Search from '@pages/search'
import Detail from '@pages/detail'
import User from '@pages/user'
import NotFound from '@pages/not-found'

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
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
  },
  {
    path: '*',
    component: NotFound,
  },
]
