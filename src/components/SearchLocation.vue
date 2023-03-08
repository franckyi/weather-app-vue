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
  <div class="results">
    <template v-for="r in results" :key="r.id">
      <button>{{ r }}</button>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCurrentWeatherStore } from "../stores/current-weather.js";
import { useCoreStore } from "../stores/core.js";

const currentWeather = useCurrentWeatherStore();
const core = useCoreStore();

let text = ref("");
let id = ref(null);
const results = ref([]);

const getResults = () => {
  results.value = [];
  id.value = null;
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${text.value}&limit=5&appid=${core.API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((obj) =>
        results.value.push(
          `${id.value++}, ${obj.name}, ${obj.state}, ${obj.country}
          ( Lat ${obj.lat} / Lon ${obj.lon} )`
        )
      );
      console.log(results.value);
    });
  text.value = "";
};
</script>

<style scoped>
.results {
  position: absolute;
  top: 120px;
  background: bisque;
  list-style: none;
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
}
button {
  border: none;
  background: none;
}
</style>
