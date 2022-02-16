import chalkBoard from "../../assets/icons/PythonCourse/chalkBoard.svg";
import comment from "../../assets/icons/PythonCourse/comment.svg";
import lightbulb from "../../assets/icons/PythonCourse/lightbulb.svg";

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
		<div className="px-14 py-32">
			<div className="flex flex-col items-center">
				<h1 className="h1-text pb-2">WHO IS THIS FOR</h1>
				<p className="body-text text-center max-w-3xl">
					{whoIsThisForText}
				</p>
				<div className="pt-32 flex">
					{extraInfo.map((info, index) => (
						<div key={index} className="px-20 max-w-md">
							<img
								src={info.icon}
								className="h-14 w-14 mb-6"
								alt=""
							/>
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
