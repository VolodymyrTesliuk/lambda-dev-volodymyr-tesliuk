<script setup lang="ts">
import type { IconsList } from '@/types/SettingsTypes'
import IconExport from '@/components/atoms/icons/IconExport.vue'
import IconImport from '@/components/atoms/icons/IconImport.vue'
import IconUndo from '@/components/atoms/icons/IconUndo.vue'
const props = defineProps<{
  icon: IconsList
}>()

const iconObj = {
  export: IconExport,
  import: IconImport,
  undo: IconUndo,
}
const icon = computed(() => (props.icon ? iconObj[props.icon] : null))
</script>

<template>
  <component :is="icon" class="a-icon" />
</template>

<style scoped lang="scss">
.a-icon {
  height: 32px;
  width: 32px;
}
</style>
