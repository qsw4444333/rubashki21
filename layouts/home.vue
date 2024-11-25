<script setup lang="ts">
import Logo from "~/components/Logo.vue";
import IconViber from "~/components/Icons/IconViber.vue";
import IconWhatsApp from "~/components/Icons/IconWhatsApp.vue";
import ElImg from "~/components/elements/ElImg.vue";

const viber_url = "",
  whatsapp_url = "";
</script>
<template>
  <div class="w-full h-[100vh]">
    <div class="w-full max-h-full h-full flex items-start justify-center">
      <div
        class="h-full relative flex flex-col items-center justify-start"
        style="flex: 0 0 50%"
      >
        <header class="relative my-5 z-10">
          <div class="w-auto">
            <Logo
              width="230px"
              height="50px"
              bg_clr="#0F0F0F"
              text_clr="#FFF"
            />
            <div>
              <NuxtLink :to="viber_url">
                <IconViber width="20px" height="20px" clr="#FFF" />
              </NuxtLink>
              <NuxtLink :to="whatsapp_url">
                <IconWhatsApp width="20px" height="20px" clr="#FFF" />
              </NuxtLink>
            </div>
          </div>
        </header>
        <div class="w-full flex justify-center flex-wrap">
          <div
            class="w-96 flex flex-col justify-center bg-primary p-4 rounded-2xl transition-shadow shadow-primary hover:shadow-primary-xl"
          >
            <div
              class="flex justify-center w-[352px] h-[352px] overflow-hidden rounded-2xl"
            >
              <el-img
                class="flex justify-center w-[352px] h-[352px] overflow-hidden rounded-2xl"
                img="sergei.webp"
              />
            </div>
            <div class="text-center pt-2">
              <h1 class="text-2xl text-white">Сергеев Сергей Святославович</h1>
            </div>
          </div>
          <div
            class="mt-4 text-center p-2 rounded-2xl pt-5 pb-5"
            style="flex: 0 0 95%"
          >
            <p class="text-black tracking-widest">
              Я Сергеев Сергей Святославович. Индивидуальный предприниматель с
              1999г.<br />Более 20 лет занимаюсь продажей мужских, подростковых
              и дестких рубашек. Предлагаю вашему выбору школьные рубашки разных
              размеров - от детских до взрослых. Все рубашки приталенные
              (полуприталенные) на хлопчато бумажной основе, есть и с
              добавлением лайкры (стрейтч).<br />Доставка в разные районы
              обсуждается индивидуально. Оплата (наличные или переводом) после
              примерки, при получении
            </p>
          </div>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>
