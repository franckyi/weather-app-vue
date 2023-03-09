<template>
  <h5>{{ currentWeather.name }}</h5>
  <h1>{{ currentWeather.temp }} °C</h1>
  <p class="text-italic">feels like {{ currentWeather.tempFeel }}</p>
  <div class="flex items-center">
    <img :src="currentWeather.iconUrl" alt="weather icon" height="96" />
    <h4>{{ currentWeather.description }}</h4>
  </div>

  <q-card class="my-card bg-primary text-white">
    <q-card-section>
      <q-item>
        <q-item-section top avatar>
          <q-avatar color="secondary" text-color="white" icon="thermostat" />
        </q-item-section>

        <q-item-section side>
          <strong text-color="white"
            >min {{ currentWeather.tempMin }} - max
            {{ currentWeather.tempMax }}</strong
          >
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section top avatar>
          <q-avatar color="secondary" text-color="white" icon="south_east" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Pressure</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label>{{ currentWeather.pressure }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section top avatar>
          <q-avatar color="secondary" text-color="white" icon="water_drop" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Humidity</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label>{{ currentWeather.humidity }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section top avatar>
          <q-avatar color="secondary" text-color="white" icon="air" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Wind speed</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label>{{ currentWeather.windSpeed }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useCurrentWeatherStore } from "../stores/current-weather.js";
import { useCoreStore } from "../stores/core.js";

const currentWeather = useCurrentWeatherStore();
const core = useCoreStore();

async function getCoords() {
  if (navigator.geolocation) {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    currentWeather.lat = position.coords.latitude;
    currentWeather.lon = position.coords.longitude;
    currentWeather.getCurrentWeather();
  }
}

getCoords();
</script>

<style scoped>
p,
h4,
h5 {
  margin: 0;
  color: white;
}
h1 {
  margin: 1rem auto;
  color: white;
}
</style>
