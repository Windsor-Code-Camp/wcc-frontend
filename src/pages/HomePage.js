import { useEffect } from "react";
import CeoMessage from "../components/HomePage/CeoMessage";
import HeroSection from "../components/HomePage/HeroSection";
import WhyWCC from "../components/HomePage/WhyWCC";
import OurCoursesSection from "../components/HomePage/OurCoursesSection";
import WhatOurStudentsSay from "../components/HomePage/WhatOurStudentsSay";

function HomePage() {
	useEffect(() => {
		document.title = "WCC - Home";
	});

	return (
		<div>
			<HeroSection />
			<CeoMessage />
			<WhatOurStudentsSay />
			<WhyWCC />
			<OurCoursesSection />
		</div>
	);
}

export default HomePage;
