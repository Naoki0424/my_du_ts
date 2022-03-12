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
      <menu-button :active=false :targetView="'flow'" :buttonText="'Flow'" />
    </div>
    <div class="tab-content" id="tabContent">
      <content-pandas-view :id="'pandas'" :active="true"/>
      <content-pandas-view :id="'curl'"/>
      <content-pandas-view :id="'flow'"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuButton from "@/components/atoms/MenuButton.vue";
import ContentPandasView from "@/components/organisms/ContentPandasView.vue";

export default defineComponent({
  name: "Menu",
  components: {
    MenuButton,
    ContentPandasView
  },
});
</script>