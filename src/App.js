import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import LoginBar from "./components/LoginBar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Apply from "./pages/Apply";

function App() {
    return (
        <Router>
            <div>
                <LoginBar />
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/apply" element={<Apply />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
