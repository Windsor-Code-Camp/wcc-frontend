import { useEffect } from "react";
import HeroSection from "../components/HeroSection";

function HomePage() {
	useEffect(() => {
		document.title = "WCC - Home";
	});

	return (
		<div>
			<HeroSection />
		</div>
	);
}

export default HomePage;
