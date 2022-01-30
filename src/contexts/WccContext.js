import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
const { REACT_APP_WCC_API_URL } = process.env;
const REFRESH_TOKENS_TIMEOUT = 4.5 * 60 * 1000; // Call refresh method after 4.5 minutes

const WccContext = createContext();
export default WccContext;

export const WccProvider = ({ children }) => {
	const [tokens, setTokens] = useState({});
	const [userId, setUserId] = useState(-1);

	useEffect(() => {
		const t = localStorage.getItem("tokens");
		if (t !== null) {
			setTokens(JSON.parse(t));
		}
	}, []);

	useEffect(() => {
		if (tokens.access) {
			extractDataFromToken(tokens.access);
			const intervalId = setTimeout(
				refreshTokens,
				REFRESH_TOKENS_TIMEOUT
			);
			return () => clearTimeout(intervalId);
		}
	}, [tokens]);

	const extractDataFromToken = (t) => {
		if (t) {
			const decodedObject = jwt_decode(t);
			setUserId(decodedObject.user_id);
		}
	};

	const refreshTokens = async () => {
		const options = {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
			body: JSON.stringify({ refresh: tokens.refresh }),
		};
		const resp = await fetch(
			`${REACT_APP_WCC_API_URL}/api/login/refresh/`,
			options
		);
		const data = await resp.json();
		if (resp.status === 200) {
			console.log("refreshed tokens!");
			setTokens(data);
		} else {
			console.log("refresh failed! logging out...");
			logoutUser();
		}
	};

	const loginUser = async ({ email, password }) => {
		const options = {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ username: email, password: password }),
		};

		const resp = await fetch(
			`${REACT_APP_WCC_API_URL}/api/login/`,
			options
		);

		if (resp.status === 200) {
			let data = await resp.json();
			setTokens(data);
			localStorage.setItem("tokens", JSON.stringify(data));
			return resp.status;
		}
		logoutUser();
		return resp.status;
	};

	const logoutUser = async () => {
		const options = {
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
			method: "POST",
			body: JSON.stringify({ ...tokens }),
		};

		const resp = await fetch(
			`${REACT_APP_WCC_API_URL}/api/logout/`,
			options
		);
		const data = await resp.json();
		setUserId(-1);
		setTokens({});
		localStorage.removeItem("tokens");
	};

	const contextValues = {
		tokens,
		loginUser,
		logoutUser,
		userId,
	};

	return (
		<WccContext.Provider value={contextValues}>
			{children}
		</WccContext.Provider>
	);
};
