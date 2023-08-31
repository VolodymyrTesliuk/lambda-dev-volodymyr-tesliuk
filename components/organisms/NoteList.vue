<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNotesStore } from '@/stores/notes'
import type { NoteOrNone } from '@/types/NoteTypes'
type DelIdType = null | string | number
const store = useNotesStore()
const { notes } = storeToRefs(store)
const note: globalThis.Ref<NoteOrNone> = ref(undefined)
const deleteId: globalThis.Ref<DelIdType> = ref(null)
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
const confirmMessage =
  'Are you sure you want to delete this note with all its tasks?'
watch(note, () => {
  note ? lockScreen(true) : lockScreen(false)
})
const confirmDelete = (id: DelIdType) => {
  deleteId.value = id
}
const closePopUp = () => {
  if (note.value) setNote()
  if (deleteId.value !== null) deleteId.value = null
}
const deleteNote = () => {
  if (deleteId.value !== null) store.deleteNote(deleteId.value)
  closePopUp()
}
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
              @click.stop="confirmDelete(item.id)"
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
        <MoleculesPopUp v-if="note || deleteId !== null" @click="closePopUp()">
          <OrganismsNoteForm v-if="note" :data="note" @updated="setNote()" />
          <AtomsBaseTile
            v-else-if="deleteId !== null"
            class="u-flex u-flex-col u-items-center"
          >
            <AtomsBaseText
              tag="p"
              size="lg"
              color="primary"
              class="o-note-list__confirm"
            >
              {{ confirmMessage }}
            </AtomsBaseText>
            <MoleculesFormButton title="Confirm delete" @click="deleteNote()">
              Confirm
            </MoleculesFormButton>
          </AtomsBaseTile>
        </MoleculesPopUp>
      </Transition>
    </teleport>
  </div>
</template>

<style scoped lang="scss">
.o-note-list {
  &__item {
    position: relative;
    padding: indent('lg') indent('zero') indent('2xs');
  }
  &__remove {
    width: 12px;
    height: 12px;
    background-color: color(senary);
    position: absolute;
    top: indent('xs');
    left: indent('xs');
    border-radius: 6px;
  }
  &__title {
    padding: indent('zero') indent('base') indent('sm');
  }
  &__confirm {
    padding: indent('base');
  }
}
</style>
