import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

interface IInitialState {}

export default function configureStore(
	initialState: IInitialState = {}
): Store {
	return createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunk))
	);
}
