<script setup lang="ts">
import { computed } from 'vue'
import type {
  ColorTypes,
  TextSizeTypes,
  TextTransformTypes,
  TextDecorationTypes,
  FontWeightTypes,
} from '@/types/SettingsTypes'

const props = defineProps<{
  tag: string
  color?: ColorTypes
  size?: TextSizeTypes
  transform?: TextTransformTypes
  decoration?: TextDecorationTypes
  weight?: FontWeightTypes
}>()
const classObject = computed(() => ({
  [`u-text-${props.color}`]: props.color,
  [`u-text-${props.size}`]: props.size,
  [`u-font-${props.weight}`]: props.weight,
  [`u-${props.transform}`]: props.transform,
  [`u-${props.decoration}`]: props.decoration,
}))
</script>

<template>
  <component :is="tag" :class="classObject">
    <slot />
  </component>
</template>
