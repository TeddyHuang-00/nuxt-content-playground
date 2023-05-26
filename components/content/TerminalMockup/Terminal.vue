<template>
  <div class="max-w-full">
    <div
      class="w-full bg-primary-50 dark:bg-primary-900 p-2 flex flex-row items-center gap-2"
    >
      <Icon name="vscode-icons:file-type-powershell" size="24" />
      <span class="-ml-1 text-primary-700 dark:text-primary-200 flex-grow">
        {{ title }}
      </span>
      <Icon name="codicon:chrome-minimize" size="24" class="ml-4" />
      <Icon name="codicon:chrome-maximize" size="24" class="ml-4" />
      <Icon name="codicon:chrome-close" size="24" class="ml-4" />
    </div>
    <pre
      class="w-full overflow-x-auto border-primary-50 dark:border-primary-900 border-4"
    >
      <ContentSlot :use="$slots.default" unwrap="p" />
    </pre>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
const { title } = props;
</script>
