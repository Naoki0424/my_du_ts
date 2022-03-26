<template>
  <button
    type="button"
    :class="'btn' + ' ' + this.buttonType"
    :disabled="disable"
  >
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NormalButton",
  props: {
    disable: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: "Default",
    },
    buttonType: {
      type: String,
      default: "btn-secondary",
    },
  }
});
</script>