import { createStore } from "redux";
import rootReducer from "./reducer";

import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancers = composeWithDevTools();
export const store = createStore(rootReducer, composedEnhancers);
