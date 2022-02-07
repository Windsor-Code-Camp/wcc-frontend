import { useEffect } from "react";
import CeoMessage from "../components/CeoMessage";
import HeroSection from "../components/HeroSection";
import WhyWCC from "../components/WhyWCC";
import OurCoursesSection from "../components/OurCoursesSection";
import JoinOurCommunity from "../components/JoinOurCommunity";

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
			<JoinOurCommunity />
		</div>
	);
}

export default HomePage;
