import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { useToken } from "../providers/AuthTokenProvider";

function Home() {
    useEffect(() => {
        document.title = "WCC - Home";
    }, []);

    const authToken = useToken();

    return (
        <div>
            {authToken !== "" && <h1>We're authenticated bitch</h1>}
            <HeroSection />
        </div>
    );
}

export default Home;
