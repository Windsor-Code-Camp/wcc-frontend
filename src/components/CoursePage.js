import CourseTitleVideo from "./CoursePage/CourseTitleVideo";
import InvestInYourFuture from "./CoursePage/InvestInYourFuture";
import WccCertificate from "./CoursePage/WccCertificate";
import WhatYouWillLearn from "./CoursePage/WhatYouWillLearn";
import WhoIsThisFor from "./CoursePage/WhoIsThisFor";

const CoursePage = ({
	title,
	videoURL,
	whatYouWillLearn,
	whatYouWillLearnBtnURL,
	whoIsThisForText,
	certificateURL,
	investInYourselfBtnURL,
}) => {
	return (
		<div>
			<CourseTitleVideo title={title} videoURL={videoURL} />
			<WhatYouWillLearn
				whatYouWillLearn={whatYouWillLearn}
				whatYouWillLearnBtnURL={whatYouWillLearnBtnURL}
			/>
			<WhoIsThisFor whoIsThisForText={whoIsThisForText} />
			<WccCertificate certificateURL={certificateURL} />
			<InvestInYourFuture
				investInYourselfBtnURL={investInYourselfBtnURL}
			/>
		</div>
	);
};

export default CoursePage;
