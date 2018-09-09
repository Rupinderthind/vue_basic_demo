<template>
  <header class="main-header">
    <!-- Logo -->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Logo</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right" v-if="token">
            <li>
              <router-link to="/main">
                Dashboard
              </router-link>
            </li>
            <li>
              <a @click="logout">
                Logout
              </a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right" v-if="!token">
            <li>
              <router-link to="/signup">
                Signup
              </router-link>
            </li>
            <li>
              <router-link to="/login">
                Login
              </router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/home">
                Home
              </router-link>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </header>
</template>
<script>
  import {getAuthToken, logout} from '../../actions/auth.js'
  import { mapState } from 'vuex'
  export default {
    name: 'DashboardHeader',
    mounted: function () {
      getAuthToken()
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      logout: function () {
        logout()
        this.$router.push('/home')
      }
    }
  }
</script>