<script setup lang="ts">
import type { ColorTypes, TextSizeTypes } from '@/types/SettingsTypes'
const props = withDefaults(
  defineProps<{
    placeholder?: string
    color?: ColorTypes
    size?: TextSizeTypes
    modelValue: string
  }>(),
  { placeholder: '', color: 'primary', size: 'base' },
)
defineEmits(['update:modelValue'])
const classObject = computed(() => [
  { [`u-text-${props.color}`]: props.color },
  { [`u-text-${props.size}`]: props.size },
  'a-input',
])
</script>

<template>
  <input
    :value="modelValue"
    type="text"
    :placeholder="props.placeholder || ''"
    :class="classObject"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<style scoped lang="scss">
.a-input {
  background: none;
  border: none;
}
</style>
