<script setup lang="ts">
import type { ColorTypes, FontWeightTypes } from '@/types/SettingsTypes'
const props = withDefaults(
  defineProps<{
    tag?:
      | 'button'
      | 'a'
      | 'input'
      | 'router-link'
      | 'nuxt-link'
      | 'RouterLink'
      | 'NuxtLink'
    disabled?: boolean
    bg?: ColorTypes
    rounded?: boolean
  }>(),
  {
    tag: 'button',
    bg: undefined,
  },
)
const emit = defineEmits<{
  (type: 'click', data: Event): void
}>()
const classObject = computed(() => [
  { 'a-button--disabled': props.disabled },
  { [`u-bg-${props.bg}`]: props.bg },
  'a-button',
])
</script>

<template>
  <component
    :is="props.tag"
    :class="classObject"
    v-bind="$attrs"
    @click="emit('click', $event)"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.a-button {
  cursor: pointer;
  border: none;
  &--disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
