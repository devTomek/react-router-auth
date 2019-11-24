import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { IInitialState } from "./types/store";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(
	initialState: IInitialState = {}
): Store {
	return createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunk))
	);
}
