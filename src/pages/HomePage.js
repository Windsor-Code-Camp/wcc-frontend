import { useEffect } from "react";
import CeoMessage from "../components/HomePage/CeoMessage";
import HeroSection from "../components/HomePage/HeroSection";
import WhyWCC from "../components/HomePage/WhyWCC";
import OurCoursesSection from "../components/HomePage/OurCoursesSection";
import JoinOurCommunity from "../components/HomePage/JoinOurCommunity";

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
