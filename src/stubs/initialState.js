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
      date: new Date(70, 0,1),
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
    date: new Date(70, 0, 1),
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
      timeStart: new Date(70, 0, 1,11,28,14),
      timeEnd: new Date(70, 0, 1,11,31,23),
      timeSpend: new Date(70, 0, 1,0,3,8),
    },
    {
      id: 2,
      task: 'long task',
      timeStart: new Date(70, 0, 1,9,51,57),
      timeEnd: new Date(70, 0, 1,11,53,38),
      timeSpend: new Date(70, 0, 1,2,1,41),
    },
    {
      id: 3,
      task: 'some new',
      timeStart: new Date(70, 0, 1,12,39,51),
      timeEnd: new Date(70, 0, 1,12,46,19),
      timeSpend: new Date(70, 0, 1,0,6,28),
    },
    {
      id: 4,
      task: 'last one task',
      timeStart: new Date(70, 0, 1,12,50,20),
      timeEnd: new Date(70, 0, 1,12,50,53),
      timeSpend: new Date(70, 0, 1,0,0,33),
    }],
  }
}


export default initialState
