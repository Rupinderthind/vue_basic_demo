import Main from './containers/Main.vue'
import NotFound from './containers/modules/errorpages/404.vue'
import NotFoundSecond from './containers/modules/errorpages/500.vue'
import BlankPage from './containers/modules/common-page/BlankPage.vue'
import SecureMain from './containers/SecureMain/SecureMain.vue'
import Login from './containers/Auth/Login.vue'
import Signup from './containers/Auth/Signup.vue'
import Dashboard from './containers/Dashboard/Dashboard.vue'
import Home from './containers/Home/Home.vue'

function checkAuth () {
  return localStorage.getItem('token')
}
// Routes
const routes = [
  {
    path: '/',
    component: Main,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      document.body.className += 'skin-dark sidebar-mini'
      next()
    },
    activate: function () {
      this.$nextTick(function () {
        // => 'DOM loaded and ready'
        alert('test')
      })
    },
    children: [
      {
        path: '',
        name: 'login',
        component: Login
      }, {
        path: '/home',
        name: 'home',
        component: Home
      }, {
        path: '/login',
        name: 'login',
        component: Login
      }, {
        path: '/signup',
        name: 'Signup',
        component: Signup
      }, {
        path: '/main',
        name: 'main',
        component: SecureMain,
        beforeEnter: (to, from, next) => {
          let isLogedin = checkAuth()
          if (!isLogedin) {
            next(false)
          } else {
            next()
          }
        },
        children: [
          {
            path: '',
            name: 'dashboard',
            component: Dashboard
          },
          {
            path: 'dashboard',
            name: 'dashboard',
            component: Dashboard
          }
        ]
      }, {
        path: '/blank-page',
        name: 'blank-page',
        component: BlankPage
      }, {
        path: '/404',
        name: '404',
        component: NotFound
      }, {
        path: '/500',
        name: '500',
        component: NotFoundSecond
      },
      {
        path: '*',
        name: '404',
        component: NotFound
      }
    ]
  }, {
    // not found handler
    path: '*',
    redirect: '/login'
  }
]

export default routes
