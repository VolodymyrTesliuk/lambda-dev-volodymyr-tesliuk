<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tag?: string
    rounded?: boolean
    focus?: boolean
    transparent?: boolean
    size?: 'small' | 'base' | 'big'
  }>(),
  {
    tag: 'div',
    rounded: true,
    size: 'base',
  },
)
const classObject = computed(() => [
  { 'a-tile--focus': props.focus },
  { 'a-tile--transparent': props.transparent },
  { 'a-tile--rounded': props.rounded },
  { [`a-tile--${props.size}`]: props.size },
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
  background-color: color('secondary');
  transition: box-shadow 0.3s;
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
  &--transparent {
    background-color: transparent;
  }
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
    &--#{$size}#{$self}--focus {
      &:hover,
      &:focus {
        box-shadow:
          $value $value $value * 3 lighten(color('quaternary'), 20%),
          $-value $-value $value * 3 lighten(color('quinary'), 20%);
      }
    }
  }
}
</style>
