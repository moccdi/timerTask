import {compose, mapProps} from 'recompose';
import TaskChart2 from './TaskChart2';
import tableData from "../../helpers/tableData";





export default compose(
    mapProps(({ row,...props}) => ({
        ...props,
        data: tableData(new Date(row.timeStart),new Date(row.timeSpend))
    })),
    )(TaskChart2);