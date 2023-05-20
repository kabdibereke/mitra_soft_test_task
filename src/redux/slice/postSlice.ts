import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../interface/interface";

interface PostState {
	post: IPost[];
	loading: boolean;
	error: string | null;
}

const initialState: PostState = {
	post: [],
	loading: false,
	error: null,
};

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		getPostStart(state) {
			state.loading = true;
			state.error = null;
		},
		getPostSuccess(state, action: PayloadAction<IPost[]>) {
			state.loading = false;
			state.post = action.payload;
		},
		getPostFailure(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { getPostStart, getPostSuccess, getPostFailure } =
	postSlice.actions;

export default postSlice.reducer;
