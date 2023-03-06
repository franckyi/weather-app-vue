<template>
  <q-input
    rounded
    dark
    standout
    bottom-slots
    v-model="text"
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
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SearchLocation",
  setup() {
    return {
      text: ref(""),
    };
  },
});
</script>
