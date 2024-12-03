<script setup lang="ts">
import BasketProduct from "~/components/Basket/BasketProduct.vue";

import { useBasketStore } from "~/store/useBasketStore";

const basketStore = useBasketStore();

const { basket } = basketStore;

const total = computed(() =>
  basket.value.reduce(
    (res, basket_item) =>
      res + basket_item.count * Number(basket_item.product.price),
    0
  )
);
</script>
<template>
  <div class="bg-white h-full">
    <div
      class="h-full flex items-center justify-center"
      v-if="basket.length < 1"
    >
      <span class="text-3xl">Корзина пуста</span>
    </div>

    <div v-else class="h-full p-5 flex gap-7 flex-col justify-between">
      <div class="flex items-start max-h-full flex-wrap gap-8 overflow-y-auto">
        <basket-product
          v-for="(basket_item, index) in basket"
          :product="basket_item.product"
          :size="basket_item.size"
          :variant="basket_item.variant"
          :count="basket_item.count"
          :key="index"
          @increase="basketStore.increaseItemBasket(basket_item.product.id)"
          @decrease="basketStore.decreaseItemBasket(basket_item.product.id)"
          @remove="basketStore.removeFromBasket(basket_item.product.id)"
        />
      </div>
      <div class="border-primary-grey border-t-2">
        <div class="flex justify-between">
          <span class="text-lg">Итого</span>
          <span class="select-text text-xl">{{ total }} руб.</span>
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
