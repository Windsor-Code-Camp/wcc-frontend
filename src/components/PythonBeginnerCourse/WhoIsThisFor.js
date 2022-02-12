const WhoIsThisFor = () => {
	const extraInfo = [
		{
			title: "IN-DEPTH FEEDBACK FROM PROFESSIONALS",
			text: "Sharpen your skills with in-depth feedback from WCC professionals, videos and peer reviews.",
		},
		{
			title: "OUR PROVEN TEACHING PROCESS",
			text: "We teach step by step that guarantess results covering every aspect in the coruse",
		},
		{
			title: "REAL WORLD EXAMPLES & ADVICE",
			text: "We will give you examples and videos based on companies our professinals have worked at.",
		},
	];

	return (
		<div className="px-14 py-32">
			<div className="flex flex-col items-center">
				<h1 className="h1-text pb-2">WHO IS THIS FOR</h1>
				<p className="body-text text-center max-w-3xl">
					This is for students that are total beginners to programming
					and want to dip their toes in the programming world. We will
					teach you the basic of python to get you started creating
					small programs
				</p>
				{/* TODO: Add the svgs here like in the design file */}
				<div className="pt-32 flex">
					{extraInfo.map((info, index) => (
						<div key={index} className="px-20 max-w-md">
							<h3 className="h3-text">{info.title}</h3>
							<p className="body-text">{info.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhoIsThisFor;
