export const useNotes = () => {
  return reactive([
    {
      id: 1,
      title: 'Note 1',
      tasks: [
        { id: 1, done: false, text: 'The first TODO task.' },
        { id: 2, done: true, text: 'The second TODO task.' },
        { id: 3, done: false, text: 'The third TODO task.' },
      ],
    },
    {
      id: 2,
      title: 'Note 2',
      tasks: [
        { id: 1, done: true, text: 'The first TODO task.' },
        { id: 3, done: true, text: 'The third TODO task.' },
      ],
    },
    {
      id: 3,
      tasks: [
        { id: 1, done: true, text: 'The first TODO task.' },
        { id: 3, done: true, text: 'The third TODO task.' },
      ],
    },
    {
      id: 4,
      title: 'Note 2',
      tasks: [
        { id: 1, done: true, text: 'The first TODO task.' },
        { id: 2, done: false, text: 'The second TODO task.' },
        { id: 3, done: true, text: 'The third TODO task.' },
        { id: 4, done: true, text: 'The first TODO task.' },
        { id: 5, done: false, text: 'The second TODO task.' },
        { id: 6, done: true, text: 'The third TODO task.' },
      ],
    },
    {
      id: 5,
      title: 'Note 2',
      tasks: [{ id: 1, done: true, text: 'The first TODO task.' }],
    },
    {
      id: 6,
      title: 'Note 2',
      tasks: [
        { id: 1, done: true, text: 'The first TODO task.' },
        { id: 2, done: false, text: 'The second TODO task.' },
        { id: 3, done: true, text: 'The third TODO task.' },
      ],
    },
    {
      id: 7,
      title: 'Note 2',
    },
    {
      id: 8,
      title: 'Note 2',
      tasks: [
        { id: 1, done: true, text: 'The first TODO task.' },
        { id: 2, done: false, text: 'The second TODO task.' },
        { id: 3, done: true, text: 'The third TODO task.' },
      ],
    },
    {
      id: 9,
      title: 'Note 2',
      tasks: [
        { id: 1, done: true, text: 'The first TODO task.' },
        { id: 2, done: false, text: 'The second TODO task.' },
        { id: 3, done: true, text: 'The third TODO task.' },
      ],
    },
    {
      id: 10,
      title: 'Note 2',
      tasks: [
        { id: 1, done: true, text: 'The first TODO task.' },
        { id: 2, done: false, text: 'The second TODO task.' },
        { id: 3, done: true, text: 'The third TODO task.' },
      ],
    },
    {
      id: 11,
      title: 'Note 2',
      tasks: [
        { id: 1, done: true, text: 'The first TODO task.' },
        { id: 2, done: false, text: 'The second TODO task.' },
        { id: 3, done: true, text: 'The third TODO task.' },
      ],
    },
    {
      id: 12,
      title: 'Note 2',
      tasks: [
        { id: 1, done: true, text: 'The first TODO task.' },
        { id: 2, done: false, text: 'The second TODO task.' },
        { id: 3, done: true, text: 'The third TODO task.' },
      ],
    },
    {
      id: 13,
      title: 'Note 2',
      tasks: [
        { id: 1, done: true, text: 'The first TODO task.' },
        { id: 2, done: false, text: 'The second TODO task.' },
        { id: 3, done: true, text: 'The third TODO task.' },
      ],
    },
  ])
}
