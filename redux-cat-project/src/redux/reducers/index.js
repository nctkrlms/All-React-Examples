import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategory";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
changeCategoryReducer,
categoriesReducer,
productsReducer,
cartReducer
});

export default rootReducer;