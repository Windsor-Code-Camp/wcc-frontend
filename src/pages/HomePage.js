import { useEffect } from "react";
import CeoMessage from "../components/CeoMessage";
import HeroSection from "../components/HeroSection";
import WhyWCC from "../components/WhyWCC";
import OurCoursesSection from "../components/OurCoursesSection";

function HomePage() {
	useEffect(() => {
		document.title = "WCC - Home";
	});

	return (
		<div>
			<HeroSection />
			<CeoMessage />
			<WhyWCC />
			<OurCoursesSection />
		</div>
	);
}

export default HomePage;
