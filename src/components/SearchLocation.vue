<template>
  <q-input
    rounded
    dark
    standout
    bottom-slots
    v-model="text"
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
// import CurrentWeather from "./CurrentWeather.vue";
import { useCurrentWeatherStore } from "../stores/current-weather.js";
import { useCoreStore } from "../stores/core.js";

const currentWeather = useCurrentWeatherStore();
const core = useCoreStore();

let text = ref(null);

const getDifferentLatLon = () => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${text.value}&limit=5&appid=${CurrentWeather.API_KEY}`
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

// export default defineComponent({
//   name: "SearchLocation",
//   setup() {
//     return {
//       text: ref(""),
//     };
//   },
// });
</script>
