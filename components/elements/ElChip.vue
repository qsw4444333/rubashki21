<script setup lang="ts">
interface Props {
  title?: string;
}

defineProps<Props>();
</script>
<template>
  <div
    class="p-4 rounded-2xl bg-primary-darker shadow-primary text-center transition-shadow duration-200 cursor-pointer hover:shadow-primary-xl"
  >
    <span class="text-white">
      <slot>
        {{ title }}
      </slot>
    </span>
  </div>
</template>
