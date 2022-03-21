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
    <normal-button
      :buttonText="'Select'"
      :disable="false"
      @click="clickSelect"
    />
    <import-csv-area
      @dropCsvFile="dropCsvFile"
      @changeCsvtab="changeCsvtab"
      :inputCsvList="inputCsvList"
      :activeCsvTabIndex="activeCsvTabIndex"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import NormalButton from "@/components/atoms/NormalButton.vue";
import ImportCsvArea from "@/components/organisms/ImportCsvArea.vue";
import { CsvType } from "@/types/types";
import { dropFile } from "@/logic/csvCommon";

export default defineComponent({
  name: "ContentPandasView",
  components: {
    NormalButton,
    ImportCsvArea,
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
  setup() {
    // data
    let inputCsvList = reactive<Array<CsvType>>([]);
    let activeCsvTabIndex = ref(0);

    // method
    const dropCsvFile = async (e: DragEvent) => {
      const csv = await dropFile(e);
      if (csv) {
        inputCsvList.push(csv);
      } else {
        alert("エラーです");
      }
    };
    const changeCsvtab = (index: number) => activeCsvTabIndex.value = index;

    return { inputCsvList, dropCsvFile, activeCsvTabIndex, changeCsvtab };
  },
});
</script>