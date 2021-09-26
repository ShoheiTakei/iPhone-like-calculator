// combineReducersとは？
// combineReducers(仮引数)の中に、複数の値が入ってきても一つにまとめてくれる機能がある
// 注意　今回は一つなので、本当は使う必要はない。練習のために使用している。
import { combineReducers } from 'redux';
import calculator from './calculator';

const reducer = combineReducers({ calculator });

export default reducer;
