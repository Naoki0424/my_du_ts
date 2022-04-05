<template>
  <div class="p-2 d-flex flex-row">
    <div v-if="isFixed">
      <NormalSelectForm :items="items" :isLabel="false" :action="isFixed" style="width: 200px" :selectedText="selectedTableName"/>
    </div>
    <div v-else>
      <NormalSelectForm :items="items" :isLabel="false" :action="isFixed" style="width: 200px"/>
    </div>
    <NormalSelectForm :items="testColumnList" :isLabel="false" style="width: 200px" />
    <NormalSelectForm :items="comparisonOperatorList" :isLabel="false" style="width: 200px" class="px-3"/>
    <template v-if="allFree">
      <NormalTextbox style="width: 200px" />
    </template>
    <template v-else>
      <NormalSelectForm :items="items" :isLabel="false" style="width: 200px"/>
      <NormalSelectForm :items="testColumnList" :isLabel="false" style="width: 200px" />
    </template>
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
    },
    allFree: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {comparisonOperatorList, testColumnList}
  }
});
</script>
