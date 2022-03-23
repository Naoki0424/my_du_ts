<template>
  <div
    class="modal fade"
    :id="this.modalId"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="compareSettingModalLabel">{{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h5>CSV選択</h5>
          <div
            class="form-check"
            v-for="(inputCsv, index) in inputCsvList"
            :key="index"
          >
            <input
              class="form-check-input"
              type="radio"
              name="radioForSelectCsv"
              :id="index"
              @change="changeCsvCheckbox(index)"
            />
            <label class="form-check-label" for="flexCheckDefault">
              {{ inputCsv.name }}
            </label>
          </div>
          <h5 class="pt-3">出力する項目</h5>
          <template v-for="(key, index) in columnOfSelectedCsv" :key="index">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :key="key + index"
                :id="index"
                @change="changeColumnCheckbox(this.selectedColumn, key)"
              />
              <label class="form-check-label" for="flexCheckDefault">
                {{ key }}
              </label>
            </div>
          </template>
        </div>
        <div class="modal-footer">
          <NormalButton :buttonText="'Close'" data-bs-dismiss="modal" />
          <NormalButton
            :buttonText="'Go'"
            :disable="this.refSelectedCsv == -1"
            :buttonType="'btn-primary'"
            @click="executeSelect(inputCsvList[this.refSelectedCsv], this.selectedColumn)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, reactive } from "vue";
import { CsvType } from "@/types/types";
import NormalButton from "@/components/atoms/NormalButton.vue";
import { clickCheckbox } from "@/logic/clickEvent";
import { outputCsv } from "@/logic/csvCommon";

export default defineComponent({
  name: "SelectModal",
  components: {
    NormalButton,
  },
  props: {
    title: {
      type: String,
      default: "タイトルを設定してください",
    },
    inputCsvList: {
      type: Array as PropType<CsvType[]>,
      required: true,
    },
    modalId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // data
    const selectedColumn = reactive([]);
    const refSelectedCsv = ref(-1); // -1はデフォルト値。

    // computed
    const columnOfSelectedCsv = computed(() => {
      if (refSelectedCsv.value == -1) {
        return [];
      }
      return props.inputCsvList[refSelectedCsv.value].header;
    });

    // method
    const changeColumnCheckbox = clickCheckbox;
    const changeCsvCheckbox = (index: number) => {
      refSelectedCsv.value = index;
      selectedColumn.length = 0;
    };
    // const executeSelect = outputCsv(props.inputCsvList[refSelectedCsv.value], selectedColumn);
    const executeSelect = outputCsv

    return {
      refSelectedCsv,
      columnOfSelectedCsv,
      selectedColumn,
      changeColumnCheckbox,
      changeCsvCheckbox,
      executeSelect,
    };
  },
});
</script>