<template>
  <q-input
    rounded
    dark
    standout
    bottom-slots
    v-model="text"
    @change="getResults"
    label="Search Location"
    counter
  >
    <template v-slot:prepend>
      <q-icon name="place" />
    </template>
    <template v-slot:append>
      <q-icon name="close" @click="text = ''" class="cursor-pointer" />
    </template>
  </q-input>
</template>

<script setup>
import { ref } from "vue";
import { useCurrentWeatherStore } from "../stores/current-weather.js";
import { useCoreStore } from "../stores/core.js";

const currentWeather = useCurrentWeatherStore();
const core = useCoreStore();

let text = ref("");

const getResults = () => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${text.value}&limit=5&appid=${core.API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // data.forEach(
      // (obj) => options.value.push(obj.name)
      // ${obj.name}, ${obj.state}, ${obj.country}
      // );
    });
  text.value = "";
};
</script>
