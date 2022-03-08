<template>
  <button
    class="nav-link"
    :class="{
      'active': active
    }"
    data-bs-toggle="pill"
    :data-bs-target="'#' + targetView"
    type="button"
    role="tab"
  >
    {{buttonText}}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuButton",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    targetView: {
        type: String,
        required: true
    },
    buttonText: {
        type: String,
        default: "Default"
    }
  }
});
</script>