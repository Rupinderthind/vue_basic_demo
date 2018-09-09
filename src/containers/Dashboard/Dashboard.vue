<template>
  <transition name="el-zoom-in-top">
    <!-- Main content -->
    <section class="dashboard">
      <div class="container">
        <h1 class="text-center">Dashboard</h1>
        <div class="row">
          <div class="col-md-12 text-center" style="margin-bottom: 20px;">
            <button class="btn btn-success" @click="sweetAlert">Test Sweet alert</button>
          </div>
          <div class="col-md-12 text-center">
            <button class="btn btn-primary" @click="testToast">Test toast</button>
          </div>
        </div>
      </div>
    </section>
    <!-- /.content -->
  </transition>
</template>
<script>
  import sweetalert from 'sweetalert'
  export default {
    name: 'dashboard-first',
    methods: {
      sweetAlert: function () {
        sweetalert('success!', 'This is success Message', 'success')
      },
      testToast: function () {
        this.$toasted.show('This is toast')
      }
    }
  }
</script>