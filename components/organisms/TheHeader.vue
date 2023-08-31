<script setup lang="ts"></script>

<template>
  <header class="o-header">
    <nav class="o-header__nav">
      <MoleculesTheLogo>&lt;TodoNotes&gt;</MoleculesTheLogo>
      <MoleculesControls />
    </nav>
  </header>
</template>

<style scoped lang="scss">
.o-header {
  background-color: color('secondary');
  box-shadow: 0 20px 60px darken(color('secondary'), 8%);
  padding: indent('base') indent('xl');
  position: sticky;
  top: indent('zero');
  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
