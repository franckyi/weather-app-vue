<template>
  <q-page class="flex flex-center column">
    <SearchLocation></SearchLocation>
    <CurrentInfo></CurrentInfo>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import SearchLocation from "src/components/SearchLocation.vue";
import CurrentInfo from "src/components/CurrentInfo.vue";

const pName = ref(null);
</script>
