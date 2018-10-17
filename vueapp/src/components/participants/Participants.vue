<template lang="html">
  <div class="participants">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Glider</th>
      <th scope="col">Sign</th>
    </tr>
  </thead>
  <tbody v-for="i in 5">
    <tr>
      <th scope="row">{{ i }}</th>
      <td>{{ participants[0].name }}</td>
      <td>{{ participants[0].age }}</td>
      <td>{{ participants[0].glider }}</td>
      <td>{{ participants[0].callsign }}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      participants: [
        {name: 'hans muster',
         age: 20,
         glider: 'Discus-2c',
         callsign: 'AA',
         paid: false}
      ]
    }
  }
}
</script>

<style lang="css" scoped>

.participants {
}

</style>
