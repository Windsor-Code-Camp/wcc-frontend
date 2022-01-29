import { useEffect } from "react";
import RegisterForm from "../components/RegisterForm";

function Register() {
	useEffect(() => {
		document.title = "WCC - Register";
	}, []);

	return (
		<div className="container">
			<RegisterForm />
		</div>
	);
}

export default Register;
