const OurValues = () => {
	const ourValues = [
		{
			title: "QUALITY",
			text: "Go above and beyond for the students who need it",
		},
		{
			title: "INCLUSIVENESS",
			text: "Anyone with internet and a will to learn is our student",
		},
		{
			title: "BEING OPEN",
			text: "Publishing work openly makes for better work",
		},
		{
			title: "NO ONE LEFT",
			text: "All education is free of charge, no exceptions",
		},
	];

	return (
		<div className="px-14 py-32 bg-onyx-indigo-color text-white text-center">
			<h1 className="h1-text pb-32">OUR VALUES</h1>
			<div className="flex">
				{ourValues.map((info, index) => (
					<div
						className="flex flex-col items-center px-8"
						key={index}
					>
						<h3 className="h3-text pb-4 text-peach-tone-color">
							{info.title}
						</h3>
						<p className="body-text max-w-[70%]">{info.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurValues;
