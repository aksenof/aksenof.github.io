<template>
  <div id="app">
    <h3>Vue mixer</h3>
    <Mixer/>
  </div>
</template>

<script>
  import Mixer from './components/Mixer.vue'

  export default {
    name: 'app',
    components: {
      Mixer
    }
  }
</script>

<style>
  #app {
    text-align: center;
  }
</style>
