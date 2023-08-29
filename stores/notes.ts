import { defineStore } from 'pinia'
import { NoteType } from '@/types/NoteTypes'

const copyObj = (obj: {}) => JSON.parse(JSON.stringify(obj))

export const useNotesStore = defineStore('notes', () => {
  // STATE
  const notes = useNotes()
  const lastAction = ref({})
  // GETTERS
  const notesJson = computed(() => JSON.stringify(notes.value))
  // ACTIONS
  function createNote(noteData: NoteType) {
    if (noteData.title || noteData.tasks?.length)
      notes.value = [...notes.value, copyObj(noteData)]
  }
  function updateNote(noteId: number | string, noteData: NoteType) {
    notes.value = notes.value.map((note) =>
      note.id === noteId ? copyObj(noteData) : note,
    )
  }
  function deleteNote(noteId: number | string) {
    notes.value = notes.value.filter((note) => note.id !== noteId)
  }
  function toggleTask(noteId: number | string, taskId: number | string) {
    console.log(noteId, taskId)
    notes.value = notes.value.map((note) => {
      if (note.id === noteId) {
        console.log(note)
        note.tasks = note.tasks?.map((task) =>
          task.id === taskId ? { ...task, done: !task.done } : task,
        )
      }
      return note
    })
  }
  return {
    notes,
    lastAction,
    notesJson,
    createNote,
    updateNote,
    deleteNote,
    toggleTask,
  }
})
