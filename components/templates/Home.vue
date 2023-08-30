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
  margin: 0 32px 64px;
  &__form {
    margin-top: 32px;
  }
  &__notes {
    width: 100%;
    margin-top: 32px;
  }
}
</style>
