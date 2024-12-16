<script setup lang="ts">
import ElImg from "~/components/elements/ElImg.vue";

interface Props {
  tableSizeType: "kids" | "teenage";
}

defineProps<Props>();
</script>
<template>
  <el-img v-if="tableSizeType == 'kids'" img="kids_table.svg" />
  <el-img v-if="tableSizeType == 'teenage'" img="teenage_table.svg" />
</template>
<style scoped>
img {
  width: 100%;
  height: 90%;
  border-radius: 10px;
}
</style>
