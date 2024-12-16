<script setup lang="ts">
import ProductLabel from "./ProductLabel.vue";

interface Props {
  sizes?: any[];
}

defineProps<Props>();

const activeSize = defineModel<string | number | null>({
  default: null,
});

const toggleActiveSize = (size_id: number) => {
  if (activeSize.value == size_id) {
    activeSize.value = null;
  } else {
    activeSize.value = size_id;
  }
};
</script>

<template>
  <div class="mb-2">
    <product-label>Выберите размер</product-label>
    <div class="flex flex-wrap gap-2">
      <div
        v-for="size in sizes"
        class="p-2 pr-3 pl-3 bg-black rounded-2xl transition-all duration-200 cursor-pointer shadow-primary hover:bg-primary-darker-xl hover:shadow-primary-xl"
        :key="size.id"
        :class="{
          'bg-primary-darker shadow-primary-xl hover:bg-primary-darker':
            activeSize === size.id,
        }"
        @click="toggleActiveSize(size.id)"
      >
        <span
          itemprop="size"
          class="text-white select-none"
          :content="size.seoSize"
          >{{ size.size }}</span
        >
      </div>
    </div>
  </div>
</template>
