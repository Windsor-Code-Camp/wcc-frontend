import { useEffect, useState, useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import WccContext from "../contexts/WccContext";

const PrivateRoute = () => {
	const { isAuthenticated } = useContext(WccContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const i = setTimeout(() => setLoading(false), 100);
		return () => clearTimeout(i);
	}, []);

	return (
		<>
			{loading ? (
				<p>Loading...</p>
			) : (
				<>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>
			)}
		</>
	);
};

export default PrivateRoute;
