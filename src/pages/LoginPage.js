import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import WccContext from "../contexts/WccContext";

function Login() {
	useEffect(() => {
		document.title = "WCC - Login";
	}, []);

	const { loginUser } = useContext(WccContext);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		const data = {
			email: e.target.email.value,
			password: e.target.password.value,
		};
		loginUser(data).then((resp) => {
			console.log(resp);
			navigate("/");
		});
	};

	return (
		<div className="container">
			<LoginForm onSubmit={handleSubmit} />
		</div>
	);
}

export default Login;
