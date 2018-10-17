<template lang="html">
  <div class="results">
    <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          11.01.2019 <span> (300km race task) </span>
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"> Name </th>
              <th scope="col"> Glider </th>
              <th scope="col"> Sign </th>
              <th scope="col"> Distance </th>
              <th scope="col"> Avg Speed </th>
            </tr>
          </thead>
          <tbody v-for="i in 5">
            <tr>
              <th scope="row">{{ i }}.</th>
              <td> hans muster </td>
              <td>Discus-2c</td>
              <td>AA</td>
              <td>100km</td>
              <td>100km/h</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          12.01.2019 <span>(neutralized)</span>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          13.01.2019 <span>(150km Asigned Area Task)</span>
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"> Name </th>
              <th scope="col"> Glider </th>
              <th scope="col"> Sign </th>
              <th scope="col"> Distance </th>
              <th scope="col"> Avg Speed </th>
            </tr>
          </thead>
          <tbody v-for="i in 5">
            <tr>
              <th scope="row">{{ i }}.</th>
              <td> hans muster </td>
              <td>Discus-2c</td>
              <td>AA</td>
              <td>100km</td>
              <td>100km/h</td>
            </tr>
          </tbody>
        </table>      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .results {
    background-color: lightblue;
  }

.btn-link {
  text-decoration: none;
}

  span {
    color: gray;
    font-weight: lighter;
  }
</style>
