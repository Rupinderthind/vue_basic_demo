<template>
  <div class="home">
    <app-header></app-header>
    <h1 class="text-center">Home</h1>
  </div>
</template>

<script>
  import Header from '../../components/partials/Header.vue'

  export default {
    name: 'Home',
    components: {
      'app-header': Header
    }
  }
</script>
