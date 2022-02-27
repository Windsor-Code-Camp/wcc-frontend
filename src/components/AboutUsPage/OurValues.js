import PageSection from "../PageSection";

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
		<PageSection className="bg-onyx-indigo-color text-white text-center">
			<h1 className="h1-text pb-16">OUR VALUES</h1>
			<div className="flex flex-wrap justify-around">
				{ourValues.map((info, index) => (
					<div
						className={
							"flex flex-col items-center lg:px-6 py-8"
						}
						key={index}
					>
						<h3 className="h3-text pb-4 text-peach-tone-color">
							{info.title}
						</h3>
						<p className="body-text w-56">{info.text}</p>
					</div>
				))}
			</div>
		</PageSection>
	);
};

export default OurValues;
