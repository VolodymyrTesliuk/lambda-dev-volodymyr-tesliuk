<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNotesStore } from '@/stores/notes'
import type { NoteOrNone } from '@/types/NoteTypes'
const store = useNotesStore()
const { notes } = storeToRefs(store)
const note: globalThis.Ref<NoteOrNone> = ref(undefined)
const lockScreen = (lock: boolean) => {
  const body = document.getElementsByTagName('body')[0].style
  const html = document.documentElement.style
  if (lock) {
    body.overflow = 'hidden'
    html.overflow = 'hidden'
  } else {
    body.overflow = 'visible'
    html.overflow = 'visible'
  }
}
const setNote = (data?: NoteOrNone) => {
  note.value = data ? JSON.parse(JSON.stringify(data)) : data
}
watch(note, () => {
  note ? lockScreen(true) : lockScreen(false)
})
</script>

<template>
  <div>
    <MasonryWall
      :items="notes"
      :column-width="238"
      :gap="16"
      class="o-note-list"
    >
      <template #default="{ item }">
        <div @click="setNote(item)">
          <AtomsBaseTile tag="article" class="o-note-list__item" focus>
            <AtomsBaseButton
              title="Remove note"
              class="o-note-list__remove"
              @click.stop="store.deleteNote(item.id)"
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
        </div>
      </template>
    </MasonryWall>
    <teleport to="body">
      <Transition name="u-fade-in" mode="out-in">
        <MoleculesPopUp v-if="note" @click="setNote()"
          ><OrganismsNoteForm :data="note" @updated="setNote()" />
        </MoleculesPopUp>
      </Transition>
    </teleport>
  </div>
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
