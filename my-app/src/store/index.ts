import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore, StoreEnhancer } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "../components/home/productReducer";

// Редюсер якій об'єднує редюсери
export const rootReducer = combineReducers({
    product: productReducer
});

export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)))
