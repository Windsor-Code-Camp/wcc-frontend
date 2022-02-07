import heroImg from "../assets/images/heroSectionImg.png";

function HeroSection() {
	return (
		<div className="px-14 py-32 flex justify-between items-center">
			<div className="pr-28">
				<h1 className="h1-text">ROCKET FUEL YOUR PROGAMMING SKILLS</h1>
				<p className="subtitle-text pt-3">
					Using our proven teaching system, we jump start student’s
					python programming skills with coding basics.
				</p>
				<p className="boldBody-text pb-8">
					Used by 1k+ students globally
				</p>
				<button className="primary-button">APPLY HERE</button>
			</div>
			<div>
				<img src={heroImg} className="w-[64rem]" alt="" />
			</div>
		</div>
	);
}

export default HeroSection;
