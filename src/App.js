import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import HomePage from "./pages/HomePage";
import ApplyPage from "./pages/ApplyPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import RegisterPage from "./pages/RegisterPage";
import UserProfile from "./pages/UserProfile";
import { WccProvider } from "./contexts/WccContext";
import LoginBar from "./components/LoginBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PythonBeginnerCourse from "./pages/PythonBeginnerCourse";

function App() {
	return (
		<Router>
			<WccProvider>
				<LoginBar />
				<Navbar />

				<div className="">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/apply" element={<ApplyPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/logout" element={<LogoutPage />} />
						<Route path="/register" element={<RegisterPage />} />

						{/* remove later to add in the dropdown menu */}

						<Route path="/courses">
							<Route path="python">
								<Route
									path="beginner"
									element={<PythonBeginnerCourse />}
								/>
							</Route>
						</Route>

						<Route element={<PrivateRoute />}>
							<Route
								path="/user/profile"
								element={<UserProfile />}
							/>
						</Route>
					</Routes>
				</div>

				<Footer />
			</WccProvider>
		</Router>
	);
}

export default App;
