import zainPic from "../../assets/images/AboutUsPage/zainPic.png";

const MeetTheTeam = () => {
	const teamMembers = [
		{
			image: zainPic,
			name: "Zain Raza",
			role: "Founder",
		},
		{
			image: zainPic,
			name: "Zain Raza",
			role: "Founder",
		},
		{
			image: zainPic,
			name: "Zain Raza",
			role: "Founder",
		},
		{
			image: zainPic,
			name: "Zain Raza",
			role: "Founder",
		},
		{
			image: zainPic,
			name: "Zain Raza",
			role: "Founder",
		},
		{
			image: zainPic,
			name: "Zain Raza",
			role: "Founder",
		},
	];

	return (
		<div className="px-14 py-32 text-center">
			<h1 className="h1-text pb-16">MEET THE TEAM</h1>
			<div className="flex justify-center">
				{teamMembers.map((info, index) => (
					<div
						className="flex flex-col items-center px-10"
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
					</div>
				))}
			</div>
		</div>
	);
};

export default MeetTheTeam;
