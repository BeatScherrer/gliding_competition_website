<template lang="html">

  <div class="results">
    <iframe src="https://www.soaringspot.com/de/jsm-rm-2018-langenthal-2018/results/jsm/task-4-on-2018-05-21/daily" onload="resizeIframe(this)"></iframe>
  </div>
  </div>
</template>

<script>
export default {
}
function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}
</script>

<style lang="css" scoped>

.btn-link {
  text-decoration: none;
}

iframe {
  border: none;
  scrolling: no;
  height: 1600px;
  width: 100%;
  overflow: hidden;
}

</style>
