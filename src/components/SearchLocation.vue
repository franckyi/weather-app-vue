<template>
  <h3 text-h3>New York</h3>
  <q-input
    rounded
    standout
    bottom-slots
    v-model="text"
    label="Location"
    counter
  >
    <template v-slot:prepend>
      <q-icon name="place" />
    </template>
    <template v-slot:append>
      <q-icon name="close" @click="text = ''" class="cursor-pointer" />
    </template>

    <template v-slot:hint> E.g. Rome </template>
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
