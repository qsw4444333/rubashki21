<script setup lang="ts">
import TheVariant from "./TheVariant.vue";
import TheLabel from "./TheLabel.vue";

interface Props {
  variants: any[];
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
    <TheLabel>Выберите вариант</TheLabel>
    <div
      class="flex gap-2 justify-start items-center overflow-x-auto w-full pb-2 pt-2"
    >
      <TheVariant
        v-for="variant in variants"
        :key="variant.id"
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
