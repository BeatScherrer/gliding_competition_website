<template>
  <header>
    <app-navigation/>
  </header>
</template>

<script>
import Navigation from './navigation/Navigation.vue'

export default {
  data () {
    return {
      msg: 'This is the header'
    }
  },
  components: {
    appNavigation: Navigation
  }
}
</script>

<style lang="scss" scoped>
header {
  display: block;
}
</style>
