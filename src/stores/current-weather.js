import { defineStore } from "pinia";

export const useCurrentWeatherStore = defineStore("current", {
  state: () => ({
    name: null,
    lat: null,
    lon: null,
    country: null,
    temp: null,
    tempFeel: null,
    tempMin: null,
    tempMax: null,
    description: null,
    icon: null,
    iconUrl: null,
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
    getLatLon() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
      });
    },
  },
});
