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
    this.$http.get("https://graph.facebook.com/391674157977731/posts?pretty=1&access_token=EAAUWcKX4ZCvoBAPXQw6GqHsOZAMYwMikEqZCh4TWTKO8yxWNZAswHNUuZCs5nNH2yL7TLgy6T2YZBAz2UWp0YZCCCqHclvyR4ksmqBUzIJa2qzZCOWnViTS6vqYFNSWPdv1ntr7sM1dsCtW2pobAP6dbMYpYJmN1YlBDu3kwpNpWpQZDZD").then(function(data) {
      this.facebookPosts = data.body.data;
    }, res => {
      console.log("Failed to retrieve facebook posts...");
    })
  }
}
</script>

<style lang="css" scoped>

</style>
