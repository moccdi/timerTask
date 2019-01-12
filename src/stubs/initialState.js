const localState = localStorage.getItem('state')
let initialState
if (localState) {
  if (JSON.parse(localState).dateStart) {
    initialState = {
      date: new Date(new Date() - new Date(JSON.parse(localState).dateStart) - 10800000),
      dateStart: new Date(JSON.parse(localState).dateStart),
      runData: true,
      nameTask: JSON.parse(localState).nameTask,
      TabContainerOpen: JSON.parse(localState).TabContainerOpen,
      buttonState: JSON.parse(localState).buttonState,
      modalOpen: false,
      taskPage: JSON.parse(localState).taskPage,
      rows: JSON.parse(localState).rows,
    }
  } else {
    initialState = {
      date: new Date(70, 0),
      dateStart: false,
      runData: false,
      nameTask: JSON.parse(localState).nameTask,
      TabContainerOpen: JSON.parse(localState).TabContainerOpen,
      buttonState: JSON.parse(localState).buttonState,
      modalOpen: false,
      taskPage: JSON.parse(localState).taskPage,
      rows: JSON.parse(localState).rows,
    }
  }
} else {
  initialState = {
    date: new Date(70, 0),
    dateStart: false,
    runData: false,
    nameTask: '',
    TabContainerOpen: 0,
    modalOpen: false,
    buttonState: true,
    taskPage: 1,
    rows: [{
      id: 1,
      task: 'lorem ipsum d...',
      timeStart: '1969-12-31T08:28:14.000Z',
      timeEnd: '1969-12-31T08:31:23.000Z',
      timeSpend: '1969-12-30T21:03:08.000Z',
    },
    {
      id: 2,
      task: 'long task',
      timeStart: '1969-12-31T06:51:57.000Z',
      timeEnd: '1969-12-31T08:53:38.000Z',
      timeSpend: '1969-12-30T23:02:41.000Z',
    },
    {
      id: 3,
      task: 'some new',
      timeStart: '1969-12-31T09:39:51.000Z',
      timeEnd: '1969-12-31T09:39:51.000Z',
      timeSpend: '1969-12-30T21:06:28.000Z',
    },
    {
      id: 4,
      task: 'last one task',
      timeStart: '1969-12-31T09:50:20.000Z',
      timeEnd: '1969-12-31T09:50:53.000Z',
      timeSpend: '1969-12-30T21:08:53.000Z',
    }],
  }
}


export default initialState
