import img1 from "../../assets/images/HomePage/whywccImg1.png";
import img2 from "../../assets/images/HomePage/whywccImg2.png";
import img3 from "../../assets/images/HomePage/whywccImg3.png";

function WhyWCC() {
	return (
		<div className="bg-onyx-indigo-color text-white px-14 py-32">
			<h1 className="h1-text text-center">WHY WINDSOR CODE CAMP?</h1>
			<p className="body-text text-center">
				We teach from experience. Our educators are top-tier programmers
				who <br /> will show you the skills you need.
			</p>
			<div>
				{/* Point 1 */}
				<div className="flex xs:flex-col md:flex-row justify-center items-center xs:py-16 md:py-32">
					<div className="xs:pr-0 md:pr-48 xs:order-2 md:order-1 xs:text-center md:text-left">
						<p className="h3-text text-peach-tone-color ">
							LEARN AT YOUR OWN PACE
						</p>
						<p className="body-text">
							Learn on your terms, but never alone. <br /> Enjoy
							access to your course with access <br /> to the
							Discord Server
						</p>
					</div>
					<div className="xs:order-1 md:order-2">
						<img src={img1} alt="" />
					</div>
				</div>
				{/* Point 2 */}
				<div className="flex xs:flex-col md:flex-row justify-center items-center xs:py-16 md:py-32 xs:text-center md:text-left">
					<div className="xs:pr-0 md:pr-48">
						<img src={img2} alt="" />
					</div>
					<div>
						<p className="h3-text text-peach-tone-color ">
							BUILD YOUR NETWORK
						</p>
						<p className="body-text">
							Join a growing community, get peer <br /> insights,
							and discover exciting project <br /> opportunities
							and collaborations.
						</p>
					</div>
				</div>
				{/* Point 3 */}
				<div className="flex xs:flex-col md:flex-row justify-center items-center xs:pt-16 md:pt-32 xs:text-center md:text-left">
					<div className="xs:pr-0 md:pr-48 xs:order-2 md:order-1">
						<p className="h3-text text-peach-tone-color ">
							GET EXPERT SUPPORT
						</p>
						<p className="body-text">
							Our team of experts is always a <br /> message away
							for answers and <br /> feedback.
						</p>
					</div>
					<div className="xs:order-1 md:order-2">
						<img src={img3} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyWCC;
