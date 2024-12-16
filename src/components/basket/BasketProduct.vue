<script setup lang="ts">
import type { Product } from "~/types/product";

interface Props {
  product: Product;
  size: string | number | null;
  variant: string | number | null;
  count: number;
}

const emits = defineEmits(["increase", "decrease", "remove"]);

defineProps<Props>();
</script>

<template>
  <div class="product-mini__item">
    <div class="product-mini__item-left">
      <NuxtImg preload :src="product.imgs.img1" />
    </div>
    <div class="product-mini__item-right">
      <div class="product-mini__item-del" @click="emits('remove')">
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3628 6.75039L11.1015 13.5004M7.48532 13.5004L7.224 6.75039M14.7525 4.34289C15.0108 4.38189 15.2676 4.42314 15.5243 4.46739M14.7525 4.34289L13.9458 14.7551C13.9129 15.1791 13.7201 15.575 13.4058 15.8638C13.0916 16.1526 12.6792 16.313 12.251 16.3129H6.33581C5.90765 16.313 5.49522 16.1526 5.181 15.8638C4.86678 15.575 4.67392 15.1791 4.641 14.7551L3.83438 4.34289M14.7525 4.34289C13.8808 4.21203 13.0046 4.11271 12.1257 4.04514M3.83438 4.34289C3.57608 4.38114 3.31929 4.42239 3.0625 4.46664M3.83438 4.34289C4.70605 4.21203 5.58224 4.11271 6.46118 4.04514M12.1257 4.04514V3.35814C12.1257 2.47314 11.4384 1.73514 10.5472 1.70739C9.71155 1.68087 8.8753 1.68087 8.03968 1.70739C7.14847 1.73514 6.46118 2.47389 6.46118 3.35814V4.04514M12.1257 4.04514C10.2403 3.90045 8.34653 3.90045 6.46118 4.04514"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="product-mini__item-name">
        <span>Белая рубашка</span>
      </div>
      <div class="product-mini__item-size">
        <span> Размер </span>
        <span
          :style="{
            color: !!product.sizes.find((s) => s.id == size)?.size ? '' : 'red',
          }"
        >
          {{ product.sizes.find((s) => s.id == size)?.size || "Не выбрано" }}
        </span>
      </div>
      <div class="product-mini__item-variant">
        <span> Вариант товара </span>
        <span
          :style="{
            color: !!product.variants.find((v) => v.id == variant)?.name
              ? ''
              : 'red',
          }"
        >
          {{
            product.variants.find((v) => v.id == variant)?.name || "Не выбрано"
          }}
        </span>
      </div>
      <div class="product-mini__item-price">
        <span> Цена за шт </span>
        <span> {{ product.price }} </span>
      </div>
      <div class="product-mini__item-amount">
        <div class="product-mini__item-amount-left" @click="emits('decrease')">
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
        <div class="product-mini__item-amount-middle">
          <span> {{ count }} </span>
        </div>
        <div class="product-mini__item-amount-right" @click="emits('increase')">
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
        <div class="product-mini__item-totalPrice">
          <span>{{ Number(product.price) * count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.product-mini__item {
  @apply flex items-start justify-start gap-3;
  flex: 0 0 100%;

  .product-mini__item-left {
    @apply w-28 h-[150px];

    img {
      @apply w-full h-full rounded-2xl;
    }
  }

  .product-mini__item-right {
    @apply relative w-3/5 flex flex-col;

    .product-mini__item-del {
      @apply absolute -right-6 cursor-pointer;

      path {
        @apply transition-colors;
      }

      &:hover path {
        @apply stroke-primary;
      }
    }

    .product-mini__item-name {
      @apply mb-2 w-full;
    }

    .product-mini__item-size,
    .product-mini__item-size,
    .product-mini__item-variant,
    .product-mini__item-price {
      @apply flex justify-between;

      & span:first-child {
        @apply text-primary-grey text-sm;
      }
    }

    .product-mini__item-price {
      span::after {
        content: " руб.";
      }
    }

    .product-mini__item-amount {
      @apply flex justify-start gap-5 items-center;

      .product-mini__item-amount-left,
      .product-mini__item-amount-right {
        @apply bg-primary flex items-center justify-center rounded-2xl p-2 transition-colors cursor-pointer;

        &:hover {
          @apply bg-primary-darker;
        }
      }

      .product-mini__item-amount-middle {
        @apply flex items-center;
      }
    }

    .product-mini__item-totalPrice {
      @apply w-full text-right;

      span {
        @apply text-22 text-primary;
      }

      span::after {
        content: " руб.";
      }
    }
  }
}
</style>
