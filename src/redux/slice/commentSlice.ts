// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IComment } from "../../interface/interface";

// interface CommentState {
// 	comment: IComment[];
// 	loading: boolean;
// 	error: string | null;
// }

// const initialState: CommentState = {
// 	comment: [],
// 	loading: false,
// 	error: null,
// };

// const commentSlice = createSlice({
// 	name: "comment",
// 	initialState,
// 	reducers: {
// 		getCommentStart(state) {
// 			state.loading = true;
// 			state.error = null;
// 		},
// 		getCommentSuccess(state, action: PayloadAction<IComment[]>) {
// 			state.loading = false;
// 			state.comment.push(...action.payload);
// 		},
// 		getCommentFailure(state, action: PayloadAction<string>) {
// 			state.loading = false;
// 			state.error = action.payload;
// 		},
// 	},
// });

// export const { getCommentStart, getCommentSuccess, getCommentFailure } =
// 	commentSlice.actions;

// export default commentSlice.reducer;
