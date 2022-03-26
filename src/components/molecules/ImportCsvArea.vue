<template>
  <div>
    <div
      class="container border border-3 rounded d-flex shadow"
      :class="{
        'justify-content-center': inputCsvList.length == 0,
        'align-items-center': inputCsvList.length == 0,
      }"
      style="width: 1300px; height: 600px"
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
            <menu-button
              :active="index == activeCsvTabIndex"
              :buttonText="value.name"
              :targetView="value.name + index"
              :index="index"
              @click="changeCsvtab(index)"
            />
          </li>
        </ul>
        <div class="tab-content">
          <normal-table
            class="tab-pane fade"
            :class="{ 'show active': index == activeCsvTabIndex }"
            :id="value.name + index"
            v-for="(value, index) in inputCsvList"
            :key="index"
            :csvData="value"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CsvType } from "@/types/types";
import NormalTable from "@/components/atoms/NormalTable.vue";
import MenuButton from "@/components/atoms/MenuButton.vue";

export default defineComponent({
  components: { NormalTable, MenuButton },
  name: "ImportCsvArea",
  props: {
    inputCsvList: {
      type: Array as PropType<CsvType[]>,
      required: true
    },
    activeCsvTabIndex: {
      type: Number,
      default: 0,
      required: true

    }
  },
  emits: [
    'dropCsvFile',
    'changeCsvtab'
  ],
  setup(props, { emit }) {
    // method
    const dropCsvFile = (e: DragEvent) => emit('dropCsvFile', e);
    const changeCsvtab = (index: number) => emit('changeCsvtab', index);

    return {
      dropCsvFile,
      changeCsvtab,
    };
  },
});
</script>