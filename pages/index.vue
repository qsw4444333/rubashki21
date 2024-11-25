<script setup>
import CategoryListView from "~/views/CategoryListView.vue";

useSeoMeta({
  title: "Рубашки 21 | Главная",
  ogTitle: "Рубашки 21 | Купите школьные и повседневные рубашки в Чебоксарах",
  description:
    "Мы предоставляем на выбор большой каталог школьных и повседневых рубашек на любой вкус и цвет. Рубашки21 продоставляет вам лучшие цены, лучшее качество и большой выбор товаров. Мы находимся в Чебоксарах, доставляем по следующим районам:",
  ogDescription:
    "Мы предоставляем на выбор большой каталог школьных и повседневых рубашек на любой вкус и цвет. Рубашки21 продоставляет вам лучшие цены, лучшее качество и большой выбор товаров. Мы находимся в Чебоксарах, доставляем по следующим районам:",
});

definePageMeta({
  layout: "home",
});

const categories = [
  {
    name: "Детские рубашки",
    link: "/detskie-rubashki",
    sizeTable: "kids",
    img: "detskie-rubashki-prev.webp",
  },
  {
    name: "Подростковые рубашки",
    link: "/podrostkovye-rubashki",
    sizeTable: "teenage",
    img: "podrostkovie-rubashki.webp",
  },
];
</script>

<template>
  <div
    class="right-content h-full bg-primary relative z-10"
    style="flex: 0 0 50%"
  >
    <div
      class="right-content-inner max-w-full h-full p-10 pt-0 pb-32 ml-0 flex flex-col justify-center"
    >
      <h1 class="text-white text-6xl text-center">Рубашки</h1>
      <div class="flex items-center justify-center gap-6 mt-4">
        <category-list-view
          v-for="(category, index) in categories"
          :key="index"
          :name="category.name"
          :img="category.img"
          :link="category.link"
          :sizeTable="category.sizeTable"
        />
      </div>
    </div>
  </div>
</template>
