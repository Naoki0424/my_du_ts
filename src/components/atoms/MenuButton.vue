<template>
  <button
    class="nav-link"
    :class="{
      'active': active
    }"
    data-bs-toggle="pill"
    :data-bs-target="targetView"
    :aria-controls="targetView"
    type="button"
    role="tab"
    :aria-selected="active"
    @click="changeCsvtab"
  >
    {{buttonText}}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuButton",
  emits: ['changeCsvtab'],
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
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props, context) {
    const click = () => {
      context.emit('changeCsvtab', props.index)
    }
    return {click}
  }
});
</script>