<template>
  <q-page class="flex flex-center">
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
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
