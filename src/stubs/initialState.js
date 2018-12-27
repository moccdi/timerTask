

const initialState = {
    date: new Date(70, 0),
    dateStart: false,
    nameTask: "",
    TabContainerOpen: 0,
    modalOpen: false,
    buttonState: true,
    taskPage: 1,
    rows: [{
        id: 1,
        task: "lorem ipsum d...",
        timeStart: "1969-12-31T08:28:14.000Z",
        timeEnd: "1969-12-31T08:31:23.000Z",
        timeSpend: "1969-12-30T21:03:08.000Z",
    },
    {
        id: 2,
        task: "long task",
        timeStart: "1969-12-31T06:51:57.000Z",
        timeEnd: "1969-12-31T08:53:38.000Z",
        timeSpend: "1969-12-30T23:02:41.000Z",
    },
    {
        id: 3,
        task: "some new",
        timeStart: "1969-12-31T09:39:51.000Z",
        timeEnd: "1969-12-31T09:39:51.000Z",
        timeSpend: "1969-12-30T21:06:28.000Z",
    },
    {
        id: 4,
        task: "last one task",
        timeStart: "1969-12-31T09:50:20.000Z",
        timeEnd: "1969-12-31T09:50:53.000Z",
        timeSpend: "1969-12-30T21:08:53.000Z",
    }]
}

export default initialState;
