import img1 from "../../assets/images/HomePage/whywccImg1.png";
import img2 from "../../assets/images/HomePage/whywccImg2.png";
import img3 from "../../assets/images/HomePage/whywccImg3.png";
import PageSection from "../PageSection";

function WhyWCC() {
	const points = [
		{
			title: "LEARN AT YOUR OWN PACE",
			body: "Learn on your terms, but never alone. Enjoy access to your course with access to the Discord Server",
			img: img1,
		},
		{
			title: "BUILD YOUR NETWORK",
			body: "Join a growing community, get peer insights, and discover exciting project opportunities and collaborations.",
			img: img2,
		},
		{
			title: "GET EXPERT SUPPORT",
			body: "Our team of experts is always a message away for answers and feedback.",
			img: img3,
		},
	];

	const getSectionPadding = (index) => {
		if (index == 0) return "pb-16";
		if (index == points.length - 1) return "pt-16";
		return "py-16";
	};

	return (
		<PageSection className="bg-onyx-indigo-color text-white">
			<div className="pb-32">
				<h1 className="h1-text text-center">WHY WINDSOR CODE CAMP?</h1>
				<p className="body-text text-center m-auto max-w-xl">
					We teach from experience. Our educators are top-tier
					programmers who will show you the skills you need.
				</p>
			</div>
			<div>
				{points.map((point, i) => {
					return (
						<div
							key={i}
							className={`flex xs:flex-col md:flex-row
								justify-center items-center ${getSectionPadding(i)}`}
						>
							<div
								className={
									`xs:text-center md:text-left ` +
									(i % 2 == 0
										? "xs:order-2 md:order-1 xs:pr-0 md:pr-48"
										: "xs:order-2 md:order-2")
								}
							>
								<p className="h3-text text-peach-tone-color pb-2">
									{point.title}
								</p>
								<p className="body-text max-w-sm">
									{point.body}
								</p>
							</div>
							<div
								className={
									"md:mb-0 xs:mb-16 " +
									(i % 2 == 0
										? "xs:order-1 md:order-2"
										: "xs:order-1 md:order-1 xs:pr-0 md:pr-48")
								}
							>
								<img src={point.img} alt="" />
							</div>
						</div>
					);
				})}
			</div>
		</PageSection>
	);
}

export default WhyWCC;
