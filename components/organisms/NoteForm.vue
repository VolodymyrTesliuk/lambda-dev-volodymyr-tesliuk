<script setup lang="ts">
import { useNotesStore } from '@/stores/notes'
import { NoteType } from '@/types/NoteTypes'
const props = defineProps<{
  data?: NoteType
}>()
const emit = defineEmits(['updated'])
const buttonText = computed(() => (props.data ? 'Save' : 'Create'))
const generateId = () => new Date().getTime()
const title = ref(props.data?.title || '')
const getNewNote = () => {
  return {
    id: generateId(),
    done: false,
    text: '',
  }
}
const tasks = ref(
  props.data?.tasks ? [...props.data?.tasks, getNewNote()] : [getNewNote()],
)
const error = ref('')
const store = useNotesStore()
const clearForm = () => {
  title.value = ''
  tasks.value = [getNewNote()]
}
const submitNote = () => {
  error.value = ''
  const res: NoteType = {
    id: generateId(),
  }
  if (title.value) res.title = title.value
  if (tasks.value.length > 1 && tasks.value[0].text)
    res.tasks = tasks.value.slice(0, -1)
  if (!title.value && tasks.value.length === 1 && tasks.value[0].text === '')
    error.value = 'The note is empty, please add some info!'
  if (props.data) {
    store.updateNote(props.data.id, res)
    emit('updated')
  } else {
    store.createNote(res)
    clearForm()
  }
}
watch(title, () => {
  error.value = ''
})
watch(tasks.value, () => {
  error.value = ''
  if (tasks.value[tasks.value.length - 1].text !== '') {
    tasks.value.push(getNewNote())
  } else if (
    tasks.value.length > 1 &&
    tasks.value[tasks.value.length - 2].text === ''
  ) {
    tasks.value.pop()
  }
})
</script>

<template>
  <AtomsBaseTile tag="form" class="o-note-form" transparent>
    <AtomsBaseInput
      v-model="title"
      placeholder="New note"
      class="o-note-form__title u-font-semibold"
      size="xl"
    />
    <ul>
      <MoleculesTodoItem
        v-for="task in tasks"
        :key="task.id"
        v-model:done="task.done"
        v-model:text="task.text"
        editable
      />
    </ul>
    <AtomsBaseButton
      type="submit"
      class="o-note-form__button"
      @click.prevent="submitNote"
      ><AtomsBaseText
        tag="b"
        class="o-note-form__button-text"
        color="primary"
        weight="black"
      >
        {{ buttonText }}
      </AtomsBaseText>
    </AtomsBaseButton>
    <AtomsBaseText
      v-if="error"
      tag="p"
      class="o-note-form__error u-font-semibold"
    >
      {{ error }}
    </AtomsBaseText>
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
  &__error {
    text-align: center;
    padding: 8px 16px;
    color: lighten(color(senary), 15%);
  }
}
</style>
