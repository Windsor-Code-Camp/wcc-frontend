import { useEffect } from "react";
import HeroSection from "../components/HeroSection";

function Home() {
    useEffect(() => {
        document.title = "WCC - Home";
    });

    return (
        <div>
            <HeroSection />
        </div>
    );
}

export default Home;
