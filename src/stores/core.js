import { defineStore } from "pinia";

export const useCoreStore = defineStore("core", {
  state: () => ({
    API_KEY: "61a20f5d41830810abfcc3d15f5f1b2a",
    units: "metric",
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
