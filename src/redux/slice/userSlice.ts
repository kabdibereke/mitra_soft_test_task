import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interface/interface";

interface UserState {
	user: IUser;
	loading: boolean;
	error: string | null;
}

const initialState: UserState = {
	user: {} as IUser,
	loading: false,
	error: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		getUserStart(state) {
			state.loading = true;
			state.error = null;
		},
		getUserSuccess(state, action: PayloadAction<IUser>) {
			state.loading = false;
			state.user = action.payload;
		},
		getUserFailure(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { getUserStart, getUserSuccess, getUserFailure } =
	userSlice.actions;

export default userSlice.reducer;
