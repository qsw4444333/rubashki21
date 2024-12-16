<script setup lang="ts">
import IconViber from "~/components/Icons/IconViber.vue";
import IconWhatsApp from "~/components/Icons/IconWhatsApp.vue";

import ElModal from "~/components/elements/ElModal.vue";

import Logo from "~/components/layout/elements/Logo.vue";
import TableSize from "~/components/layout/elements/TableSize.vue";

const route = useRoute();

const activeHeaderLink = computed(() => route.fullPath);

const routeTableSizes: Record<string, "kids" | "teenage"> = {
  "/detskie-rubashki": "kids",
  "/podrostkovye-rubashki": "teenage",
};

const tableSize = computed(() =>
  route.path in routeTableSizes ? routeTableSizes[route.path] : null
);
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
          <logo />
        </nuxt-link>
        <div class="flex gap-1 items-center">
          <nuxt-link
            to="/"
            class="transition-colors text-sm rounded-full bg-primary-darker hover:text-primary duration-200 p-2 cursor-pointer shadow-primary"
          >
            <icon-viber width="20px" height="20px" clr="#FFF" />
          </nuxt-link>
          <nuxt-link
            to="/"
            class="headetransition-colors text-sm rounded-full bg-primary-darker hover:text-primary transition-colors duration-200 p-2 cursor-pointer shadow-primary"
          >
            <icon-whats-app width="20px" height="20px" clr="#FFF" />
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
