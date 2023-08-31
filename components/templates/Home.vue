<script setup lang="ts">
const isNoteOpened = ref(false)
</script>

<template>
  <div class="t-home">
    <OrganismsNoteForm class="t-home__form" />
    <OrganismsNoteList class="t-home__notes" />
  </div>
</template>

<style scoped lang="scss">
.t-home {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: indent('zero') indent('xl') indent('3xl');
  &__form {
    margin-top: indent('xl');
  }
  &__notes {
    width: 100%;
    margin-top: indent('xl');
  }
}
</style>
