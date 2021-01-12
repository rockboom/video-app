import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import promie from 'redux-promise';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';
import history from '@/history';
import rootReducer from './reducers';
// let store = createStore();
// promise和thunk都是中间件
// promise可以让我们派发promise thunk可以让我们派发函数
let store = applyMiddleware(routerMiddleware(history),promie,thunk,logger)(createStore)(rootReducer);
export default store;