import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import HomePage from "./pages/HomePage";
import ApplyPage from "./pages/ApplyPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import RegisterPage from "./pages/RegisterPage";
import UserProfile from "./pages/UserProfile";
import NavigationBar from "./components/NavigationBar";
import { WccProvider } from "./contexts/WccContext";

function App() {
	return (
		<Router>
			<WccProvider>
				<NavigationBar />
				<div className="">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/apply" element={<ApplyPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/logout" element={<LogoutPage />} />
						<Route path="/register" element={<RegisterPage />} />

						<Route element={<PrivateRoute />}>
							<Route
								path="/user/profile"
								element={<UserProfile />}
							/>
						</Route>
					</Routes>
				</div>
			</WccProvider>
		</Router>
	);
}

export default App;
