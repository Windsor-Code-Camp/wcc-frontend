import zainPic from "../../assets/images/AboutUsPage/zainPic.png";
import jagrajPic from "../../assets/images/AboutUsPage/jagrajPic.png";
import hassanPic from "../../assets/images/AboutUsPage/hassanPic.png";
import jeremiePic from "../../assets/images/AboutUsPage/jeremiePic.png";
import wahidPic from "../../assets/images/AboutUsPage/wahidPic.png";
import cadenPic from "../../assets/images/AboutUsPage/cadenPic.png";

import PageSection from "../PageSection";

const MeetTheTeam = () => {
	const teamMembers = [
		{
			image: zainPic,
			name: "Zain Raza",
			role: "Founder",
		},
		{
			image: jagrajPic,
			name: "Jagraj Aulakh",
			role: "Developer Team",
			link: "https://linktr.ee/juggy1233",
		},
		{
			image: hassanPic,
			name: "Hassan Ahmad",
			role: "Developer Team",
		},
		{
			image: jeremiePic,
			name: "Jeremie Bornais",
			role: "Consultant",
		},
		{
			image: wahidPic,
			name: "Wahid Bawa",
			role: "Cool Guy",
		},
		{
			image: cadenPic,
			name: "Caden Quiring",
			role: "Media Team",
		},
	];

	return (
		<PageSection className="text-center">
			<h1 className="h1-text pb-16">MEET THE TEAM</h1>
			<div className="max-w-screen-xl mx-auto flex flex-wrap justify-around">
				{teamMembers.map((info, index) => (
					<a
						href={
							info.link
								? info.link
								: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
						}
						target="_blank"
						rel="noreferrer"
						className={`flex flex-col items-center w-40 p-4 my-2 mx-2
							rounded-lg shadow-xl transition-color duration-200
							hover:bg-gray-200`}
						key={index}
					>
						<div className="pb-4">
							<img
								src={info.image}
								className="rounded-full h-24 w-24"
								alt=""
							/>
						</div>
						<h3 className="h3-text">{info.name}</h3>
						<p className="small-text">{info.role}</p>
					</a>
				))}
			</div>
		</PageSection>
	);
};

export default MeetTheTeam;
