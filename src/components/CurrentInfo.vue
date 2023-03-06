<template>
  <h3 text-h3>{{ name }}, {{ country }}</h3>
  <q-item>
    <q-item-section top avatar>
      <q-avatar color="primary" text-color="white" icon="thermostat" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Temperature</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-item-label>{{ temp }} (feels like {{ tempFeel }} )</q-item-label>
    </q-item-section>
  </q-item>

  <q-item>
    <q-item-section top avatar>
      <q-avatar color="primary" text-color="white" icon="thermostat" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Temperature Min-Max</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-item-label>{{ tempMin }}-{{ tempMax }}</q-item-label>
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
      <q-item-label>{{ pressure }}</q-item-label>
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
      <q-item-label>{{ windSpeed }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  name: String,
});

let name = ref(null);
let country = ref(null);
let lat = ref(null);
let lon = ref(null);
let temp = ref(null);
let tempFeel = ref(null);
let tempMin = ref(null);
let tempMax = ref(null);
let humidity = ref(null);
let windSpeed = ref(null);
let pressure = ref(null);

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
          country.value = data.sys.country;
          temp.value = data.main.temp;
          tempFeel.value = data.main.feels_like;
          tempMin.value = data.main.temp_min;
          tempMax.value = data.main.temp_max;
          humidity.value = data.main.humidity;
          pressure.value = data.main.pressure;
          windSpeed.value = data.wind.speed;
          console.log(humidity.value);
          console.log(name.value);
          console.log(pressure.value);
        });
    });
  }
};

getWeatherByPosition();
</script>
