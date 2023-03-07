<!-- <template>
  <q-input
    rounded
    dark
    standout
    bottom-slots
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
  <q-select v-model="model" :options="options" label="Standard" />
</template> -->

<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-select
        filled
        v-model="model"
        use-input
        dark
        input-debounce="0"
        label="Simple filter"
        :options="options"
        @filter="filterFn"
        style="width: 250px"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey"> No results </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCurrentWeatherStore } from "../stores/current-weather.js";
import { useCoreStore } from "../stores/core.js";

const currentWeather = useCurrentWeatherStore();
const core = useCoreStore();

let text = ref("");
const stringOptions = [];
const options = ref(stringOptions);
let model = ref(null);

function filterFn(val, update) {
  console.log(val);
  if (val === "") {
    update(() => {
      options.value = stringOptions;

      // here you have access to "ref" which
      // is the Vue reference of the QSelect
    });
    return;
  }

  getResults();

  // update(() => {
  //   const needle = val.toLowerCase();
  //   options.value = stringOptions.filter(
  //     (v) => v.toLowerCase().indexOf(needle) > -1
  //   );
  // });
}

const getResults = () => {
  console.warn("WORKS!");
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${val}&limit=5&appid=${core.API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach(
        (obj) => options.value.push(obj.name)
        // ${obj.name}, ${obj.state}, ${obj.country}
      );
    });
  // text.value = "";
};
</script>
