
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
       { path: 'quiz-index', component: () => import('src/atoms/QuizIndex.vue') },
       { path: 'create-quiz', component: () => import('src/atoms/CreateQuiz.vue') },
       { path: 'add-question', component: () => import('src/atoms/AddQuestion.vue') }

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
