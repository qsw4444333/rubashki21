<script setup>
import ElModal from "~/components/elements/ElModal.vue";

import Logo from "~/components/Logo.vue";
import IconViber from "~/components/Icons/IconViber.vue";
import IconWhatsApp from "~/components/Icons/IconWhatsApp.vue";
import TableSize from "~/components/Modal/TableSize.vue";

const props = defineProps({
  whatsapp_url: String,
  viber_url: String,
  width: String,
  height: String,
  bg_clr: String,
  text_clr: String,
});

const route = useRoute();

const activeHeaderLink = computed(() => route.fullPath);

const routeTableSizes = {
  "/detskie-rubashki": "kids",
  "/podrostkovye-rubashki": "teenage",
};

const tableSize = computed(() => routeTableSizes[route.path] || null);
</script>

<template>
  <header class="pt-1 relative z-10">
    <div class="w-7xl m-auto flex items-center gap-6 justify-between">
      <div
        class="header-inner-left flex items-center gap-4 h-full justify-end flex-auto"
      >
        <el-modal v-if="tableSize" max-width="80vw" width="100%">
          <template #activator="{ props }">
            <div v-bind="props">
              <span
                class="cursor-pointer transition-colors text-sm hover:text-primary"
                >Таблица размеров</span
              >
            </div>
          </template>
          <table-size :table-size-type="tableSize" />
        </el-modal>
      </div>
      <div class="flex items-center gap-4 h-full justify-between">
        <nuxt-link
          to="/"
          class="transition-colors hover:text-primary duration-200 text-sm"
        >
          <Logo
            :width="width"
            :height="height"
            :bg_clr="bg_clr"
            :text_clr="text_clr"
          />
        </nuxt-link>
        <div class="flex gap-1 items-center">
          <nuxt-link
            :to="viber_url"
            class="transition-colors text-sm rounded-full bg-primary-darker hover:text-primary duration-200 p-2 cursor-pointer shadow-primary"
          >
            <IconViber width="20px" height="20px" clr="#FFF" />
          </nuxt-link>
          <nuxt-link
            :to="whatsapp_url"
            class="headetransition-colors text-sm rounded-full bg-primary-darker hover:text-primary transition-colors duration-200 p-2 cursor-pointer shadow-primary"
          >
            <IconWhatsApp width="20px" height="20px" clr="#FFF" />
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            :class="{
              'text-primary-darker underline decoration-2 hover:text-primary-darker-xl':
                activeHeaderLink.includes('/detskie-rubashki'),
            }"
            class="transition-colors duration-200 text-sm hover:text-primary"
            to="/detskie-rubashki"
            >Детские рубашки</nuxt-link
          >
        </div>
        <div>
          <nuxt-link
            :class="{
              'text-primary-darker underline decoration-2 hover:text-primary-darker-xl':
                activeHeaderLink.includes('/podrostkovye-rubashki'),
            }"
            class="transition-colors duration-200 text-sm"
            to="/podrostkovye-rubashki"
            >Подростковые рубашки</nuxt-link
          >
        </div>
      </div>
    </div>
  </header>
</template>
