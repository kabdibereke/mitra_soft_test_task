import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getPostSuccess, getPostFailure } from "./slice/postSlice";
// import { getCommentSuccess, getCommentFailure } from "./slice/commentSlice";
import { getUserSuccess, getUserFailure } from "./slice/userSlice";
import { fetchPosts, fetchUsers } from "../api";
import { IComment, IPost, IUser } from "../interface/interface";

function* getPostSaga(): Generator<any, void, IPost[]> {
	try {
		yield delay(500);
		const posts = yield call(fetchPosts);
		yield put(getPostSuccess(posts));
	} catch (error) {
		//@ts-ignore
		yield put(getPostFailure(error.message));
	}
}

// function* getCommentSaga(action: {
// 	type: string;
// 	payload: number;
// }): Generator<any, void, IComment[]> {
// 	try {
// 		yield delay(500);
// 		const comments = yield call(fetchComments, action.payload);
// 		yield put(getCommentSuccess(comments));
// 	} catch (error) {
// 		//@ts-ignore
// 		yield put(getCommentFailure(error.message));
// 	}
// }

function* getUserSaga(action: {
	type: string;
	payload: number;
}): Generator<any, void, IUser> {
	try {
		yield delay(500);
		const users = yield call(fetchUsers, action.payload);
		yield put(getUserSuccess(users));
	} catch (error) {
		//@ts-ignore
		yield put(getUserFailure(error.message));
	}
}

function* rootSaga() {
	yield takeLatest("post/getPostStart", getPostSaga);
	// yield takeLatest("comment/getCommentStart", getCommentSaga);
	yield takeLatest("user/getUserStart", getUserSaga);
}

export default rootSaga;
