<template>
  <div>
    <div
      class="container border border-3 rounded d-flex shadow"
      :class="{
        'justify-content-center': inputCsvList.length == 0,
        'align-items-center': inputCsvList.length == 0,
      }"
      style="width: 1300px; height: 600px"
      @dragenter="dragEnter"
      @dragenter.prevent
      @dragover.prevent
      @drop.prevent="dropCsvFile"
    >
      <div v-if="inputCsvList.length == 0">ファイルアップロード</div>
      <div v-else>テスト</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
// import { defineComponent, reactive, ref } from "vue";
import { CsvType } from "@/types/types";
import { dropFile } from "@/logic/csvCommon";

export default defineComponent({
  name: "ImportCsvArea",
  setup() {
    // data
    let inputCsvList = reactive<Array<CsvType>>([]);
    // let activeCsvTabIndex = ref(0);

    // method
    const dropCsvFile = async (e: DragEvent) => {
      const csv = await dropFile(e);
      if (csv) {
        alert("成功です");
        inputCsvList.push(csv);
      } else {
        alert("エラーです");
      }
    };
    const dragEnter = () => {
      console.log("dragEnter");
    };

    // return { dropCsvFile };
    return { inputCsvList, dropCsvFile, dragEnter };
  },
});
</script>