<template>
  <div class="d-flex align-items-start">
    <div
      class="nav flex-column nav-pills me-3"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <menu-button :active=true :targetView="'pandas'" :buttonText="'Pandas'" />
      <menu-button :active=false :targetView="'curl'" :buttonText="'Curl'" />
    </div>
    <div class="tab-content" id="tabContent">
      <div
        class="tab-pane fade show active"
        id="pandas"
        role="tabpanel"
      >
      Pandas
      </div>
      <div
        class="tab-pane fade show"
        id="curl"
        role="tabpanel"
      >
      Curl
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuButton from "@/components/atoms/MenuButton.vue";

export default defineComponent({
  name: "Menu",
  components: {
    MenuButton,
  },
});
</script>