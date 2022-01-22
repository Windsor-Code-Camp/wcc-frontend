import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <div className="">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/apply" element={<Apply />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
