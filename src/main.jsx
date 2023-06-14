import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ProductsReducer } from "./reducers/ProductsReducer.js";
import { combineReducers } from "redux";

const store = createStore(
  combineReducers({
    products: ProductsReducer,
  })
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

/*
1. Criar a Store
2. Criar os reducers
*/
