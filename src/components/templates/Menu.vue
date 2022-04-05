<template>
  <div class="d-flex align-items-start">
    <div
      class="nav nav-tabs flex-column nav-pills me-3"
      id="v-pills-tab"
      role="tablist"
    >
      <menu-button
        :active="tabContentType.PandasTab == refActiveContentTabIndex"
        :targetView="'pandas'"
        :buttonText="'Pandas'"
        @click="refActiveContentTabIndex = tabContentType.PandasTab"
      />
      <menu-button
        :active="tabContentType.DemoTab == refActiveContentTabIndex"
        :targetView="'demo'"
        :buttonText="'デモ'"
        @click="refActiveContentTabIndex = tabContentType.DemoTab"
      />
    </div>
    <div class="tab-content">
      <content-pandas-view
        :id="'pandas'"
        :active="tabContentType.PandasTab == refActiveContentTabIndex"
      />
      <content-demo-view :id="'demo'" :active="tabContentType.DemoTab == refActiveContentTabIndex" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MenuButton from "@/components/atoms/MenuButton.vue";
import ContentPandasView from "@/components/organisms/ContentPandasView.vue";
import ContentDemoView from "@/components/organisms/ContentDemoView.vue";
import { tabContentType } from "@/types/types";

export default defineComponent({
  name: "Menu",
  components: {
    MenuButton,
    ContentPandasView,
    ContentDemoView,
  },
  setup() {
    // data
    let refActiveContentTabIndex = ref(0);

    return { refActiveContentTabIndex, tabContentType };
  },
});
</script>