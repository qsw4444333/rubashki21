<script setup>
import ElChip from "~/components/elements/ElChip.vue";

import HomeLink from "~/components/HomeLink.vue";
import CheckoutProduct from "~/components/Checkout/CheckoutProduct.vue";
import IconViber from "~/components/Icons/IconViber.vue";
import IconWhatsApp from "~/components/Icons/IconWhatsApp.vue";

useSeoMeta({
  title: "Рубашки 21 | Оформление заказа",
  ogTitle: "Рубашки 21 | Купите школьные и повседневные рубашки в Чебоксарах",
  description:
    "Мы предоставляем на выбор большой каталог школьных и повседневых рубашек на любой вкус и цвет. Рубашки21 продоставляет вам лучшие цены, лучшее качество и большой выбор товаров. Мы находимся в Чебоксарах, доставляем по следующим районам:",
  ogDescription:
    "Мы предоставляем на выбор большой каталог школьных и повседневых рубашек на любой вкус и цвет. Рубашки21 продоставляет вам лучшие цены, лучшее качество и большой выбор товаров. Мы находимся в Чебоксарах, доставляем по следующим районам:",
});

const basket = ref({});
const regions = [
  "Чебоксары",
  "Новочебоксарск",
  "Козловка",
  "Урмары",
  "Вурнары",
  "Воротынец",
  "Новые тарьялы",
];

const activeRegion = ref("");
const activeSocial = ref("");

const activeLink = ref("");
const phone = "79379573099";

const IS_MOBILE = inject("IS_MOBILE");

const setActiveSocial = (social) => {
  activeSocial.value = social;
  setActiveLink(social);
};

const generateText = () => {
  return "Привет, текст!";
};

const setActiveLink = (social) => {
  let link = "";

  if (social == "viber") {
    if (IS_MOBILE.value) {
      link = encodeURI(`viber://add?number=${phone}?text=` + generateText());
    } else {
      link = encodeURI(`viber://chat?number=+${phone}?text=` + generateText());
    }
  } else {
    link = encodeURI(`https://wa.me/${phone}?text=` + generateText());
  }

  activeLink.value = link;
};
</script>

<template>
  <home-Link class="mb-2" />
  <div class="checkout-content">
    <div class="checkout-inner">
      <div class="checkout-inner__item">
        <div class="checkout-step-1">
          <div class="checkout-step-name">
            <span>Товары</span>
          </div>
          <div class="checkout-products">
            <CheckoutProduct
              v-for="(product, index) in basket.products"
              :product="product"
              :key="index"
            />
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
            <el-chip
              v-for="(region, index) in regions"
              :key="index"
              :class="{ 'active-region': activeRegion == region }"
              :title="region"
              @click="activeRegion = region"
            />
          </div>
        </div>
        <div class="checkout-step-3">
          <div class="checkout-step-name">
            <span>Что дальше?</span>
          </div>
          <div class="checkout-to-social">
            <p>
              выберите мессенджер, в котором вам будет удобнее общаться с нами,
              нажмите на кнопку перейти, вы попадёте в чат viber или whatsapp,
              отправьте сообщение, которое у вас уже будет написано.
            </p>
          </div>
          <div class="checkout-socials">
            <div
              class="checkout-social"
              :class="{ 'checkout-social-active': activeSocial == 'viber' }"
              @click="setActiveSocial('viber')"
            >
              <div class="checkout-social__icon">
                <IconWhatsApp width="24px" height="24px" clr="#FFF" />
              </div>
              <div class="checkout-social__name">
                <span>viber</span>
              </div>
            </div>
            <div
              class="checkout-social"
              :class="{
                'checkout-social-active': activeSocial == 'whatsapp',
              }"
              @click="setActiveSocial('whatsapp')"
            >
              <div class="checkout-social__icon">
                <IconViber width="24px" height="24px" clr="#FFF" />
              </div>
              <div class="checkout-social__name">
                <span>whatsapp</span>
              </div>
            </div>
          </div>
          <a
            :href="activeLink"
            class="checkout-social-btn"
            v-if="activeLink != ''"
            @click="goToSocial"
          >
            <span>Перейти</span>
          </a>
        </div>
      </div>
    </div>
  </div>
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

      .checkout-step-1,
      .checkout-step-2,
      .checkout-step-3 {
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
