<script setup lang="ts">
interface Props {
  sizeTable: "kids" | "teenage";
}

defineProps<Props>();
</script>
<template>
  <div class="w-full flex justify-center flex-wrap">
    <slot name="title">
      <h2 class="text-28">
        Таблица размеров
        <span
          v-if="sizeTable == 'kids'"
          class="cursor-text text-28 text-primary select-text"
          >детских</span
        ><span
          class="cursor-text text-28 text-primary select-text"
          v-if="sizeTable == 'teenage'"
          >подростковых</span
        >
        рубашек
      </h2>
    </slot>

    <NuxtImg
      v-if="sizeTable == 'kids'"
      preload
      class="w-[590px]"
      src="kids_table.svg"
    />
    <NuxtImg
      v-if="sizeTable == 'teenage'"
      class="w-[590px]"
      preload
      src="teenage_table.svg"
    />
  </div>
</template>
