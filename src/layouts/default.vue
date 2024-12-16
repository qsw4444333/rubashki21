<script setup lang="ts">
import AnimatedLine from "~/components/Icons/AnimatedLine.vue";

import ElDrawer from "~/components/elements/ElDrawer.vue";

import ContentBlock from "~/components/layout/elements/ContentBlock.vue";
import DefaultHeader from "~/components/layout/default/DefaultHeader.vue";
import PageName from "~/components/layout/elements/PageName.vue";

import BasketBtn from "~/components/basket/BasketBtn.vue";

import Basket from "~/views/Basket.vue";

const route = useRoute();

const drawer = ref(false);

watch(
  () => route.fullPath,
  () => {
    if (drawer.value) drawer.value = false;
  }
);
</script>
<template>
  <default-header />
  <animated-line />
  <content-block>
    <page-name v-if="route.meta.title" :name="route.meta.title" />
    <slot />
    <el-drawer v-model="drawer">
      <template #activator="{ props }">
        <basket-btn v-bind="props" />
      </template>
      <basket />
    </el-drawer>
  </content-block>
</template>
