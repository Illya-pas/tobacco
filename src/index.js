import React from "react";
import { render } from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/reducers/rootReducer";
import App from "./App";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk)
	)
);

const app = (
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>
);

render(app, document.getElementById("root"));

reportWebVitals();
