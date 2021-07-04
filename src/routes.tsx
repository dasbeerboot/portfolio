import { RouteConfig } from 'react-router-config'
import MainLayout from './layouts/index'
import MainPage from './pages/main/index'

const routes: RouteConfig[] = [
  {
    route: '*',
    component: MainLayout,
    routes: [
      {
        path: '/portfolio',
        exact: true,
        component: MainPage,
      },
      {
        path: '/portfolio/about',
        exact: true,
        component: MainPage,
      },
      {
        path: '/portfolio/works',
        exact: true,
        component: MainPage,
      }
    ],
  },
]

export default routes
