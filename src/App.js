import HeroSection from "./components/HeroSection";
import LoginBar from "./components/LoginBar";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="bg-zinc-100 h-screen">
            <LoginBar />
            <Navbar />
            <HeroSection />
        </div>
    );
}

export default App;
