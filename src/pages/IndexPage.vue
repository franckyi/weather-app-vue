<template>
  <SearchLocation></SearchLocation>
</template>

<script>
import { defineComponent, ref } from "vue";
import SearchLocation from "src/components/SearchLocation.vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      text: ref(""),
    };
  },
  components: { SearchLocation },
});
</script>
