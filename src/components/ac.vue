<template>
  <section class="flex justify-content-center aling-items-center text-center">
    <div class="m-2 p-1">
      <select v-model="selected">
        <option disabled value="">Seleccione un elemento</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Seleccionado: {{ selected }}</span>
    </div>
  </section>
</template>
<script lang="ts">
  import { ref } from 'vue';

  let selected: any = ref('');

  export default {
    Component: {
      selected,
    }
  }

</script>