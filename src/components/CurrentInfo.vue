<template>
  <q-item>
    <q-item-section top avatar>
      <q-avatar color="primary" text-color="white" icon="water_drop" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Humidity</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-item-label>5 min ago</q-item-label>
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
import { ref, defineComponent } from "vue";

const columns = [
  {
    name: "desc",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
  },
];

export default defineComponent({
  name: "CurrentInfo",
  setup() {
    return {
      filter: ref(""),
      columns,
      rows,
    };
  },
});
</script>
