import { createContext, useState, useEffect } from "react";
const { REACT_APP_WCC_API_URL } = process.env;

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

	const loginUser = async ({ email, password }) => {
		const options = {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ username: email, password: password }),
		};

		let resp = await fetch(`${REACT_APP_WCC_API_URL}/api/login/`, options);

		if (resp.status !== 200) {
			console.log(options, resp);
		}
		let data = await resp.json();
		console.log(data);
		setTokens(data);
		localStorage.setItem("tokens", JSON.stringify(data));
	};

	const logout = async (accessToken) => {
		setUserId(-1);
		setTokens({});
	};

	const contextValues = {
		tokens: tokens,
		loginUser: loginUser,
		userId: userId,
	};

	return (
		<WccContext.Provider value={contextValues}>
			{children}
		</WccContext.Provider>
	);
};
