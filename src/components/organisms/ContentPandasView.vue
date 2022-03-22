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
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <normal-button
        :buttonText="'Select'"
        :disable="false"
        data-bs-toggle="modal"
        data-bs-target="#selectModal"
        :disabled="this.inputCsvList.length < 1"
      />
    </div>
    <import-csv-area
      @dropCsvFile="dropCsvFile"
      @changeCsvtab="changeCsvtab"
      :inputCsvList="inputCsvList"
      :activeCsvTabIndex="refActiveCsvTabIndex"
    />

    <SelectModal :modalId="'selectModal'" :title="'Select'" :inputCsvList="this.inputCsvList" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import NormalButton from "@/components/atoms/NormalButton.vue";
import ImportCsvArea from "@/components/molecules/ImportCsvArea.vue";
import SelectModal from "@/components/organisms/SelectModal.vue";
import { CsvType } from "@/types/types";
import { dropFile } from "@/logic/csvCommon";

export default defineComponent({
  name: "ContentPandasView",
  components: {
    NormalButton,
    ImportCsvArea,
    SelectModal,
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
    let refActiveCsvTabIndex = ref(0);

    // method
    const dropCsvFile = async (e: DragEvent) => {
      const csv = await dropFile(e);
      if (csv) {
        inputCsvList.push(csv);
      } else {
        alert("エラーです");
      }
    };
    const changeCsvtab = (index: number) => (refActiveCsvTabIndex.value = index);
    const clickSelectButton = () => console.log("clickSelectButton");

    return {
      inputCsvList,
      dropCsvFile,
      refActiveCsvTabIndex,
      changeCsvtab,
      clickSelectButton,
    };
  },
});
</script>