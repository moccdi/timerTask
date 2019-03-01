import React from 'react'
import App from './App'
import renderer from 'react-test-renderer'
import AppIndex from "./index";
import NodFound from "../NodFound/NodFound";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../../reducers";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import generateRows from "../../helpers/generateRows";





// describe('>>>H O M E --- Snapshot',()=>{ //работает что бы сделать скриншот
//   it('+++capturing Snapshot of Home', () => {
//     const renderedValue =  renderer.create(<App/>).toJSON()
//     expect(renderedValue).toMatchSnapshot();
//   });
// });
//
// it('should render  App Shallow', () => {
//     const wrapper = shallow(
//         <App/>
//     );
//     expect(wrapper).toMatchSnapshot();
// });

// import configureStore from 'redux-mock-store';
// import initialState from '../../stubs/initialState'
// import { createBrowserHistory } from 'history'
// import { Provider } from "react-redux";
// import { deleteTask } from "../Actions";
// import rootSaga from "../../saga";
// const history = createBrowserHistory()
// const sagaMiddleware = createSagaMiddleware()
//
//
// describe('HOME',()=>{
//   let store,wrapper, mockStore
//
//   beforeEach(()=>{
//     store = createStore(
//       rootReducer(history),
//       applyMiddleware(
//         routerMiddleware(history),
//         sagaMiddleware,
//       ),
//     )
//     // sagaMiddleware.run(rootSaga)
//     //store.runSaga = sagaMiddleware.run(rootSaga);
//     //
//     // store.runSaga(rootSaga);
//     // window.store = store
//
//     // sagaMiddleware.run(rootSaga)
//     // window.store = store
//
//     wrapper = mount(
//       <Provider store={store}>
//         <AppIndex history={history} />
//       </Provider>, )
//   })
//
//   it('+++ check Prop matches with initialState', () => {
//
//     expect(wrapper).toMatchSnapshot()
//     //expect(wrapper).not.toBe(null)
//     //expect(wrapper.find(AppIndex).childAt(0).childAt(0).childAt(0).get(0).props.initialState.date).toEqual(new Date(70, 0, 1))
//     // expect(wrapper.find(App).get(0).props.initialState).toEqual(initialState)
//     // store.dispatch(deleteTask(1, initialState.rows))
//     // // store.dispatch(deleteTask(2, ))
//     // expect(wrapper.find(App).get(0).props.initialState).toEqual(initialState)
//   });
//
// });



// describe('HOME',()=>{
//     let store,wrapper
//
//       beforeEach(()=>{
//         store = createStore(
//           rootReducer(history),
//             applyMiddleware(
//               routerMiddleware(history),
//               sagaMiddleware,
//             ),
//
//         )
//         sagaMiddleware.run(rootSaga)
//         window.store = store
//         wrapper = mount(
//           <Provider store={store}>
//             <AppIndex history={history} />
//           </Provider>, )
//     })
//
//     it('+++ check Prop matches with initialState', () => {
//       //expect(wrapper).toMatchSnapshot()
//       //expect(wrapper).not.toBe(null)
//       //expect(wrapper.find(AppIndex).childAt(0).childAt(0).childAt(0).get(0).props.initialState.date).toEqual(new Date(70, 0, 1))
//       //expect(wrapper.find(App).get(0).props.initialState).toEqual(initialState)
//       store.dispatch(deleteTask(1, initialState.rows))
//       store.dispatch(deleteTask(2, ))
//     });
//
// });





// it('State App', () => {
//   const wrapper = mount(<App />)
//   expect(wrapper.state().initialState.runData).toEqual(false)
// })


// test('should render App Jest ', () => {
//     const component = renderer.create(
//         <App/>,
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });


// it('should render App Mount', () => {
//     const wrapper = mount(
//         <App/>
//     );
//     expect(wrapper).toMatchSnapshot();
// });

// it('should render  App Shallow', () => {
//     const wrapper = shallow(
//         <App/>
//     );
//     expect(wrapper).toMatchSnapshot();
// });
