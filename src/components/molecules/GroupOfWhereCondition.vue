<template>
  <div class="p-2 d-flex flex-row">
    <normal-select-form :items="items" :isLabel="false" style="width: 300px" />
    <div class="fs-3 text-center" style="width: 50px">=</div>
    <normal-textbox style="width: 300px" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import NormalTextbox from "@/components/atoms/NormalTextbox.vue";
import NormalSelectForm from "@/components/atoms/NormalSelectForm.vue";

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
  },
});
</script>
