<template>
  <div
    class="tab-pane fade"
    :class="{
      show: active,
      active: active,
    }"
    :id="id"
    role="tabpanel"
  >
    <h1>Pandas</h1>
    <normal-button :buttonText="'Select'" :disable="false" />
    <import-csv-area />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NormalButton from "@/components/atoms/NormalButton.vue";
import ImportCsvArea from "@/components/organisms/ImportCsvArea.vue";

export default defineComponent({
  name: "ContentPandasView",
  components: {
    NormalButton,
    ImportCsvArea
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
});
</script>