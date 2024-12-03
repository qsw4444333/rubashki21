<script setup lang="ts">
import ElChip from "~/components/elements/ElChip.vue";

const regions = [
  "Чебоксары",
  "Новочебоксарск",
  "Козловка",
  "Урмары",
  "Вурнары",
  "Воротынец",
  "Новые тарьялы",
];
</script>

<template>
  <div class="regions-block" style="flex: 0 0 40%">
    <h2 class="text-28">Регионы доставки</h2>
    <div class="flex items-center justify-start flex-wrap gap-3 mt-5">
      <el-chip v-for="(region, index) in regions" :key="index">
        {{ region }}
      </el-chip>
    </div>
  </div>
</template>
