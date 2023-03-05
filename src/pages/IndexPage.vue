<template>
  <q-page class="flex flex-center column">
    <SearchLocation></SearchLocation>
    <CurrentInfo></CurrentInfo>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import SearchLocation from "src/components/SearchLocation.vue";
import CurrentInfo from "src/components/CurrentInfo.vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      text: ref(""),
    };
  },
  components: { SearchLocation, CurrentInfo },
});
</script>
