import productreducer from "./product.reducer";
import {createStore} from 'redux'
// import {composedWithDevTools} from '@redux-devtools/extension'
let store= createStore(productreducer)
export {store}