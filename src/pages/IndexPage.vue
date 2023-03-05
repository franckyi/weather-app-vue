<template>
  <q-page class="flex flex-center column">
    <SearchLocation></SearchLocation>
    <ShortWeatherInfo></ShortWeatherInfo>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import SearchLocation from "src/components/SearchLocation.vue";
import ShortWeatherInfo from "src/components/ShortWeatherInfo.vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      text: ref(""),
    };
  },
  components: { SearchLocation, ShortWeatherInfo },
});
</script>
