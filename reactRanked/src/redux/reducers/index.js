import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategory";
import categoryReducer from "./categoryReducer";
import productsReducer from "./productReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
changeCategoryReducer,
categoryReducer,
productsReducer,
cartReducer,
userReducer,
});

export default rootReducer;