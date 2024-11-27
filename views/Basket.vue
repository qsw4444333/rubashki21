<script setup>
import TheBasketProduct from "~/components/Basket/TheBasketProduct.vue";

const basket = ref({});
</script>

<template>
  <div class="bg-white h-full">
    <div class="h-full flex items-center justify-center" v-if="!basket.amt">
      <span class="text-3xl">Корзина пуста</span>
    </div>

    <div v-else class="h-full p-5 flex gap-7 flex-col justify-between">
      <div class="flex items-start max-h-full flex-wrap gap-8 overflow-y-auto">
        <TheBasketProduct
          v-for="(product, index) in basket.products"
          :product="product"
          :key="index"
        />
      </div>
      <div class="border-primary-grey border-t-2">
        <div class="flex justify-between">
          <span class="text-lg">Итого</span>
          <span class="select-text text-xl">{{ basket.total }} руб.</span>
        </div>
        <NuxtLink
          to="/checkout"
          class="block text-center bg-primary p-4 rounded-2xl cursor-pointer transition-colors duration-200 hover:bg-primary-darker"
        >
          <span class="text-white">Перейти к оформлению</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
