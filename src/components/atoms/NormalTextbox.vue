<template>
  <div>
    <input
      class="form-control"
      :placeholder="placeholderText"
      :disabled="action"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NormalTextbox",
  props: {
    action: {
      tyoe: Boolean,
      default: false,
    },
    placeholderText: {
      type: String,
      default: "入力してください",
    },
  },
});
</script>
