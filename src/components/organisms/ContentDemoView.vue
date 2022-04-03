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
    <h1>SQL</h1>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <normal-button :buttonText="'パッケージ'" />
      <normal-button :buttonText="'テーブル追加'" />
      <normal-button :buttonText="'実行'" />
    </div>
    <div>
      <div
        class="border border-3 d-flex flex-column shadow mt-1"
        style="width: 1300px; height: 600px"
      >
        <normal-select-form
          :text="'SELECT'"
          :items="columnList"
          :action="true"
          class="p-2"
        />
        <normal-select-form :text="'FROM'" :items="tableList" class="p-2" />
        <div class="p-2" style="width: 300px">
          <normal-button :buttonText="'検索条件追加'" @click="clickAddWhereCondition()"/>
        </div>
        <div v-for="(value, index) in whereCondition[selectedTab]" :key="index">
          <group-of-where-condition :items="tableList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import NormalButton from "@/components/atoms/NormalButton.vue";
import NormalSelectForm from "@/components/atoms/NormalSelectForm.vue";
import GroupOfWhereCondition from "@/components/molecules/GroupOfWhereCondition.vue";

export default defineComponent({
  name: "ContentDemoView",
  components: {
    NormalButton,
    NormalSelectForm,
    GroupOfWhereCondition,
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
    const columnList = ["*"];
    const tableList = ["tb_001", "tb_002", "tb_003", "tb_004"];
    let selectedTab = ref(0);
    let whereCondition = reactive<Array<number>>([0]);

    // method
    const clickAddWhereCondition = () => whereCondition[selectedTab.value] += 1;

    return { columnList, tableList, selectedTab, whereCondition, clickAddWhereCondition};
  },
});
</script>

