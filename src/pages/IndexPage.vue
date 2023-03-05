<template>
  <q-page class="flex flex-center column">
    <h3 text-h3>{{ _data.name }}</h3>
    <SearchLocation></SearchLocation>
    <CurrentInfo :humidity="_data.main.humidity"></CurrentInfo>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import SearchLocation from "src/components/SearchLocation.vue";
import CurrentInfo from "src/components/CurrentInfo.vue";

let lat = ref(null);
let lon = ref(null);

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      text: ref(""),
    };
  },
  components: { SearchLocation, CurrentInfo },
});

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
          const _data = data;
          const name = data.name;
        });
    });
  }
};

getWeatherByPosition();
</script>
