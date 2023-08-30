<script setup lang="ts">
defineEmits(['click'])
</script>

<template>
  <AtomsBaseButton
    type="submit"
    class="m-form-button"
    v-bind="$attrs"
    @click.prevent="$emit('click')"
    ><AtomsBaseText
      tag="b"
      class="m-form-button__text"
      color="primary"
      weight="black"
    >
      <slot />
    </AtomsBaseText>
  </AtomsBaseButton>
</template>

<style scoped lang="scss">
.m-form-button {
  $button: &;
  box-shadow:
    2px 2px 6px darken(color('secondary'), 20%),
    -2px -2px 6px lighten(color('secondary'), 20%);
  align-self: center;
  padding: 0;
  background-image: linear-gradient(
    90deg,
    color('quaternary') 25%,
    color('quinary')
  );
  border-radius: 36px;
  margin: 8px 0;
  transition: box-shadow 0.3s;
  &__text {
    background-color: color('secondary');
    padding: 8px 16px;
    border-radius: 36px;
    width: 100%;
    height: 100%;
    transition: background-color 0.3s;
    display: flex;
  }
  &:hover,
  &:focus {
    box-shadow:
      2px 2px 6px lighten(color('quaternary'), 20%),
      -2px -2px 6px lighten(color('quinary'), 20%);

    #{$button}__text {
      background-color: transparent;
      text-shadow: 0px 0px 8px white;
    }
  }
}
</style>
