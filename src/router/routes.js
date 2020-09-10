import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
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
]

export default routes
