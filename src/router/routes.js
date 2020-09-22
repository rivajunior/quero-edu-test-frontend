import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound'

const routes = [
  {
    path: '/',
    redirect: '/bolsas-favoritas',
  },
  {
    path: '/bolsas-favoritas',
    name: 'Home',
    component: Home,
    meta: {
      breadcrumbs: [
        {
          name: 'Home',
          route: '/',
        },
        {
          name: 'Minha conta',
          route: '/minha-conta',
        },
        {
          name: 'Bolsas favoritas',
          route: '/bolsas-favoritas',
        },
      ],
    },
  },
  {
    path: '*',
    component: NotFound,
  },
]

export default routes
