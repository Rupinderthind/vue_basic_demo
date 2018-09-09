<template>
  <div>
    <app-header></app-header>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <section class="content">
        <router-view></router-view>
      </section>
    </div>

    <!-- /.content-wrapper -->

    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from '../../components/partials/Header.vue'
  import Footer from '../../components/partials/Footer.vue'

  export default {
    name: 'Dashboard',
    components: {
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>
