<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tag?: string
    rounded?: boolean
    size?: 'small' | 'base' | 'big'
  }>(),
  {
    tag: 'div',
    rounded: true,
    size: 'base',
  },
)
const classObject = computed(() => [
  { 'a-tile--rounded': props.rounded },
  { 'a-tile--rounded': props.rounded },
  { [`a-tile--${props.size}`]: props.rounded },
  'a-tile',
])
</script>

<template>
  <component :is="tag" :class="classObject">
    <slot />
  </component>
</template>

<style lang="scss">
.a-tile {
  $self: &;
  background: color('secondary');
  $sizes: (
    'small': (
      'size': 2px,
      'radius': 6px,
    ),
    'base': (
      'size': 4px,
      'radius': 16px,
    ),
    'big': (
      'size': 20px,
      'radius': 24px,
    ),
  );
  @each $size, $map in $sizes {
    $value: map-get($map, 'size');
    $radius: map-get($map, 'radius');
    $-value: -$value;
    &--#{$size} {
      box-shadow:
        $value $value $value * 3 darken(color('secondary'), 20%),
        $-value $-value $value * 3 lighten(color('secondary'), 20%);
    }
    &--#{$size}#{$self}--rounded {
      border-radius: $radius;
    }
  }
}
</style>
