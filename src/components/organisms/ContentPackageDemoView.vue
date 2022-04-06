<template>
  <div>
    <div
      class="tab-pane fade"
      :class="{
        show: active,
        active: active,
      }"
      :id="id"
      role="tabpanel"
    >
      <h1>Package</h1>
      <div class="row">
        <div
          class="col-sm-4 p-3"
          v-for="(data, index) in packageList"
          :key="index"
        >
          <PackageCard :data="data" :targetModal="'testDialog'" />
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="testDialog"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="testDialogLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form-floating mb-3">
              <input
                class="form-control"
                id="floatingInput"
              />
              <label>ベンダーコード</label>
            </div>
            <div class="form-floating">
              <input
                class="form-control"
                id="floatingInput"
              />
              <label>地域コード</label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="testExecute()">
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PackageCardType } from "@/types/types";
import PackageCard from "@/components/molecules/PackageCard.vue";

export default defineComponent({
  name: "ContentPackageDemoView",
  components: {
    PackageCard,
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
    const packageList: Array<PackageCardType> = [
      {
        title: "XXXXXXX（運用）施工会社",
        text: "施工会社用で検索条件として設定できる内容がプロパーとは異なる",
      },
      {
        title: "XXXXXXX（設計）施工会社",
        text: "施工会社用で検索条件として設定できる内容がプロパーとは異なる",
      },
      {
        title: "XXXXXXX（設計）プロパー",
        text: "プロパー用で検索条件として設定できる内容が施工会社とは異なる。施工会社の社員からは見えない。",
      },
      {
        title: "XXXXXXX（運用）プロパー",
        text: "プロパー用で検索条件として設定できる内容が施工会社とは異なる。施工会社の社員からは見えない。",
      },
    ];

    const openDialog = () => console.log("click");
    const testExecute = () => alert('CSVが出力されるよ');

    return { packageList, openDialog, testExecute };
  },
});
</script>
