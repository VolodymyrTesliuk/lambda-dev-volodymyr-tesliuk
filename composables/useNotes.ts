import { NoteType } from '@/types/NoteTypes'
export const useNotes = (): globalThis.Ref<NoteType[]> => {
  return ref([
    {
      id: 0,
      title: 'Setup the project',
      tasks: [
        { id: 1, done: true, text: 'Add base styles' },
        { id: 2, done: true, text: 'Add base libs' },
      ],
    },
    {
      id: 1,
      title: 'Implement basic functionality',
      tasks: [
        { id: 1, done: true, text: 'Display the list of created notes' },
        {
          id: 2,
          done: true,
          text: 'Create a note with TODO elements',
        },
        {
          id: 3,
          done: true,
          text: 'Check/uncheck the concrete TODO element',
        },
      ],
    },
    {
      id: 2,
      title: 'Implement "Edit" and "Delete" functionality',
      tasks: [
        {
          id: 1,
          done: true,
          text: 'Edit already existing note',
        },
        { id: 2, done: true, text: 'Delete existing node' },
      ],
    },
    {
      id: 3,
      title: 'Implement "Undo" functionality',
      tasks: [
        {
          id: 1,
          done: false,
          text: 'Add undo last action (creating or deleting)',
        },
      ],
    },
    {
      id: 4,
      title: 'Implement confirmation popups for Delete functionality',
      tasks: [
        {
          id: 1,
          done: false,
          text: 'Create custom prompt to confirm note deleting',
        },
      ],
    },
    {
      id: 5,
      title: 'Implement "Export" and "Import" functionality',
      tasks: [
        {
          id: 1,
          done: false,
          text: 'Export all notes as a single file and save it on device',
        },
        {
          id: 2,
          done: false,
          text: 'Import all notes from file on device that previously exported',
        },
      ],
    },
  ])
}
