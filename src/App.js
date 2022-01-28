import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthTokenProvider from "./providers/AuthTokenProvider";

import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import NavigationBar from "./components/NavigationBar";

function App() {
    return (
        <AuthTokenProvider>
            <Router>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/apply" element={<Apply />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </AuthTokenProvider>
    );
}

export default App;
