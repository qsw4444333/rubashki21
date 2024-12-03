<script setup lang="ts">
import Product from "~/components/Product/Product.vue";

import products from "~/data/products";
</script>
<template>
  <div class="w-full">
    <div class="flex gap-8 items-start flex-wrap justify-start">
      <Product v-for="item in products" :key="item.articul" :item="item" />
    </div>
  </div>
</template>
