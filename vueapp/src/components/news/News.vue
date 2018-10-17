<template lang="html">
  <div class="news">
    <div class="" v-for="i in 5">
        <news-card></news-card>
        <hr>
    </div>
  </div>
</template>

<script>
import newsCard from './newsCard/NewsCard.vue'

export default {
  components: {
    newsCard
  }
}
</script>

<style lang="css" scoped>

</style>
