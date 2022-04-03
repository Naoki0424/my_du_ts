<template>
  <div class="input-group">
    <div v-if="isLabel">
      <label class="input-group-text">{{ text }}</label>
    </div>
    <select class="form-select" id="inputGroupSelect" :disabled="action">
      <option v-for="(value, index) in items" value="index" :key="index">
        {{ value }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "SelectForm",
  props: {
    text: {
      type: String,
      default: "Default",
    },
    items: {
      type: Array as PropType<string[]>,
      required: true,
    },
    action: {
      tyoe: Boolean,
      default: false,
    },
    isLabel: {
      type: Boolean,
      default: true,
    },
  },
});
</script>