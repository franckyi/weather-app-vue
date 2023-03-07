import { defineStore } from "pinia";

export const useCurrentWeatherStore = defineStore("current", {
  state: () => ({
    name: null,
    text: null,
    lat: null,
    lon: null,
    country: null,
    tempUnit: null,
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
  getters: {},
  actions: {},
});
