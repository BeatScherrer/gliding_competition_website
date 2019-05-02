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
  name: 'news',
  components: {
    newsCard
  },
  data(){
    return {
      facebookPosts: []
    }
  },
  methods: {
  },
  created(){

    this.$http.get(`https://graph.facebook.com/jsmdittingen2019/posts?fields=full_picture,picture,message,permalink_url,created_time&access_token=${process.env.VUE_APP_FACEBOOK_ACCESS_TOKEN}`).then(function(data) {
      console.log(data);

      let posts = data.body.data;
      console.log(posts);
      this.facebookPosts = posts;
    }).catch((error) => {
      console.log(error);
    });
  }
}
</script>

<style lang="css" scoped>

</style>
