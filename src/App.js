import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import LoginBar from "./components/LoginBar";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <div>
                <LoginBar />
                <Navbar />

                <Routes>
                    <Route path="/" element={<HeroSection />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
