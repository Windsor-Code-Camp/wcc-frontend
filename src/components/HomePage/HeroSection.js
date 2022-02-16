import { Link } from "react-router-dom";
import heroImg from "../../assets/images/HomePage/heroSectionImg.png";

function HeroSection() {
	return (
		<div
			className="px-14 flex justify-between items-center
			xs:py-16 md:py-32 md:flex-row xs:flex-col"
		>
			<div
				className="pr-0 order-2
				md:pr-28 md:order-1 md:text-left xs:text-center"
			>
				<h1 className="h1-text lg:text-h1FontSize md:text-h1FontSizeMobile">
					ROCKET FUEL YOUR PROGAMMING SKILLS
				</h1>
				<p className="subtitle-text pt-3">
					Using our proven teaching system, we jump start student’s
					python programming skills with coding basics.
				</p>
				<p className="boldBody-text pb-8">
					Used by 1k+ students globally
				</p>
				<Link to="/apply">
					<button className="primary-button">APPLY HERE</button>
				</Link>
			</div>
			<div
				className="
				md:order-2 xs:order-1 xs:mb-10 md:mb-0"
			>
				<img src={heroImg} className="w-[64rem]" alt="" />
			</div>
		</div>
	);
}

export default HeroSection;
