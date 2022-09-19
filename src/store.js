import { storeCreator } from "redux";
import rootReducer from "./reducer/index";

const store=storeCreator(rootReducer)

export default store;
