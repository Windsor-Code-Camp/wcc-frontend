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

	const getValuePadding = (index) => {
		if (index == 0) {
			return "xs:pb-8";
		} else if (index == ourValues.length - 1) {
			return "xs:pt-8";
		}
		return "xs:py-8";
	};

	return (
		<div className="xs:px-8 md:px-14 py-32 bg-onyx-indigo-color text-white text-center">
			<h1 className="h1-text xs:pb-16 lg:pb-32">OUR VALUES</h1>
			<div className="flex xs:flex-col lg:flex-row">
				{ourValues.map((info, index) => (
					<div
						className={
							"flex flex-col items-center px-8 lg:py-0 " +
							getValuePadding(index)
						}
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
