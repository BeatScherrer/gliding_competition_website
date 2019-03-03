<template lang="html">
  <div class="accordion " id="accordionExample">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h5 class="mb-0">
          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Aufgaben
          </button>
        </h5>
      </div>

      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tasksresults"
}
</script>

<style lang="css" scoped>

.card-body {
  text-align: left;
}

p {
  margin-bottom: 30px;
}

.card-body {
  padding: 20px 20px;
}

@media only screen and (min-width: 768px) {
    .card-body {
      padding: 20px 70px;
    }
}

</style>
