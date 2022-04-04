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
      <normal-button
        :buttonText="'結合テーブル追加'"
        @click="clickAddJoinCondition()"
      />
      <normal-button :buttonText="'実行'" />
    </div>
    <div>
      <div class="nav nav-tabs">
        <menu-button
          :active="true"
          :targetView="main"
          :index="0"
          :buttonText="'基軸'"
          @click="selectedTab = 0"
        />
        <template v-for="(num, index) in joinCondition" :key="index">
          <menu-button
            :active="false"
            :targetView="'sub' + (index + 1)"
            :index="1"
            :buttonText="'結合テーブル' + (index + 1)"
            @click="selectedTab = index + 1"
          />
        </template>
      </div>
      <div
        class="tab-content border d-flex flex-column mt-1 shadow"
        style="width: 1300px; height: 600px"
      >
        <div
          class="tab-pane fade"
          :class="{ 'show active': selectedTab == 0 }"
          id="tabContent1"
        >
          <normal-select-form
            :text="'SELECT'"
            :items="columnList"
            :action="true"
            class="p-2"
          />
          <normal-select-form :text="'FROM'" :items="tableList" class="p-2" />
          <div class="p-2" style="width: 300px">
            <normal-button
              :buttonText="'検索条件追加'"
              @click="clickAddWhereCondition()"
            />
          </div>
          <div
            v-for="(value, index) in whereCondition[selectedTab]"
            :key="index"
          >
            <group-of-where-condition :items="tableList" :isFixed="true" :selectedTableName="'tb_002'"/>
          </div>
        </div>
        <template v-for="(num, index) in joinCondition" :key="index">
          <div
            class="tab-pane fade m-2"
            :class="{ 'show active': selectedTab == index + 1 }"
            :id="'tabContent' + (index + 1)"
          >
            <div class="p-2 d-flex flex-row pb-3">
              <div class="fs-3 text-left" style="width: 130px">Left join</div>
              <normal-select-form
                :items="tableList"
                :isLabel="false"
                style="width: 300px"
              />
            </div>
            <normal-button
              :buttonText="'結合条件追加'"
              @click="clickAddWhereCondition()"
            />
            <group-of-where-condition :items="tableList" class="pt-3" :isFixed="true"/>
            <template
              v-for="(value, index) in whereCondition[selectedTab]"
              :key="index"
            >
              <group-of-where-condition :items="tableList" :isFixed="true" />
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import NormalButton from "@/components/atoms/NormalButton.vue";
import NormalSelectForm from "@/components/atoms/NormalSelectForm.vue";
import GroupOfWhereCondition from "@/components/molecules/GroupOfWhereCondition.vue";
import MenuButton from "@/components/atoms/MenuButton.vue";

export default defineComponent({
  name: "ContentDemoView",
  components: {
    NormalButton,
    NormalSelectForm,
    GroupOfWhereCondition,
    MenuButton,
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
    let joinCondition = reactive<Array<number>>([]);

    // method
    const clickAddWhereCondition = () => {
      if(whereCondition[selectedTab.value] != null) {
        whereCondition[selectedTab.value] += 1
      }
      else {
        whereCondition.push(1)
      }
    };
    const clickAddJoinCondition = () => joinCondition.push(1);

    return {
      columnList,
      tableList,
      selectedTab,
      whereCondition,
      joinCondition,
      clickAddWhereCondition,
      clickAddJoinCondition,
    };
  },
});
</script>

