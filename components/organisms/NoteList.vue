<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNotesStore } from '@/stores/notes'
const store = useNotesStore()
const { notes } = storeToRefs(store)
</script>

<template>
  <MasonryWall :items="notes" :column-width="238" :gap="16" class="o-note-list">
    <template #default="{ item }">
      <AtomsBaseTile tag="article" class="o-note-list__item">
        <AtomsBaseButton
          title="Remove note"
          class="o-note-list__remove"
          @click="store.deleteNote(item.id)"
        />
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
            v-model:text="task.text"
            :done="task.done"
            @update:done="store.toggleTask(item.id, task.id)"
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
    position: relative;
    padding: 24px 0 6px;
  }
  &__remove {
    width: 12px;
    height: 12px;
    background-color: color(senary);
    position: absolute;
    top: 8px;
    left: 8px;
    border-radius: 6px;
  }
  &__title {
    padding: 0 16px 12px;
  }
}
</style>
