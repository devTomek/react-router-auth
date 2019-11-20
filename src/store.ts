import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { InitialState } from "./types/store";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(initialState: InitialState = {}): Store {
	return createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunk))
	);
}
