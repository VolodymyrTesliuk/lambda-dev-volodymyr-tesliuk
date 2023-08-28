<script setup lang="ts"></script>

<template>
  <AtomsBaseButton tag="nuxt-link" to="/" class="m-logo">
    <AtomsBaseText tag="h1" size="3xl" weight="black"><slot /></AtomsBaseText>
  </AtomsBaseButton>
</template>

<style scoped lang="scss">
.m-logo {
  @include text-gradient(
    $direction: 90deg,
    $colors: (
      color('quaternary') 25%,
    )
    (
      color('quinary'),
    )
  );
}
</style>
