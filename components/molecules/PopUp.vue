<script setup lang="ts">
defineEmits(['click'])
</script>

<template>
  <dialog class="m-pop-up" open @click="$emit('click')">
    <div class="m-pop-up__wrapper" @click.stop>
      <slot />
    </div>
  </dialog>
</template>

<style scoped lang="scss">
.m-pop-up {
  &[open] {
    border-width: 0;
    align-items: center;
    backdrop-filter: blur(0.2rem);
    background-color: color-alpha('secondary', 0.5);
    display: flex;
    height: 100%;
    justify-content: center;
    left: indent('zero');
    position: fixed;
    top: indent('zero');
    width: 100%;
    z-index: 1;
  }
  &__wrapper {
    backdrop-filter: blur(0.2rem);
    background-color: color-alpha('secondary', 0.75);
    border-radius: 0.25rem;
    max-width: 600px;
    width: 100%;
  }
}
</style>
