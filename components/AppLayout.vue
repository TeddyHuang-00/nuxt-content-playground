<script setup lang="ts">
const { cover } = useAppConfig();
</script>

<template>
  <div class="sm:pt-6 sm:pb-10">
    <Html lang="en" />
    <Meta property="og:image" :content="(cover as any)" />
    <Meta name="twitter:card" content="summary_large_image" />
    <AppLoadingBar />
    <AppNavbar />
    <slot />
  </div>
</template>

<style>
body {
  @apply bg-primary-50 text-black dark:bg-primary-900 dark:text-white;
}
</style>
