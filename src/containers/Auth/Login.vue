<template>
  <div>
    <app-header></app-header>
    <div class="">

        <!-- Main content -->
        <section class="content removeCross loginSignupBox">
          <div class="account-box">
              <h4 class="heading">Login</h4>
              <form role="form" style="overflow: auto" @submit.prevent="login" novalidate>
                  <div class="form-group"> 
                      <label for="inputUsernameEmail">Email</label>
                      <el-input type="text" v-model="loginData.email" v-validate="'required|email'" name="email" > </el-input>
                      <p class="hasError" v-if="errors.has('email')">
                        {{ errors.first('email') }}
                      </p>
                  </div>
                  <div class="form-group"> 
                      <label for="inputPassword">Password</label>
                      <el-input type="password" v-model="loginData.password" v-validate="'required'" name="password"></el-input> 
                      <p class="hasError" v-if="errors.has('password')">
                        {{ errors.first('password') }}
                      </p>
                  </div>
                  <div class="checkbox pull-left">
                      <label><input type="checkbox">Remember me</label>
                  </div>
                  <button class="btn btn btn-primary pull-right" type="submit" :disabled="loading">Log In</button>
                  <div class="col-md-12">
                    <p v-if="hasError" class="errorMsg">{{errorMsg}}</p>  
                  </div>
              </form>
              <hr />
              <div class="row-block">
                  <div class="row">
                      <div class="col-md-12 haveAccount">
                        <p>Don't Have Account? <router-link to="/signup">Create New Account</router-link></p>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        <!-- /.content -->
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'
  import {tempLogin} from '../../actions/auth.js'
  import Header from '../../components/partials/Header.vue'

  Vue.use(VeeValidate)

  export default {
    data: function () {
      return {
        dialogVisible: true,
        loginData: {email: '', password: ''},
        loading: false,
        hasError: false,
        errorMsg: ''
      }
    },
    components: {
      'app-header': Header
    },
    methods: {
      handleClose: function (done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done()
          })
          .catch(_ => {})
      },
      login: function () {
        this.hasError = false
        this.$validator.validate().then(result => {
          if (result) {
            this.loading = true
            tempLogin()
            this.$router.push('/main')
            /* login(this.loginData).then(res => {
              this.loading = false
              if (res.errors && res.status !== 200) {
                this.errorMsg = res.errors
                this.hasError = true
              } else {
                this.$router.push('/main')
              }
            }) */
          }
        })
      }
    }
  }
</script>
