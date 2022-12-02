import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer/userReducer";

const rootReducer = combineReducers({
  userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
