<template>
  <q-item>
    <q-item-section top avatar>
      <q-avatar color="primary" text-color="white" icon="water_drop" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Humidity</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-item-label>{{ humidity }}</q-item-label>
    </q-item-section>
  </q-item>

  <q-item>
    <q-item-section top avatar>
      <q-avatar color="primary" text-color="white" icon="air" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Wind speed</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-item-label>5 min ago</q-item-label>
    </q-item-section>
  </q-item>

  <q-item>
    <q-item-section top avatar>
      <q-avatar color="primary" text-color="white" icon="thermostat" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Pressure</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-item-label>5 min ago</q-item-label>
    </q-item-section>
  </q-item>

  <q-item>
    <q-item-section top avatar>
      <q-avatar color="primary" text-color="white" icon="water" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Sea level</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-item-label>5 min ago</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator spaced inset="item" />
</template>

<script>
import { ref, defineComponent, defineProps } from "vue";

const props = defineProps({
  humidity: Number,
});

export default defineComponent({
  name: "CurrentInfo",
  setup() {
    return {};
  },
});
</script>
