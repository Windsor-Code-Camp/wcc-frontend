import { useEffect } from "react";
import CeoMessage from "../components/CeoMessage";
import HeroSection from "../components/HeroSection";
import WhyWCC from "../components/WhyWCC";

function HomePage() {
	useEffect(() => {
		document.title = "WCC - Home";
	});

	return (
		<div>
			<HeroSection />
			<CeoMessage />
			<WhyWCC />
		</div>
	);
}

export default HomePage;
