<script setup lang="ts">
import { useNotesStore } from '@/stores/notes'
const store = useNotesStore()
interface FileReaderEventTarget extends EventTarget {
  result: string
}
const importValue: Ref<HTMLInputElement | undefined> = ref()
const reader: Ref<FileReader | null> = ref(null)
const onReaderLoad = (event: ProgressEvent<FileReader>) => {
  store.addNotes(JSON.parse((event.target as FileReaderEventTarget).result))
  ;(importValue.value as HTMLInputElement).value = ''
}
const onFileChanged = (event: Event) => {
  reader.value = new FileReader()
  reader.value.addEventListener('load', onReaderLoad)
  const target = event.target as HTMLInputElement
  reader.value.readAsText((target.files as FileList)[0])
}
onUnmounted(() => {
  reader.value?.removeEventListener('load', onReaderLoad)
})
</script>

<template>
  <div class="m-controls u-flex">
    <AtomsBaseButton
      title="Undo last action"
      tag="button"
      bg="transparent"
      class="m-controls__cta u-flex"
      @click="store.undoLastAction()"
    >
      <AtomsBaseIcon icon="undo" />
    </AtomsBaseButton>
    <AtomsBaseButton
      title="Export all notes"
      tag="a"
      bg="transparent"
      class="m-controls__cta u-flex"
      download="TodoNotes.json"
      :href="`data:text/json;charset=utf-8,${store.encodedNotes}`"
      target="_blank"
    >
      <AtomsBaseIcon icon="export" />
    </AtomsBaseButton>
    <AtomsBaseButton
      title="Import all notes"
      class="m-controls__cta u-flex"
      tag="label"
      bg="transparent"
    >
      <AtomsBaseIcon icon="import" />
      <input
        ref="importValue"
        class="m-controls__file"
        type="file"
        accept="application/JSON"
        @change="onFileChanged($event)"
      />
    </AtomsBaseButton>
  </div>
</template>

<style scoped lang="scss">
.m-controls {
  &__cta {
    color: color('primary');
    margin: indent('zero') indent('base');
    padding: indent('4xs') indent('xs');
  }
  &__file {
    display: none;
  }
}
</style>
