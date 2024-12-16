<script setup>
defineProps({
  name: String,
  value: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="w-full flex items-center justify-start gap-2">
    <div>
      <span class="text-primary-grey">{{ name }}</span>
    </div>
    <div>
      <span itemprop="material" class="select-text" :content="value">{{
        value
      }}</span>
    </div>
  </div>
</template>
