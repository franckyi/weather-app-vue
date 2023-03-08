<template>
  <q-page class="flex flex-center column">
    <SearchLocation></SearchLocation>
    <CurrentWeather></CurrentWeather>
  </q-page>
</template>

<script setup>
import { useCurrentWeatherStore } from "../stores/current-weather.js";
import SearchLocation from "src/components/SearchLocation.vue";
import CurrentWeather from "src/components/CurrentWeather.vue";

const currentWeather = useCurrentWeatherStore();
</script>
