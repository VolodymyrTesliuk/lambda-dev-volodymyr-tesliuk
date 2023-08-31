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
const getNewTask = () =>
  reactive({
    id: generateId(),
    done: false,
    text: '',
  })
const todo = reactive({
  tasks: props.data?.tasks
    ? [...props.data?.tasks, getNewTask()]
    : [getNewTask()],
})
const error = ref('')
const store = useNotesStore()
const clearForm = () => {
  title.value = ''
  todo.tasks = [getNewTask()]
}
const submitNote = () => {
  error.value = ''
  const res: NoteType = {
    id: generateId(),
  }
  if (title.value) res.title = title.value
  if (todo.tasks.length > 1 && todo.tasks[0].text)
    res.tasks = todo.tasks.slice(0, -1)
  if (!title.value && todo.tasks.length === 1 && todo.tasks[0].text === '') {
    error.value = 'The note is empty, please add some info!'
    return
  }
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
watch(todo, () => {
  error.value = ''
  if (todo.tasks[todo.tasks.length - 1].text !== '') {
    todo.tasks.push(getNewTask())
  } else if (
    todo.tasks.length > 1 &&
    todo.tasks[todo.tasks.length - 2].text === ''
  ) {
    todo.tasks.pop()
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
        v-for="task in todo.tasks"
        :key="task.id"
        v-model:done="task.done"
        v-model:text="task.text"
        editable
      />
    </ul>
    <MoleculesFormButton @click="submitNote">
      {{ buttonText }}
    </MoleculesFormButton>
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
    padding: indent('sm') indent('base');
  }
  &__button {
    $button: &;
    box-shadow:
      2px 2px 6px darken(color('secondary'), 20%),
      -2px -2px 6px lighten(color('secondary'), 20%);
    align-self: center;
    padding: indent('zero');
    background-image: linear-gradient(
      90deg,
      color('quaternary') 25%,
      color('quinary')
    );
    border-radius: 36px;
    margin: 8px indent('zero');
    transition: box-shadow 0.3s;
    &-text {
      background-color: color('secondary');
      padding: indent('xs') indent('base');
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
    padding: indent('xs') indent('base');
    color: lighten(color(senary), 15%);
  }
}
</style>
