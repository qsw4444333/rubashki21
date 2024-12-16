<script setup lang="ts">
import type { Product } from "~/types/product";

interface Props {
  product: Product;
  size: string | number | null;
  variant: string | number | null;
  count: string | number;
}

defineProps<Props>();
</script>
<template>
  <div class="product-mini__item">
    <div class="product-mini__item-left">
      <NuxtImg preload :src="product.imgs.img1" />
    </div>
    <div class="product-mini__item-right">
      <div class="product-mini__item-name">
        <span>Белая рубашка</span>
      </div>
      <div class="product-mini__item-size">
        <span> Размер </span>
        <span>
          {{ product.sizes.find((s) => s.id == size)?.size || "Не выбрано" }}
        </span>
      </div>
      <div class="product-mini__item-variant">
        <span> Вариант товара </span>
        <span>
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
        <div class="product-mini__item-amount-middle">
          <span class="mr-2">Кол-во </span>
          <span>{{ count }}</span>
        </div>
        <div class="product-mini__item-totalPrice">
          <span>{{ Number(product.price) * Number(count) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-mini__item {
  @apply mb-6;

  .product-mini__item-right {
    .product-mini__item-amount {
      @apply flex-wrap gap-3;
    }

    .product-mini__item-amount-right,
    .product-mini__item-amount-left {
      @apply bg-primary-darker;

      &:hover {
        @apply bg-primary-darker-xl;
      }
    }

    .product-mini__item-amount-middle {
      @apply block;

      span:first-child,
      span:last-child {
        @apply text-white cursor-text select-text;
      }

      span:first-child {
        @apply select-none;
      }

      span:last-child {
        @apply text-black;
      }
    }

    .product-mini__item-name {
      span {
        @apply text-white cursor-default text-18 select-text cursor-text;
      }
    }

    .product-mini__item-size,
    .product-mini__item-size,
    .product-mini__item-variant,
    .product-mini__item-price {
      @apply flex justify-between;

      span {
        @apply cursor-text select-text;
      }

      & span:first-child {
        @apply text-white text-sm select-none;
      }

      & span:last-child:hover {
        &:hover {
          @apply text-black;
        }
      }
    }

    .product-mini__item-totalPrice {
      span {
        @apply text-white cursor-text select-text;
      }
    }
  }
}
</style>
