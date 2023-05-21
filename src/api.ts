import axios from "axios";
import { IComment, IPost, IUser } from "./interface/interface";

export const fetchPosts = async () => {
	const response = await axios.get<IPost[]>(
		"https://jsonplaceholder.typicode.com/posts",
	);
	return response.data;
};

export const fetchComments = async (id: number) => {
	const response = await axios.get<IComment[]>(
		`https://jsonplaceholder.typicode.com/comments`, {
		    params: {
				postId:id
		    }
		},
	);
	return response.data;
};

export const fetchUsers = async (id: number) => {
	const response = await axios.get<IUser[]>(
		`https://jsonplaceholder.typicode.com/users/${id}`,
	);
	return response.data;
};
