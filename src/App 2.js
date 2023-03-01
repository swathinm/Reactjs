import React from "react";
import Product from "./Product/product";
import { store } from "./Reducer/store";
import { Provider } from "react-redux";
import Etapp from "./EtApp/Etapp";
const App =()=>{
  return(
    <div>
      <Provider store={store}>
         <h1>App component</h1>    
         <hr/>
         <Product/>
         <Etapp/>
      </Provider>
    </div>
  )
}
export default App
