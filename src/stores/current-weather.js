import { defineStore } from "pinia";

export const useCurrentWeatherStore = defineStore("current", {
  state: () => ({
    API_KEY: "61a20f5d41830810abfcc3d15f5f1b2a",
    units: "metric",
    name: null,
    lat: null,
    lon: null,
    country: null,
    temp: null,
    tempFeel: null,
    tempMin: null,
    tempMax: null,
    humidity: null,
    pressure: null,
    windSpeed: null,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    // increment() {
    //   this.counter++;
    // },
  },
});
