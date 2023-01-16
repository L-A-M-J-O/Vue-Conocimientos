<script setup lang="ts">
  import axios from 'axios';
  import { ref } from 'vue';

  let datos: any = ref();
  let number: any = ref();

  axios.get('https://api.chucknorris.io/jokes/random')
    .then((response) => {
      response.data
      console.log(response.data);
      datos = response.data
    })

</script> 
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-auto text-center">
        <h1>Datos de NASA</h1>
      </div>
      <div class="col-auto text-center">
        <li v-for="element in datos">
          {{ element.id }}
          <img src={{ element.icon_url }} alt=""/>
        </li>
      </div>
    </div>
  </div>
</template>