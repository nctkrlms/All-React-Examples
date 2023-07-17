import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryReducer from "./categoryReducer";
import favoriteReducer from "./favoriteReducer";
import bookReducer from "./bookReducer";
import loginUserReducer from "./loginUserReducer";
import registerUserReducer from "./registerUserReducer";
import logoutUserReducer from "./logoutUserReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryReducer,
    favoriteReducer,  // 2
    bookReducer,
    loginUserReducer,
    registerUserReducer,
    logoutUserReducer,
    userReducer,
});
    


export default rootReducer;
