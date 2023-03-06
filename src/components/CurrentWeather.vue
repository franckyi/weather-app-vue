<template>
  <h3 text-h3>{{ currentWeather.name }}, {{ currentWeather.country }}</h3>
  <q-card class="my-card bg-primary text-white">
    <q-card-section>
      <q-item>
        <q-item-section top avatar>
          <q-avatar color="secondary" text-color="white" icon="thermostat" />
        </q-item-section>

        <q-item-section side>
          <strong text-color="white"
            >{{ currentWeather.temp }} | min {{ currentWeather.tempMin }} - max
            {{ currentWeather.tempMax }}</strong
          >
          <q-item-section side>
            <p text-italic>feels like {{ currentWeather.tempFeel }}</p>
          </q-item-section>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section top avatar>
          <q-avatar color="primary" text-color="white" icon="thermostat" />
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
          <q-avatar color="primary" text-color="white" icon="water_drop" />
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
          <q-avatar color="primary" text-color="white" icon="air" />
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

const currentWeather = useCurrentWeatherStore();

const getCurrentWeather = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      currentWeather.lat = position.coords.latitude;
      currentWeather.lon = position.coords.longitude;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${currentWeather.lat}&lon=${currentWeather.lon}&appid=${currentWeather.API_KEY}&units=${currentWeather.units}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          currentWeather.name = data.name;
          currentWeather.country = data.sys.country;
          currentWeather.temp = data.main.temp;
          currentWeather.tempFeel = data.main.feels_like;
          currentWeather.tempMin = data.main.temp_min;
          currentWeather.tempMax = data.main.temp_max;
          currentWeather.humidity = data.main.humidity;
          currentWeather.pressure = data.main.pressure;
          currentWeather.windSpeed = data.wind.speed;
        });
    });
  }
};

getCurrentWeather();
</script>
