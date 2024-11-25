<script setup lang="ts">
import CatalogListView from "~/views/CatalogListView.vue";
import RegionsListView from "~/views/RegionsListView.vue";
import SizeTableView from "~/views/SizeTableView.vue";

const TABLE_SIZE_TYPE = "teenage";

useSeoMeta({
  title: "Рубашки 21 | Купите школьные и повседневные рубашки в Чебоксарах",
  ogTitle: "Рубашки 21 | Купите школьные и повседневные рубашки в Чебоксарах",
  description:
    "Мы предоставляем на выбор большой каталог школьных и повседневых рубашек на любой вкус и цвет. Рубашки21 продоставляет вам лучшие цены, лучшее качество и большой выбор товаров. Мы находимся в Чебоксарах, доставляем по следующим районам:",
  ogDescription:
    "Мы предоставляем на выбор большой каталог школьных и повседневых рубашек на любой вкус и цвет. Рубашки21 продоставляет вам лучшие цены, лучшее качество и большой выбор товаров. Мы находимся в Чебоксарах, доставляем по следующим районам:",
});

definePageMeta({
  title: "Подростковые рубашки",
});
</script>
<template>
  <div>
    <catalog-list-view />
    <div class="flex mt-20 justify-between">
      <regions-list-view />
      <size-table-view :sizeTable="TABLE_SIZE_TYPE" />
    </div>
  </div>
</template>
