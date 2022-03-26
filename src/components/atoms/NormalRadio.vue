<template>
  <input
    class="form-check-input"
    type="radio"
    name="radioForSelectCsv"
    :id="index"
    @change="changeRadio(index)"
  />
  <label class="form-check-label" for="flexCheckDefault">
    {{ label }}
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NormalRadio",
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
    const changeRadio = () => {
      emit("click", props.index);
    };

    return {changeRadio}
  },
});
</script>