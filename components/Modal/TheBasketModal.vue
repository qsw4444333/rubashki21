<script setup>
    import TheBasketProduct from '../Basket/TheBasketProduct.vue';

    const basket = inject("basket");
    const isBasket = inject("isBasket");
    const closeModal = inject("closeModal");

</script>

<template>
    <div class="basket-wrapper" :class="{'basket-wrapper__active': isBasket}">
        <div class="basket-empty" v-if="basket.amount === 0">
            <span>Корзина пуста</span>
        </div>
        <div class="basket-close">
            <svg @click="closeModal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
        <div class="basket-wrapper-inner">
            <div class="basket-inner-items">
                <TheBasketProduct v-for="(product, index) in basket.products" :product="product" :key="index" />
            </div>
            <div class="basket-inner-total">
                <div class="basket-inner-total__total">
                    <span>Итого</span>
                    <span>{{ basket.total }}</span>
                </div>
                <NuxtLink to="/checkout" class="basket-inner-total__btn">
                    <span>Перейти к оформлению</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style setup>

.basket-wrapper {
    @apply fixed top-0 bottom-0 right-0 w-[500px] h-full bg-white -z-30 transition-transform duration-300 translate-x-[500px] rounded-l-2xl;

    .basket-empty {
        @apply absolute left-0 right-0 top-0 bottom-0 bg-white flex items-center justify-center;

        & span{
            @apply text-3xl
        }
    }

    .basket-close {
        @apply absolute -left-24 top-0 bottom-0 flex items-center;

        svg {
            @apply w-24 h-24 stroke-white transition-all cursor-pointer;

            &:hover{
                @apply stroke-primary rotate-12;
            }
        }
    }

    .basket-wrapper-inner {
        @apply h-full p-5 flex gap-7 flex-col justify-between;

        .basket-inner-items {
            @apply flex items-start max-h-full flex-wrap gap-8 overflow-y-auto;
        }

        .basket-inner-total {
            @apply border-primary-grey border-t-2;

            .basket-inner-total__total {
                @apply flex justify-between;

                span {
                    @apply text-lg;
                    
                    &:last-child {
                        @apply select-text text-xl;

                        &::after {
                            content: " руб.";
                        }
                    }
                }
            }

            .basket-inner-total__btn {
                @apply block text-center bg-primary p-4 rounded-2xl cursor-pointer transition-colors duration-200;

                span {
                    @apply text-white;
                }

                &:hover {
                    @apply bg-primary-darker;
                }
            }
        }
    }
}

.basket-wrapper__active {
    @apply translate-x-0 z-40;
}

</style>