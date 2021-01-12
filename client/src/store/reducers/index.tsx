import {AnyAction, combineReducers,ReducersMapObject,Reducer} from 'redux'
import {connectRouter, RouterState} from 'connected-react-router'
import home from './home'
import mine from './mine'
import profile from './profile'
import history from '@/history'
import {CombinedState} from '@/typings/state'
//1.
// // 我们先自己构建RootState 根状态
// interface RootState {
//     home:HomeState;
//     mine:MineState;
//     profile:ProfileState;
//     router:RouterState
// }
// // [K in keyof S]: Reducers<S[k], A>
// let reducers: ReducersMapObject<RootState,AnyAction> = {
//     home,
//     mine,
//     profile,
//     router: connectRouter(history)
// }
// const rootReducer:Reducer<RootState,AnyAction> = combineReducers<RootState>(reducers);

//2.
// 我们先自己构建CombinedState 根状态 合并后的状态 也就是根状态
// export interface CombinedState {
//     home: HomeState;
//     mine: MineState;
//     profile: ProfileState;
//     router: RouterState
// }


// [K in keyof S]: Reducers<S[k], A>
let reducers: ReducersMapObject<CombinedState, AnyAction> = {
    home,
    mine,
    profile,
    router: connectRouter(history)
}
const rootReducer: Reducer<CombinedState, AnyAction> = combineReducers<CombinedState>(reducers);


// export type RootState = {
//     // 迭代reducers所有的key   reducers[key]是reducer的类型  ReturnType 返回此函数类型的返回值类型
//     [key in keyof typeof reducers]:ReturnType<typeof reducers[key]>
// }

// RootState的样子
// interface RootState1{
//     home:HomeState;
//     mine:MineState;
//     profile:ProfileState;
//     router:RouterState<any>
// }
export default rootReducer;