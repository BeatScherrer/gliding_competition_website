<template lang="html">
  <div class="main">
    <a href="https://glidertracker.org/#tsk=https://raw.githubusercontent.com/BeatScherrer/Segelfluggruppe-Dittingen/master/OGN/Tasks/task&lst=https://raw.githubusercontent.com/BeatScherrer/Segelfluggruppe-Dittingen/master/OGN/Groups/jsm2019.csv&nowelcome">Tracking Link</a>
    <hr>
    <iframe src="https://glidertracker.org/#tsk=https://raw.githubusercontent.com/BeatScherrer/Segelfluggruppe-Dittingen/master/OGN/Tasks/task&lst=https://raw.githubusercontent.com/BeatScherrer/Segelfluggruppe-Dittingen/master/OGN/Groups/jsm2019.csv&nowelcome"></iframe>
  </div>
</template>

<script>
export default {
  name: 'LiveTracking'
}
</script>

<style lang="css">
iframe {
  width: 100%;
  height: 100%;
  border: none;
  padding-bottom: 50px;
}

.main {
  height: 600px;
}
</style>
