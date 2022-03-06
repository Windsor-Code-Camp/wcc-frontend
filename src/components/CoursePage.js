import CourseTitleVideo from "./CoursePage/CourseTitleVideo";
import WccCertificate from "./CoursePage/WccCertificate";
import WhatYouWillLearn from "./CoursePage/WhatYouWillLearn";
import WhoIsThisFor from "./CoursePage/WhoIsThisFor";

const CoursePage = ({
	title,
	videoURL,
	whatYouWillLearn,
	whoIsThisForText,
	certificateURL,
	enrollBtnURL,
}) => {
	return (
		<div>
			<CourseTitleVideo title={title} videoURL={videoURL} />
			<WhatYouWillLearn
				whatYouWillLearn={whatYouWillLearn}
				enrollBtnURL={enrollBtnURL}
			/>
			<WhoIsThisFor whoIsThisForText={whoIsThisForText} />
			<WccCertificate certificateURL={certificateURL} />
		</div>
	);
};

export default CoursePage;
