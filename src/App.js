import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ApplyPage from "./pages/ApplyPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NavigationBar from "./components/NavigationBar";

function App() {
	return (
		<Router>
				<NavigationBar />
				<div className="">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/apply" element={<ApplyPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
					</Routes>
				</div>
		</Router>
	);
}

export default App;
