<template>
  <Menu/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menu from './components/templates/Menu.vue'

export default defineComponent({
  name: 'App',
  components: {
    Menu
  }
});
</script>