<script setup>
const width = ref(0);

onMounted(() => {
  width.value = window.innerWidth;
});

const IS_MOBILE = width.value < 1000;
provide("IS_MOBILE", IS_MOBILE);
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
    <div id="modal" />
    <div id="drawer" />
  </nuxt-layout>
</template>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a,
p,
span,
li,
th,
td,
input,
label,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "RuslanDisplay", sans-serif;
  @apply text-black;
}

span,
img {
  @apply select-none;
}

body {
  @apply relative;
}

body::before {
  background: url("./public/bg.svg") no-repeat center center;
  background-size: cover;
  content: " ";
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  will-change: transform;
  z-index: -1;
  background-size: cover;

  @apply fixed w-full h-full left-0 right-0;
}

#__nuxt {
  @apply relative;
}
</style>
