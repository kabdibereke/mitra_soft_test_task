import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import postSlice from "./slice/postSlice";
import userSlice from "./slice/userSlice";
import commentSlice from "./slice/commentSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		post: postSlice,
		user: userSlice,
		comment: commentSlice,
	},
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
