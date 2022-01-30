import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WccContext from "../contexts/WccContext";

const UserProfile = () => {
	const { userId, apiGetProtectedEndpoint } = useContext(WccContext);
	const [data, setData] = useState({});

	useEffect(() => {
		apiGetProtectedEndpoint(`/api/users/${userId}`).then((data) => {
			console.log(data);
			setData(data);
		});
	}, []);
	return (
		<div className="container">
			<h1>Hello {data.first_name}</h1>
		</div>
	);
};

export default UserProfile;
