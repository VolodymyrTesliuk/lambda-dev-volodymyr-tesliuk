export type TodoType = { id: number | string; done: boolean; text: string }
export type NoteType = {
  id: number | string
  title?: string
  tasks?: TodoType[]
}
export type NoteOrNone = NoteType | undefined
