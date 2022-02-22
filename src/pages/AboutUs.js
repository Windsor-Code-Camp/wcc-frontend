import FromOurCEO from "../components/AboutUsPage/FromOurCEO";
import MeetTheTeam from "../components/AboutUsPage/MeetTheTeam";
import OurMission from "../components/AboutUsPage/OurMission";
import OurValues from "../components/AboutUsPage/OurValues";
import InvestInYourFuture from "../components/InvestInYourFuture";

const AboutUs = () => {
	return (
		<div>
			<OurMission />
			<FromOurCEO />
			<OurValues />
			<MeetTheTeam />
			<InvestInYourFuture enrollBtnURL="/enroll" />
		</div>
	);
};

export default AboutUs;
