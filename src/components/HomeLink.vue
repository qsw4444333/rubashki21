<template>
  <nuxt-link to="/" class="to-index-page">
    <div>
      <svg
        width="26"
        height="12"
        viewBox="0 0 26 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 1L25 6M25 6L20 11M25 6H1"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <span>На главную страницу</span>
  </nuxt-link>
</template>

<style scoped>
.to-index-page {
  @apply p-2 rounded-2xl bg-primary flex w-96 items-center gap-4 justify-center transition-all shadow-primary duration-200;

  svg {
    @apply rotate-180;
  }

  span {
    @apply block text-white;
  }

  &:hover {
    @apply bg-primary-darker shadow-primary-xl;
  }
}
</style>
