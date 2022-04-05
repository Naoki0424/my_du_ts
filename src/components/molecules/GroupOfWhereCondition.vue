<template>
  <div class="p-2 d-flex flex-row">
    <div v-if="isFixed">
      <normal-select-form :items="items" :isLabel="false" :action="isFixed" style="width: 300px" :selectedText="selectedTableName"/>
    </div>
    <div v-else>
      <normal-select-form :items="items" :isLabel="false" :action="isFixed" style="width: 300px"/>
    </div>
    <normal-select-form :items="testColumnList" :isLabel="false" style="width: 300px" />
    <normal-select-form :items="comparisonOperatorList" :isLabel="false" style="width: 200px" class="px-3"/>
    <normal-textbox style="width: 300px" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import NormalTextbox from "@/components/atoms/NormalTextbox.vue";
import NormalSelectForm from "@/components/atoms/NormalSelectForm.vue";
import { comparisonOperatorList, testColumnList } from "@/types/types";

export default defineComponent({
  name: "GroupOfWhereCondition",
  components: {
    NormalSelectForm,
    NormalTextbox,
  },
  props: {
    items: {
      type: Array as PropType<string[]>,
      required: true,
    },
    isFixed: {
      tyoe: Boolean,
      default: false,
    },
    selectedTableName: {
      type: String,
      required: false
    }
  },
  setup() {
    return {comparisonOperatorList, testColumnList}
  }
});
</script>
