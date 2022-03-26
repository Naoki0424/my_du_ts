<template>
  <template v-for="(key, index) in keyList" :key="index">
    <div class="form-check">
      <NormalCheckbox
        :index="index"
        :label="key"
        @click="changeCsv"
      />
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import NormalCheckbox from "@/components/atoms/NormalCheckbox.vue";

export default defineComponent({
  name: "GroupOfCheckbox",
  components: {
    NormalCheckbox,
  },
  emits: ['changeCheckbox'],
  props: {
    keyList: {
      type: Array as PropType<string[]>,
      required: true,
    },
    selectedKeyList: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup(prop, {emit}) {
      const changeCsv = (key: string) => emit('changeCheckbox', prop.selectedKeyList, key);
      return {changeCsv};
  }
});
</script>
