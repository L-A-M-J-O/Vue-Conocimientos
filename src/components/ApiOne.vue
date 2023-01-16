<script setup lang="ts">
  import axios from 'axios';
  import { ref } from 'vue';

  let datos: any = ref();

  axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then((response) => {
      response.data.results
      console.log(response.data.results);
      datos = response.data.results;
    })

</script> 
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-auto text-center">
        <h1>Datos de NASA</h1>
      </div>
      <div class="col-auto text-center">
        <tr v-for="element in datos">
          <p>{{ element.name }}</p>
        </tr>
      </div>
    </div>
  </div>
</template>