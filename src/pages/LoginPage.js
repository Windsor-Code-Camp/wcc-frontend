import { useEffect, useContext } from "react";
import LoginForm from "../components/LoginForm";
import WccContext from "../contexts/WccContext";

function Login() {
	useEffect(() => {
		document.title = "WCC - Login";
	}, []);

	const { loginUser } = useContext(WccContext);

	const handleSubmit = (e) => {
		const data = {
			email: e.target.email.value,
			password: e.target.password.value,
		};
		console.log(data);
		const resp = loginUser(data);
	};

	return (
		<div className="container">
			<LoginForm onSubmit={handleSubmit} />
		</div>
	);
}

export default Login;
