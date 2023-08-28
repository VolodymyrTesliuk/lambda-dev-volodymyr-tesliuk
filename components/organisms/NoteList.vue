<script setup lang="ts">
import type { NoteType } from '@/types/NoteTypes'
const props = defineProps<{
  notes: NoteType[]
}>()
</script>

<template>
  <MasonryWall
    :items="props.notes"
    :column-width="238"
    :gap="16"
    class="o-note-list"
  >
    <template #default="{ item }">
      <AtomsBaseTile tag="article" class="o-note-list__item">
        <AtomsBaseText
          v-if="item.title"
          tag="h3"
          size="lg"
          weight="medium"
          class="o-note-list__title"
          >{{ item.title }}</AtomsBaseText
        >
        <ul v-if="item.tasks?.length">
          <MoleculesTodoItem
            v-for="task in item.tasks"
            :key="task.id"
            v-model:done="task.done"
            v-model:text="task.text"
          >
          </MoleculesTodoItem>
        </ul>
      </AtomsBaseTile>
    </template>
  </MasonryWall>
</template>

<style scoped lang="scss">
.o-note-list {
  &__item {
    padding: 12px 0 6px;
  }
  &__title {
    padding: 0 16px 12px;
  }
}
</style>
