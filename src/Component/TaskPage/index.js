import { compose, mapProps } from 'recompose';
import TaskPage from './TaskPage';
import tableData from "../../helpers/tableData";




export default compose(
    mapProps(({ row,...props}) => ({
        ...props,
        row,
        data: tableData(new Date(row.timeStart),new Date(row.timeSpend))
    })),
)(TaskPage);