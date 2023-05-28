
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
       { path: 'login-index', component: () => import('src/atoms/LoginIndex.vue') },
       { path: 'forgot-password', component: () => import('src/atoms/ForgotPassword.vue') },
       { path: 'sign-up', component: () => import('src/atoms/SignUP.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
