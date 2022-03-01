import chalkBoard from "../../assets/icons/PythonCourse/chalkBoard.svg";
import comment from "../../assets/icons/PythonCourse/comment.svg";
import lightbulb from "../../assets/icons/PythonCourse/lightbulb.svg";
import PageSection from "../PageSection";

const WhoIsThisFor = ({ whoIsThisForText }) => {
	const extraInfo = [
		{
			icon: chalkBoard,
			title: "IN-DEPTH FEEDBACK FROM PROFESSIONALS",
			text: "Sharpen your skills with in-depth feedback from WCC professionals, videos and peer reviews.",
		},
		{
			icon: comment,
			title: "OUR PROVEN TEACHING PROCESS",
			text: "We teach step by step that guarantess results covering every aspect in the coruse",
		},
		{
			icon: lightbulb,
			title: "REAL WORLD EXAMPLES & ADVICE",
			text: "We will give you examples and videos based on companies our professinals have worked at.",
		},
	];

	return (
		<PageSection>
			<div className="flex flex-col items-center">
				<h1 className="h1-text pb-2 text-center">WHO IS THIS FOR</h1>
				<p className="body-text text-center max-w-3xl">
					{whoIsThisForText}
				</p>
				<div className="xs:pt-20 md:pt-32 flex xs:flex-col md:flex-row">
					{extraInfo.map((info, index) => (
						<div
							key={index}
							className="xs:px-4 lg:px-20 xs:mb-10 md:mb-0 max-w-md xs:text-center md:text-left"
						>
							<img
								src={info.icon}
								className="h-14 w-14 mb-6 md:mx-0 xs:mx-auto"
								alt=""
							/>
							<h3 className="h3-text">{info.title}</h3>
							<p className="body-text">{info.text}</p>
						</div>
					))}
				</div>
			</div>
		</PageSection>
	);
};

export default WhoIsThisFor;
