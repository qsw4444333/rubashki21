<script setup>
    import TheContentBlock from '~/components/Body/TheContentBlock.vue';
    import TheLine from '~/components/Icons/TheLine.vue';
    import PageName from '~/components/PageName.vue';
    import TheIndexLink from '~/components/TheIndexLink.vue';
    import CheckoutProduct from '~/components/Checkout/CheckoutProduct.vue';
    import TheRegion from '~/components/Region/TheRegion.vue';
    import IconViber from '~/components/Icons/IconViber.vue';
    import IconWhatsApp from '~/components/Icons/IconWhatsApp.vue';

    const tableSizeType = "kids";

    const SEO = inject("SEO");

    useSeoMeta({
        title: SEO.value.checkout.title,
        ogTitle: SEO.value.checkout.ogTitle,
        description: SEO.value.checkout.description,
        ogDescription: SEO.value.checkout.ogDescription,
        ogImage: SEO.value.checkout.ogImage,
    });

    const basket = inject("basket");
    const regions = inject("regions");
    const closeModal = inject("closeModal");

    const activeRegion = ref('');
    const activeSocial = ref('');

    closeModal();

    const activeLink = ref('');
    const phone = inject('phone');

    const IS_MOBILE = inject('IS_MOBILE');

    const setActiveRegion = (region) => {
        activeRegion.value = region;
    };

    const setActiveSocial = (social) => {
        activeSocial.value = social;
        setActiveLink(social);
    };

    const generateText = () => {
        return "Привет, текст!"
    };

    const setActiveLink = (social) => {
        let link = "";

        if (social == 'viber') {
            if (IS_MOBILE.value) {
                console.log("IS_MOBILE");
                link = encodeURI(`viber://add?number=${phone}?text=` + generateText());
            }
            else {
                console.log("NOT IS_MOBILE");
                link = encodeURI(`viber://chat?number=+${phone}?text=` + generateText());
            }
        }
        else {
            link = encodeURI(`https://wa.me/${phone}?text=` + generateText());
        }

        activeLink.value = link;
    };

</script>

<template>
    <TheLine />
    <TheContentBlock>
        <TheIndexLink class="mb-2" />
        <PageName name="Оформление заказа" />
        <div class="checkout-content">
            <div class="checkout-inner">
                <div class="checkout-inner__item">
                    <div class="checkout-step-1">
                        <div class="checkout-step-name">
                            <span>Товары</span>
                        </div>
                        <div class="checkout-products">
                            <CheckoutProduct v-for="(product, index) in basket.products" :product="product" :key="index" />
                        </div>
                        <div class="checkout-products-total">
                            <span>Итого</span>
                            <span>{{ basket.total }} руб</span>
                        </div>
                    </div>
                    <div class="checkout-step-2">
                        <div class="checkout-step-name">
                            <span>Доставка в</span>
                        </div>
                        <div class="checkout-regions">
                            <TheRegion @click="setActiveRegion(region)" :class="{'active-region': activeRegion == region}" v-for="(region, index) in regions" :name="region" :key="index" />
                        </div>
                    </div>
                    <div class="checkout-step-3">
                        <div class="checkout-step-name">
                            <span>Что дальше?</span>
                        </div>
                        <div class="checkout-to-social">
                            <p>выберите мессенджер, в котором вам будет удобнее общаться с нами, нажмите на кнопку перейти, вы попадёте в чат viber или whatsapp, отправьте сообщение, которое у вас уже будет написано.</p>
                        </div>
                        <div class="checkout-socials">
                            <div class="checkout-social" :class="{'checkout-social-active': activeSocial == 'viber'}" @click="setActiveSocial('viber')">
                                <div class="checkout-social__icon">
                                    <IconWhatsApp width="24px" height="24px" clr="#FFF" />
                                </div>
                                <div class="checkout-social__name">
                                    <span>viber</span>
                                </div>
                            </div>
                            <div class="checkout-social" :class="{'checkout-social-active': activeSocial == 'whatsapp'}" @click="setActiveSocial('whatsapp')">
                                <div class="checkout-social__icon">
                                    <IconViber width="24px" height="24px" clr="#FFF" />
                                </div>
                                <div class="checkout-social__name">
                                    <span>whatsapp</span>
                                </div>
                            </div>
                        </div>
                        <a :href="activeLink" class="checkout-social-btn" v-if="activeLink != ''" @click="goToSocial">
                            <span>Перейти</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </TheContentBlock>
</template>

<style scoped>
    .checkout-content {
        @apply w-full h-full;

        .checkout-inner {
            @apply w-full h-full bg-primary rounded-2xl p-5 shadow-primary transition-shadow duration-200;

            &:hover {
                @apply shadow-primary-xl;
            }


            .checkout-inner__item {
                @apply flex items-start justify-between mt-4;

                .checkout-step-1, .checkout-step-2, .checkout-step-3 {
                    @apply flex flex-col gap-3 w-[400px];

                    .checkout-step-name {
                        @apply p-7 rounded-2xl bg-white pl-32 pr-32 text-center;

                        span {
                            @apply text-black cursor-default text-18;
                        }
                    }
                }

                .checkout-step-1 {
                    .checkout-products {
                        @apply max-h-[400px] overflow-y-auto;
                    }

                    .checkout-products-total {
                        @apply pt-2 flex justify-between border-t-2 border-white;

                        span {
                            @apply block text-24 cursor-text select-text;

                            &:first-child {
                                &:hover {
                                    @apply text-black;
                                }
                            }

                            &:last-child {
                                @apply text-white;
                                
                            }
                        }
                    }
                }

                .checkout-step-2 {
                    .checkout-regions {
                        @apply flex items-center justify-start flex-wrap gap-2;

                        .region-block {
                            @apply bg-black;
                        }

                        .active-region {
                            @apply bg-primary-lighter;
                        }
                    }
                }

                .checkout-step-3 {
                    .checkout-to-social {
                        p {
                            @apply text-white;
                            letter-spacing: 1px;
                        }
                    }

                    .checkout-socials {
                        @apply flex items-center justify-between;

                        .checkout-social {
                            @apply cursor-pointer;

                            .checkout-social__icon {
                                @apply bg-black transition-colors duration-200;
                            }

                            .checkout-social__icon {
                                @apply rounded-2xl p-2 pl-16 pr-16 cursor-pointer shadow-primary transition-colors duration-200;
                            }

                            &:hover {
                                .checkout-social__icon {
                                    @apply bg-primary-lighter;
                                }
                            }

                            .checkout-social__name {
                                @apply text-center;

                                span {
                                    @apply text-white;
                                    letter-spacing: 1px;
                                }
                            }
                    
                        }

                        .checkout-social-active {
                            .checkout-social__icon {
                                @apply bg-primary-lighter;
                            }
                        }
                    }
                    .checkout-social-btn {
                        @apply mt-5 rounded-2xl bg-black p-6 text-center cursor-pointer transition-all duration-200 shadow-primary;

                        span {
                            @apply select-none text-white;

                            &:hover {
                                @apply text-white;
                            }
                        }

                        &:hover {
                            @apply bg-primary-lighter shadow-primary-xl;
                        }
                    }
                }
            }
        }
    }
</style>