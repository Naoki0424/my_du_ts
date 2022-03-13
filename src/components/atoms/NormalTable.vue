<template>
  <div
    :id="csvData.name + index"
  >
    <table class="table table-hover">
      <thead>
        <tr>
          <th v-for="(column, columnNum) in csvData.header" :key="columnNum">
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, columnNum) in csvData.data" :key="columnNum">
          <td v-for="(data, cellNum) in row" :key="cellNum">
            {{ data }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CsvType } from "@/types/types";

export default defineComponent({
  name: "NormalTable",
  props: {
    csvData: {
      type: CsvType,
      default: "Default",
    },
  },
});
</script>