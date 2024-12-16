<script setup lang="ts">
import ProductVariantItem from "./ProductVariantItem.vue";
import ProductLabel from "./ProductLabel.vue";

import type { Variant } from "~/types/product";

interface Props {
  variants: Variant[];
}

defineProps<Props>();

const activeVariant = defineModel<string | number | null>({
  default: null,
});

const toggleActiveVariant = (variant_id: number) => {
  if (activeVariant.value == variant_id) {
    activeVariant.value = null;
  } else {
    activeVariant.value = variant_id;
  }
};
</script>
<template>
  <div class="w-full">
    <product-label>Выберите вариант</product-label>
    <div
      class="flex gap-2 justify-start items-center overflow-x-auto w-full pb-2 pt-2"
    >
      <product-variant-item
        v-for="variant in variants"
        :key="variant.id"
        class="transition-transform"
        :class="{
          ' scale-110': activeVariant == variant.id,
        }"
        :name="variant.name"
        :bgClr="variant.bgClr"
        @click="toggleActiveVariant(variant.id)"
      />
    </div>
  </div>
</template>
