import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WccContext from "../contexts/WccContext";

const { REACT_APP_WCC_API_URL } = process.env;

const LoginForm = ({ onSubmit }) => {
	// HOOKS
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
			<h1>Login Here!</h1>
			<form
				className="d-flex flex-column"
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit(e);
				}}
			>
				<div>
					<label className="my-2 text-center w-25">Email: </label>
					<input
						type="text"
						name="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label className="my-2 text-center w-25">Password: </label>
					<input
						type="password"
						name="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div>
					<input type="submit" />
				</div>
			</form>
			<div>
				Don't have an account? <Link to="/register">Sign up here!</Link>
			</div>
		</div>
	);
};

export default LoginForm;
