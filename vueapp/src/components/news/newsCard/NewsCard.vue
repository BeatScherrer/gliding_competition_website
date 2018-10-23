<template lang="html">
  <div class="card mb-3">
    <img class="card-img-top" src="" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">{{post.message}}</p>
      <p class="card-text"><small class="text-muted">{{post.created_time}}</small></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>

<style lang="css" scoped>

img {
  height: 400px;
  width: 100%;
}

</style>
