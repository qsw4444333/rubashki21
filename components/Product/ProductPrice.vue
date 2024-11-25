<script setup>
const props = defineProps({
  price: String,
});
</script>

<template>
  <div
    class="w-full text-right mb-2"
    itemprop="offers"
    itemscope
    itemtype="https://schema.org/Offer"
  >
    <meta itemprop="priceCurrency" content="RUB" />
    <span
      class="text-4xl text-primary-darker select-text"
      itemprop="price"
      :content="props.price"
      >{{ props.price }} руб.</span
    >
  </div>
</template>
