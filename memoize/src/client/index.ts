import { MemoizeCache } from '../model/model.js';
import { memoize, myFn } from '../controller/controller.js';

// При первом вызове memoize создается пустой объект cache, который будет использоваться для хранения результатов выполнения функции
let cache: MemoizeCache<any> = {};

const myFnMemoize = memoize(myFn, cache);
console.log('myFnMemoize:', myFnMemoize(2, 'abc'));
console.log('myFnMemoize:', myFnMemoize(2, 'ab'));
console.log('myFnMemoize:', myFnMemoize(2, 'abc'));
console.log('myFnMemoize:', myFnMemoize(2, 'something'));
