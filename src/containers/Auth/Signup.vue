<template>
  <div>
    <app-header></app-header>
    <div class="">
        <!-- Main content -->
        <section class="content removeCross loginSignupBox">
          <div class="account-box">
            <h4 class="heading">Sign up</h4>
              <form role="form" @submit.prevent="submitFirstStep" novalidate>
                  <div class="row">
                      <div class="col-md-6">
                          <div class="form-group">
                            <label>First Name</label>
                            <el-input type="text" v-model="signupData.first_name" v-validate="'required'" name="first name" > </el-input>
                            <p class="hasError" v-if="errors.has('first name')">
                              {{ errors.first('first name') }}
                            </p>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="form-group">
                              <label>Last Name</label>
                              <el-input type="text" v-model="signupData.last_name" v-validate="'required'" name="last name"> </el-input>
                              <p class="hasError" v-if="errors.has('last name')">
                                {{ errors.first('last name') }}
                              </p>
                          </div>
                      </div>
                      <div class="col-md-12">
                          <div class="form-group">
                            <label>Company</label>
                            <el-input type="text"  v-model="signupData.company" v-validate="'required'" name="company"> </el-input>
                            <p class="hasError" v-if="errors.has('company')">
                              {{ errors.first('company') }}
                            </p>
                          </div>
                      </div>
                      <div class="col-md-12">
                          <div class="form-group">
                            <label>Email</label>
                            <el-input type="email" v-model="signupData.email" v-validate="'required|email'" name="email" ></el-input>
                            <p class="hasError" v-if="errors.has('email')">
                              {{ errors.first('email') }}
                            </p>
                          </div>
                      </div>
                      <div class="col-md-12">
                          <div class="form-group">
                            <label>Phone</label>
                            <el-input type="number" v-model="signupData.phone" v-validate="'required'" name="phone" ></el-input>
                            <p class="hasError" v-if="errors.has('phone')">
                              {{ errors.first('phone') }}
                            </p>
                          </div>
                      </div>
                      <div class="col-md-12">
                          <div class="form-group">
                              <label>User Type</label>
                              <el-select v-model="signupData.user_type" class="text-capitalize" placeholder="Select User Type"  v-validate="'required'" name="user type">
                                <el-option
                                  v-for="item in userTypes"
                                  :key="item"
                                  :label='item'
                                  :value="item">
                                </el-option>
                              </el-select>
                              <p class="hasError" v-if="errors.has('user type')">
                                {{ errors.first('user type') }}
                              </p>
                          </div>
                      </div>
                      <div class="col-md-12">
                          <div class="form-group">
                              <label>Billing Address</label>
                              <textarea type="text" class="form-control" v-model="signupData.billing_address" v-validate="'required'" name="billing address"> </textarea>
                              <p class="hasError" v-if="errors.has('billing address')">
                                {{ errors.first('billing address') }}
                              </p>
                          </div>
                      </div>
                      <div class="col-md-12">
                          <div class="form-group" style="overflow: auto">
                              <button class="btn btn btn-primary pull-right" type="submit">
                                  Next
                              </button>
                          </div>
                      </div>
                  </div>
              </form>
              <hr />
              <div class="col-md-12 haveAccount">
                <p>Have Account? <router-link to="/login">Login</router-link></p>
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
  import Header from '../../components/partials/Header.vue'

  Vue.use(VeeValidate)

  export default {
    data: function () {
      return {
        userTypes: ['agency', 'advertiser', 'publisher'],
        signupData: {
          first_name: '',
          last_name: '',
          company: '',
          email: '',
          phone: '',
          user_type: '',
          billing_address: ''
        },
        errorMsg: '',
        loading: false,
        hasError: false
      }
    },
    components: {
      'app-header': Header
    },
    methods: {
      submitFirstStep: function () {
        this.$validator.validate().then(result => {
          if (!result) {
            console.log('not valid')
          } else {
            // valid
          }
        })
      }
    }
  }
</script>
