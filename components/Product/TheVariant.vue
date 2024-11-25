<script setup>
const props = defineProps({
  name: String,
  bgClr: String,
  textClr: String,
});
</script>

<template>
  <div class="catalog-item__variant" :style="{ 'background-color': bgClr }">
    <div class="catalog-item__variant-active">
      <svg
        width="10"
        height="10"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.8125 7.97266L6.5625 11.7227L12.1875 3.28516"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <span itemprop="color" :content="name" :style="{ color: textClr }">{{
      name
    }}</span>
  </div>
</template>

<style scoped>
.catalog-item__variant {
  @apply relative rounded-2xl pl-2 pr-2 cursor-pointer transition-shadow duration-200 shadow-primary cursor-pointer;

  span {
    @apply select-none text-white;
  }

  &:hover {
    @apply shadow-primary-xl;
  }

  .catalog-item__variant-active {
    @apply opacity-0 absolute -top-2 -right-2 p-1 bg-black flex items-center justify-center rounded-lg;
  }
}

.activeVariant {
  .catalog-item__variant-active {
    @apply opacity-100;
  }
}
</style>
