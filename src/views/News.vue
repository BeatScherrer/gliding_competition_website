<template lang="html">
  <div class="news">
    <div class="" v-for="post in facebookPosts" :key="post.id" v-if="'message'in post">
        <news-card v-bind:post="post"></news-card>
        <hr>
    </div>
  </div>
</template>

<script>
import newsCard from '@/components/newsCard/NewsCard.vue'

export default {
  components: {
    newsCard
  },
  data(){
    return {
      facebookPosts: {}
    }
  },
  methods: {
  },
  created(){
    this.$http.get("https://graph.facebook.com/391674157977731/posts?pretty=1&access_token=EAAUWcKX4ZCvoBAAC8GePRJ15Jv01LL8r2luZBsKye8yLNejuxvTQrzxGhnyJ7rU9HAKOS4wFodaVB3ZAm99SECssYdKDwYoiUrnhyUqAdeqqX6NZBuDeA3ni6m8pZBJ1JRaL8pz3ONYdZCDYDAVhv5DymOA0SMNQ7aeIiMFlK9688YT8tfwrawCHrYqWnUgluZCAdMS3TrTCwZDZD").then(function(data) {
      this.facebookPosts = data.body.data;
    })
  }
}
</script>

<style lang="css" scoped>

</style>
