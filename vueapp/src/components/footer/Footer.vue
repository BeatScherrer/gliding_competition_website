<template>
  <footer id="jsm-footer">
    <p> {{ msg }} </p>
  </footer>
</template>

<script>
export default {
  name: 'jsm-footer',
  data () {
    return {
      msg: 'This is the footer'
    }
  }
}
</script>

<style lang="scss">
#footer {
  background-color: lightsalmon;
  height: 130px;
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
