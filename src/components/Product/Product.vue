<script setup lang="ts">
import ElImg from "../elements/ElImg.vue";

import ProductSizes from "~/components/Product/ProductSizes.vue";
import ProductVariants from "~/components/Product/ProductVariants.vue";

import ProductPrice from "./ProductPrice.vue";
import ProductProperty from "./ProductProperty.vue";

import ProductBtn from "./ProductBtn.vue";

import ProductEditBtn from "./ProductEditBtn.vue";

import { useBasketStore } from "~/store/useBasketStore";

import type { Product } from "~/types/product";

interface Props {
  item: Product;
}

const props = defineProps<Props>();

const basketStore = useBasketStore();

const { basket } = basketStore;

const productBasket = computed(() =>
  basket.value.find((basket_item) => basket_item.product.id == props.item.id)
);

const form = reactive({
  size: null,
  variant: null,
});

watch(form, () => {
  basketStore.addToBasket({ product: props.item, ...form });
});
</script>
<template>
  <div
    itemscope
    itemtype="https://schema.org/Product"
    class="w-96 bg-white p-4 rounded-2xl shadow-primary transition-all duration-200 border-primary-darker border-2 hover:shadow-primary-xl hover:scale-105 hover:border-primary-darker-xl"
  >
    <div class="flex justify-between w-full gap-3">
      <el-img :img="item.imgs.img1" width="168px" />
      <el-img :img="item.imgs.img2" width="168px" />
    </div>
    <div class="mt-2 mb-2">
      <h3 class="text-2xl text-black" itemprop="name">{{ item.name }}</h3>
    </div>
    <product-sizes v-model="form.size" :sizes="item.sizes" />
    <product-variants
      v-if="form.size || form.variant"
      v-model="form.variant"
      :variants="item.variants"
    />
    <product-property name="Материал:" :value="item.material" />
    <product-property
      class="mb-2"
      name="Вид застёжки:"
      :value="item.claspType"
    />
    <product-price :price="item.price" />
    <product-btn
      v-if="!productBasket"
      @click="basketStore.addToBasket({ product: props.item, ...form })"
    />
    <div v-else class="overflow-y-auto mt-4">
      <product-edit-btn
        :basket-item="productBasket"
        @decrease="basketStore.decreaseItemBasket(productBasket.product.id)"
        @increase="basketStore.increaseItemBasket(productBasket.product.id)"
      />
    </div>
  </div>
</template>
