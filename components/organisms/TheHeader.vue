<script setup lang="ts"></script>

<template>
  <header class="o-header">
    <nav class="o-header__nav">
      <MoleculesTheLogo>TODO notes</MoleculesTheLogo>
      <AtomsBaseButton
        title="Undo last action"
        tag="button"
        bg="transparent"
        class="o-header__undo"
      >
        <AtomsBaseIcon icon="undo" />
      </AtomsBaseButton>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.o-header {
  background-color: color('secondary');
  box-shadow: 0 20px 60px darken(color('secondary'), 8%);
  padding: 16px 32px;
  position: sticky;
  top: 0;
  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__undo {
    display: flex;
    padding: 0;
    color: color('primary');
  }
}
</style>
