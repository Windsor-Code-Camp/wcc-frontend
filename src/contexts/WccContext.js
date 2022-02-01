import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const { REACT_APP_WCC_API_URL } = process.env;
const REFRESH_TOKENS_TIMEOUT = 4.5 * 60 * 1000; // Call refresh method after 4.5 minutes

const WccContext = createContext();
export default WccContext;

export const WccProvider = ({ children }) => {
	const [tokens, setTokens] = useState({});
	const [isAuthenticated, setAuthenticated] = useState(false);
	const [userId, setUserId] = useState(-1);

	const navigate = useNavigate();

	useEffect(() => {
		const t = localStorage.getItem("tokens");
		if (t !== null) {
			const data = JSON.parse(t);
			setTokens(data);
			extractDataFromTokens(data);
			setAuthenticated(true);
		}
	}, []);

	useEffect(() => {
		if (tokens.access) {
			localStorage.setItem("tokens", JSON.stringify(tokens));
		}
	}, [tokens]);

	const extractDataFromTokens = (t) => {
		if (t.access) {
			const decodedObject = jwt_decode(t.access);
			setUserId(decodedObject.user_id);
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
			localStorage.setItem("tokens", JSON.stringify(data));
			setTokens(data);
			extractDataFromTokens(data);
			setAuthenticated(true);
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
		setAuthenticated(false);
		localStorage.removeItem("tokens");
	};

	const refreshTokens = async (callBack) => {
		const options = {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ refresh: tokens.refresh }),
		};
		const resp = await fetch(
			`${REACT_APP_WCC_API_URL}/api/login/refresh/`,
			options
		);
		const data = await resp.json();
		if (resp.status === 200) {
			console.log("refreshing tokens!");
			setTokens(data);
			setAuthenticated(true);
			extractDataFromTokens(data);
		} else {
			console.log("refresh failed! logging out...");
			await logoutUser();
		}
		return { status: resp.status, json: data };
	};

	/*

Proper front end API calls are (simplified):

1. call protected endpoints using the access token obtained at login time.
2. if HTTP 401 call the refresh endpoint to obtain a new access and refresh token.
	- if also this has HTTP 401 then redirect to log in (and cleanup the stored
		tokens etc). The 401 on refresh endpoints means you cannot refresh your
		token (refresh expired, blacklisted, or whatever)
3. else, now you have a new access and refresh token: retry the call (1) with
	the new access token.

	*/

	const apiGetProtectedEndpoint = async (endpoint) => {
		let options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
		};

		const resp = await fetch(
			`${REACT_APP_WCC_API_URL}${endpoint}`,
			options
		);
		if (resp.status == 401) {
			const refreshResp = await refreshTokens();
			if (refreshResp.status === 401) {
				navigate("/login");
				return {};
			}

			// Redo request with new tokens
			options.headers.Authorization = `Bearer ${refreshResp.json.access}`;
			const newResp = await fetch(
				`${REACT_APP_WCC_API_URL}${endpoint}`,
				options
			);
			return await newResp.json();
		}
		return await resp.json();
	};

	const contextValues = {
		tokens,
		loginUser,
		logoutUser,
		userId,
		isAuthenticated,
		apiGetProtectedEndpoint,
	};

	return (
		<WccContext.Provider value={contextValues}>
			{children}
		</WccContext.Provider>
	);
};
