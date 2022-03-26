<template>
  <input
    class="form-check-input"
    type="checkbox"
    :key="label + index"
    :id="index"
    @change="changeCheckbox(label)"
  />
  <label class="form-check-label" for="flexCheckDefault">
    {{ label }}
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NormalCheckbox",
  emits: ["click"],
  props: {
    label: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const changeCheckbox = (label: string) => emit("click", label);
    return { changeCheckbox };
  },
});
</script>