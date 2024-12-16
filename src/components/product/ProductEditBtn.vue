<script setup lang="ts">
import type { BasketItem } from "~/store/useBasketStore";

interface Props {
  basketItem: BasketItem;
}

const emits = defineEmits(["increase", "decrease"]);

defineProps<Props>();
</script>

<template>
  <div class="product-edit-btn">
    <div class="product-btn-inner">
      <div class="product-btn__btns">
        <div class="product-btn-left" @click="emits('decrease')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#FFF"
            class="size-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
          </svg>
        </div>
        <div class="product-btn-middl">
          <span>{{ basketItem.count }}</span>
        </div>
        <div class="product-btn-right" @click="emits('increase')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#FFF"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
      <div class="product-btn__price">
        <span>{{ Number(basketItem.product.price) * basketItem.count }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-edit-btn {
  @apply w-full mt-4;

  .product-btn-inner {
    @apply flex items-center justify-center w-full pt-2 pb-2 bg-primary rounded-2xl gap-5;

    .product-btn__btns {
      @apply flex items-center justify-between gap-4;

      .product-btn-middl span {
        @apply text-18 text-white;
      }

      .product-btn-right,
      .product-btn-left {
        @apply bg-primary-darker rounded-2xl p-2 cursor-pointer transition-colors;

        &:hover {
          @apply bg-primary-darker-xl;
        }
      }
    }

    .product-btn__price {
      @apply flex items-center justify-center;

      span {
        @apply text-white text-24;

        &::after {
          content: " руб.";
        }
      }
    }
  }
}
</style>
