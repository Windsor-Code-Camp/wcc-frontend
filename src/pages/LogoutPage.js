import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import WccContext from "../contexts/WccContext";

const Logout = () => {
	const { logoutUser } = useContext(WccContext);
	const navigate = useNavigate();

	useEffect(() => {
		document.title = "WCC - Logout";

		logoutUser();
		navigate("/");
	}, []);

	return (
		<div className="container">
			<h1>Logging out...</h1>
		</div>
	);
};

export default Logout;
