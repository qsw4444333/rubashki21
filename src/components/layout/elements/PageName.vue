<script setup lang="ts">
interface Props {
  name: string;
}

defineProps<Props>();
</script>
<template>
  <div class="text-left mb-9">
    <div class="rounded-2xl p-4 bg-black w-fit shadow-primary">
      <h1 class="text-4xl text-white">{{ name }}</h1>
    </div>
  </div>
</template>
