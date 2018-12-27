<template lang="mp">
  <div class="">
    <p>Teilnehmerliste kommt bald...</p>
    <button class="btn btn-secondary" type="button" name="button" @click="test">test</button>
  </div>
</template>

<script>

export default {
  name: 'participants',
  data(){
    return {
      user: {

      }
    }
  },
  methods: {
    test(){
      console.log('inside participants');
    }
  }
}
</script>

<style lang="css">
</style>
