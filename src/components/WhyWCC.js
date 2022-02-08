import img1 from "../assets/images/whywccImg1.png";
import img2 from "../assets/images/whywccImg2.png";
import img3 from "../assets/images/whywccImg3.png";

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
				<div className="flex justify-center items-center py-32">
					<div className="pr-48">
						<p className="h3-text text-peach-tone-color ">
							LEARN AT YOUR OWN PACE
						</p>
						<p className="body-text">
							Learn on your terms, but never alone. <br /> Enjoy
							access to your course with access <br /> to the
							Discord Server
						</p>
					</div>
					<div>
						<img src={img1} alt="" />
					</div>
				</div>
				{/* Point 2 */}
				<div className="flex justify-center items-center py-32">
					<div className="pr-48">
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
				<div className="flex justify-center items-center pt-32">
					<div className="pr-48">
						<p className="h3-text text-peach-tone-color ">
							GET EXPERT SUPPORT
						</p>
						<p className="body-text">
							Our team of experts is always a <br /> message away
							for answers and <br /> feedback.
						</p>
					</div>
					<div>
						<img src={img3} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyWCC;
