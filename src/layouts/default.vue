<script setup lang="ts">
import ElDrawer from "~/components/elements/ElDrawer.vue";

import Header from "~/components/layout/default/Header.vue";
import TheLine from "~/components/Icons/TheLine.vue";
import ElContentBlock from "~/components/elements/ElContentBlock.vue";
import PageName from "~/components/PageName.vue";
import BasketBtn from "~/components/Basket/BasketBtn.vue";
import Basket from "~/views/Basket.vue";

const route = useRoute();

const links = {
  whatsapp: "",
  viber: "",
};

const colors = {
  logo: {
    bg_clr: "#0F0F0F",
    text_clr: "#FFF",
    width: "240px",
    height: "50px",
  },
};
</script>
<template>
  <Header
    :whatsapp_url="links.whatsapp"
    :viber_url="links.viber"
    :bg_clr="colors.logo.bg_clr"
    :text_clr="colors.logo.text_clr"
    height="50px"
    width="230px"
  />
  <TheLine />
  <el-content-block>
    <PageName v-if="route.meta.title" :name="route.meta.title" />
    <slot />
    <el-drawer>
      <template #activator="{ props }">
        <basket-btn v-bind="props" />
      </template>
      <basket />
    </el-drawer>
  </el-content-block>
</template>
