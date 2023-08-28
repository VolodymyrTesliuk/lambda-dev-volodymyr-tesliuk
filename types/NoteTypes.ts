export type TodoType = { id: number; done: boolean; text: string }
export type NoteType = {
  id: number | string
  title?: string
  tasks?: TodoType[]
}
