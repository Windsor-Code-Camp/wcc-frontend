import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PythonBeginnerCourse from "./pages/PythonBeginnerCourse";
import PythonIntermediateCourse from "./pages/PythonIntermediateCourse";
import PythonAdvancedCourse from "./pages/PythonAdvancedCourse";
import AboutUs from "./pages/AboutUs";
import InvestInYourFuture from "./components/InvestInYourFuture";

function App() {
	return (
		<Router>
			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/courses">
					<Route path="python">
						<Route
							path="beginner"
							element={<PythonBeginnerCourse />}
						/>
						<Route
							path="intermediate"
							element={<PythonIntermediateCourse />}
						/>
						<Route
							path="advanced"
							element={<PythonAdvancedCourse />}
						/>
					</Route>
				</Route>
			</Routes>
			<InvestInYourFuture enrollBtnURL="/enroll" />
			<Footer />
		</Router>
	);
}

export default App;
