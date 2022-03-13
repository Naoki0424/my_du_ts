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
      <div v-else>
        <ul class="nav nav-tabs p-3" id="myTab" role="tablist">
          <li
            class="nav-item"
            role="presentation"
            v-for="(value, index) in inputCsvList"
            :key="index"
          >
            <button
              class="nav-link"
              :class="{ active: index == 0 }"
              :id="value.name + index"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              @click="changeCsvtab(index)"
            >
              {{ value.name }}
            </button>
          </li>
        </ul>
        <div
          class="tab-content"
          id="myTabContent"
          v-for="(value, index) in inputCsvList"
          :key="index"
        >
          <normal-table
            :index="index"
            :csvData="value"
            :activeCsvTabIndex="activeCsvTabIndex"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { CsvType } from "@/types/types";
import { dropFile } from "@/logic/csvCommon";
import NormalTable from "@/components/atoms/NormalTable.vue";

export default defineComponent({
  components: { NormalTable },
  name: "ImportCsvArea",
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
    const dragEnter = () => {
      console.log("dragEnter");
    };
    const changeCsvtab = (index: number) => {
      activeCsvTabIndex.value = index;
    };

    // return { dropCsvFile };
    return {
      inputCsvList,
      activeCsvTabIndex,
      dropCsvFile,
      dragEnter,
      changeCsvtab,
    };
  },
});
</script>