import { defineStore } from "pinia";
import { useCoreStore } from "../stores/core.js";
const core = useCoreStore();

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
  actions: {
    getCurrentWeather() {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${core.API_KEY}&units=${core.units}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          this.name = data.name;
          this.country = data.sys.country;
          this.temp = data.main.temp;
          this.tempFeel = data.main.feels_like;
          this.tempMin = data.main.temp_min;
          this.tempMax = data.main.temp_max;
          this.description = data.weather[0].description;
          this.icon = data.weather[0].icon;
          this.iconUrl = `https://openweathermap.org/img/wn/${this.icon}@2x.png`;
          this.humidity = data.main.humidity;
          this.pressure = data.main.pressure;
          this.windSpeed = data.wind.speed;
        });
    },
  },
});
