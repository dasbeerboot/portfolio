import { RouteConfig } from 'react-router-config'
import MainLayout from './layouts/index'
import AboutPage from './pages/about'
import MainPage from './pages/main/index'
import WorksPage from './pages/works'

const routes: RouteConfig[] = [
  {
    route: '*',
    component: MainLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: MainPage,
      },
      {
        path: '/about',
        exact: true,
        component: AboutPage,
      },
      {
        path: '/works',
        exact: true,
        component: WorksPage,
      },
    ],
  },
]

export default routes
