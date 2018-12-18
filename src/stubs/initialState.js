import {Button} from "@material-ui/core";
import React from "react";

const initialState = {
    date: new Date(+(new Date()) - Math.floor(Math.random()*10000000000)),
    dataStart: null,
    nameTask: "",
    TabContainerOpen: 0,
    modalOpen: false,
    buttonState: true,
    value: 0,
    rows: [{
        id: 1,
        name: 1,
        task: "lorem ipsum d...",
        timeStart: "11:28:14",
        timeEnd: "11:31:23",
        timeSpend: "00:03:08",
        info: <Button
            variant="contained"
            className={cx('buttonStop')}
        > INFO
        </Button>,
        delete: <Button
            variant="contained"
            className={cx('buttonStop')}
            onClick={() => this.deleteTask(1)}
        > DELETE
        </Button>,
    },
        {
            id: 2,
            name: 2,
            task: "long task",
            timeStart: "09:51:57",
            timeEnd: "11:53:38",
            timeSpend: "02:01:41",
            info: <Button
                variant="contained"
                className={cx('buttonStop')}
            > INFO
            </Button>,
            delete: <Button
                variant="contained"
                className={cx('buttonStop')}
                onClick={() => this.deleteTask(2)}
            > DELETE
            </Button>,
        },
        {
            id: 3,
            name: 3,
            task: "some new",
            timeStart: "12:39:51",
            timeEnd: "12:46:19",
            timeSpend: "00:06:28",
            info: <Button
                variant="contained"
                className={cx('buttonStop')}
            > INFO
            </Button>,
            delete: <Button
                variant="contained"
                className={cx('buttonStop')}
                onClick={() => this.deleteTask(3)}
            > DELETE
            </Button>,
        },
        {
            id: 4,
            name: 4,
            task: "last one task",
            timeStart: "12:50:20",
            timeEnd: "12:50:53",
            timeSpend: "00:00:33",
            info: <Button
                variant="contained"
                className={cx('buttonStop')}
            > INFO
            </Button>,
            delete: <Button
                variant="contained"
                className={cx('buttonStop')}
                onClick={() => this.deleteTask(4)}
            > DELETE
            </Button>,
        }],
}

export default initialState;
