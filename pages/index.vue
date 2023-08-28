<script setup lang="ts">
useHead({
  title: 'TODO notes',
})
const notes = useNotes()
</script>

<template>
  <TemplatesHome :data="notes" />
</template>

<style scoped></style>
