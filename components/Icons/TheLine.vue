<script>
export default {
  name: "AnimatedLine",
  mounted() {
    const line = this.$refs.line;
    const length = line.getTotalLength();

    line.style.strokeDasharray = length;
    line.style.strokeDashoffset = length;

    line.style.opacity = 1;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = (currentTime - startTime) / duration;

      line.style.strokeDashoffset = length * (1 - Math.min(progress, 1));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  },
};
</script>

<template>
  <svg
    width="1920"
    height="874"
    viewBox="0 0 1920 874"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_2424_281)">
      <path
        ref="line"
        d="M-28.5 7.5C456.053 285.32 1524.53 844.754 1928 812.061"
        stroke="#003131"
        stroke-width="100"
      />
    </g>
  </svg>
</template>

<style scoped>
svg {
  @apply absolute top-0 left-0 right-0 -z-0 max-w-full;
}

path {
  @apply transition-opacity duration-200 opacity-0 shadow-primary;
}
</style>
