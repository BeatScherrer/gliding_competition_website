<template lang="html">
  <div class="card mb-3">
    <img class="card-img-top" v-bind:src="post.full_picture" alt="Card image cap" v-if="hasImage">
    <div class="card-body">
      <h5 class="card-title" v-if="hasTitle"></h5>
      <p class="card-text">{{post.message}}</p>
      <p class="card-text"><small class="text-muted">{{date}}</small></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  },
  computed: {
    hasImage(){
      return('full_picture' in this.post);
    },
    hasTitle(){
      return('title' in this.post);
    },
    date(){
      let date = this.post.created_time.split('T');
      date = date[0].split('-');
      return(`${date[2]}.${date[1]}.${date[0]}`);
    }
  }
}
</script>

<style lang="css" scoped>

img {
  width: 100%;
  height: auto;

}

.text-muted{
  font-weight: 300;
}

p {
  white-space: pre-wrap;
  text-align: left;
}

</style>
