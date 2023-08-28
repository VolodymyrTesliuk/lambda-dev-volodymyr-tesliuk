<script setup lang="ts">
const title = ref('')
</script>

<template>
  <AtomsBaseTile tag="form" class="o-note-form">
    <AtomsBaseInput
      :model-value="title"
      placeholder="New note"
      class="o-note-form__title u-font-semibold"
      size="xl"
    />
    <ul>
      <MoleculesTodoItem editable />
    </ul>
    <AtomsBaseButton type="submit" class="o-note-form__button"
      ><AtomsBaseText
        tag="b"
        class="o-note-form__button-text"
        color="primary"
        weight="black"
      >
        Create
      </AtomsBaseText>
    </AtomsBaseButton>
  </AtomsBaseTile>
</template>

<style scoped lang="scss">
.o-note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  &__title {
    padding: 12px 16px;
  }
  &__button {
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
    &-text {
      background-color: color('secondary');
      padding: 8px 16px;
      border-radius: 36px;
      width: 100%;
      height: 100%;
      transition: background-color 0.3s;
      display: flex;
      transform: scale(102%);
    }
    &:hover,
    &:focus {
      box-shadow:
        2px 2px 6px lighten(color('quaternary'), 20%),
        -2px -2px 6px lighten(color('quinary'), 20%);

      #{$button}-text {
        background-color: transparent;
        text-shadow: 0px 0px 8px white;
      }
    }
  }
}
</style>
