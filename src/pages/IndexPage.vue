<template>
  <q-page class="flex flex-center column">
    <SearchLocation></SearchLocation>
    <CurrentWeather></CurrentWeather>
    <ForecastWeather></ForecastWeather>
  </q-page>
</template>

<script setup>
import { useCurrentWeatherStore } from "../stores/current-weather.js";
import SearchLocation from "src/components/SearchLocation.vue";
import CurrentWeather from "src/components/CurrentWeather.vue";
import ForecastWeather from "src/components/ForecastWeather.vue";

const currentWeather = useCurrentWeatherStore();
</script>
