<template>
  <div class="card shadow">
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-text">
        {{ data.text }}
      </p>
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-toggle="modal"
        :data-bs-target="'#' + targetModal"
      >
        execute
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PackageCardType } from "@/types/types";

export default defineComponent({
  name: "PackageCard",
  props: {
    data: {
      type: PackageCardType,
      required: true,
    },
    targetModal: {
        type: String,
        required: true,
    }
  }
});
</script>