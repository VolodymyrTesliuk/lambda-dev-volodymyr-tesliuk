import { defineStore, skipHydrate } from 'pinia'
import { NoteType } from '@/types/NoteTypes'
import initialNotes from '~/constants/initialNotes'

const copyObj = (obj: {}) => JSON.parse(JSON.stringify(obj))

export const useNotesStore = defineStore('notes', () => {
  // STATE
  const notes: globalThis.Ref<NoteType[]> = useLocalStorage(
    'pinia/notes',
    initialNotes,
  )
  const lastAction: globalThis.Ref<NoteType[] | null> = ref(null)
  // GETTERS
  const encodedNotes = computed(() =>
    encodeURIComponent(JSON.stringify(notes.value)),
  )
  // ACTIONS
  function addNotes(newNotes: NoteType[]) {
    setLaseAction()
    const ids = notes.value.map((note) => note.id)
    const uniqNotes = copyObj(newNotes).filter(
      (note: NoteType) => !ids.includes(note.id),
    )
    notes.value = [...notes.value, ...uniqNotes]
  }
  function createNote(noteData: NoteType) {
    setLaseAction()
    if (noteData.title || noteData.tasks?.length)
      notes.value = [...notes.value, copyObj(noteData)]
  }
  function updateNote(noteId: number | string, noteData: NoteType) {
    setLaseAction()
    notes.value = notes.value.map((note) =>
      note.id === noteId ? copyObj(noteData) : note,
    )
  }
  function deleteNote(noteId: number | string) {
    setLaseAction()
    notes.value = notes.value.filter((note) => note.id !== noteId)
  }
  function toggleTask(noteId: number | string, taskId: number | string) {
    setLaseAction()
    notes.value = notes.value.map((note) => {
      if (note.id === noteId) {
        note.tasks = note.tasks?.map((task) =>
          task.id === taskId ? { ...task, done: !task.done } : task,
        )
      }
      return note
    })
  }
  function setLaseAction() {
    lastAction.value = copyObj(notes.value)
  }
  function undoLastAction() {
    if (lastAction.value) {
      notes.value = lastAction.value
      lastAction.value = null
    }
  }
  return {
    notes: skipHydrate(notes),
    lastAction,
    encodedNotes,
    addNotes,
    createNote,
    updateNote,
    deleteNote,
    toggleTask,
    undoLastAction,
  }
})
