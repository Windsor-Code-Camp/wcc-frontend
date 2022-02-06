import { useEffect } from "react";
import CeoMessage from "../components/CeoMessage";
import HeroSection from "../components/HeroSection";

function HomePage() {
	useEffect(() => {
		document.title = "WCC - Home";
	});

	return (
		<div>
			<HeroSection />
			<CeoMessage />
		</div>
	);
}

export default HomePage;
