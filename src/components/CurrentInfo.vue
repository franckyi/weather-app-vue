<template>
  <q-item>
    <q-item-section top avatar>
      <q-avatar color="primary" text-color="white" icon="water_drop" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Humidity</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-item-label>{{ humidity }}</q-item-label>
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
      <q-item-label>{{ name }}</q-item-label>
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
      <q-item-label>5 min ago</q-item-label>
    </q-item-section>
  </q-item>

  <q-item>
    <q-item-section top avatar>
      <q-avatar color="primary" text-color="white" icon="water" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Sea level</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-item-label>5 min ago</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator spaced inset="item" />
</template>

<script setup>
import { ref } from "vue";

let humidity = ref(null);
let name = ref(null);
let lat = ref(null);
let lon = ref(null);

const getWeatherByPosition = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat.value = position.coords.latitude;
      lon.value = position.coords.longitude;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat.value}&lon=${lon.value}&appid=61a20f5d41830810abfcc3d15f5f1b2a&units=metric`
      )
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          name.value = data.name;
          humidity.value = data.main.humidity;
          console.log(humidity.value);
          console.log(name.value);
        });
    });
  }
};

getWeatherByPosition();
</script>
