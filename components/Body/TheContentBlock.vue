<template>
    <div class="content-wrapper">
        <div class="content-wrapper-inner">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
    .content-wrapper {
        @apply w-full pt-24 relative z-10 pb-40;

        .content-wrapper-inner {
            @apply w-full pl-28 pr-28;
        }
    }
</style>