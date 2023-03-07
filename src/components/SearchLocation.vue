<template>
  <q-input
    rounded
    dark
    standout
    bottom-slots
    v-model="currentWeather.text"
    label="Search Location"
    counter
  >
    <template v-slot:prepend>
      <q-icon name="place" />
    </template>
    <template v-slot:append>
      <q-icon
        name="close"
        @click="currentWeather.text = ''"
        class="cursor-pointer"
      />
    </template>
  </q-input>
  <h3>{{ currentWeather.text }}</h3>
</template>

<script setup>
import { watch } from "vue";
import { useCurrentWeatherStore } from "../stores/current-weather.js";
import { useCoreStore } from "../stores/core.js";

const currentWeather = useCurrentWeatherStore();
const core = useCoreStore();

const getDifferentLatLon = () => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${currentWeather.text}&limit=5&appid=${core.API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.lat);
      console.log(data.lon);
      currentWeather.lat = data.lat;
      currentWeather.lon = data.lon;
    });
};

watch(currentWeather.text, getDifferentLatLon());
</script>
