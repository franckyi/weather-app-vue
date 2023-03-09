<template>
  <q-input
    rounded
    dark
    standout
    bottom-slots
    list="search-results"
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
  <datalist id="search-results" class="results">
    <option v-for="result in results" :key="result.id">
      {{ result }}
    </option>
  </datalist>
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
      if (data.length === 1) {
        console.warn("new lat: ", data[0].lat);
        console.warn("new lon: ", data[0].lon);
        currentWeather.lat = data[0].lat;
        currentWeather.lon = data[0].lon;
        console.warn(
          "currentWeather updated: ",
          currentWeather.lat,
          currentWeather.lon
        );
        currentWeather.getCurrentWeather();
      } else if (
        data.length === 2 &&
        data[0].name === data[1].name &&
        data[0].state === data[1].state
      ) {
        currentWeather.lat = data[0].lat;
        currentWeather.lon = data[0].lon;
        console.warn(
          "currentWeather updated: ",
          currentWeather.lat,
          currentWeather.lon
        );
        currentWeather.getCurrentWeather();
      }

      data.forEach((obj) =>
        results.value.push(`${obj.name}, ${obj.state}, ${obj.country}`)
      );
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
