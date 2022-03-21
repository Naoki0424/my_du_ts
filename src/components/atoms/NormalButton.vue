<template>
  <button
      type="button"
      class="btn btn-secondary"
      :disabled="disable"
  >
    {{buttonText}}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NormalButton",
  props: {
    disable: {
      type: Boolean,
      default: true
    },
    buttonText: {
        type: String,
        default: "Default"
    }
  }
});
</script>