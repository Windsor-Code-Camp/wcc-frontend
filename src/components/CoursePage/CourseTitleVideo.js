import ReactPlayer from "react-player";
import PageSection from "../PageSection";

const CourseTitleVideo = ({ title, videoURL }) => {
	return (
		<PageSection className="bg-gradient-to-t from-onyx-indigo-color">
			<h1 className="h1-text md:pb-32 xs:pb-16 text-center">{title}</h1>
			<div className="flex justify-center">
				<ReactPlayer controls url={videoURL} />
			</div>
		</PageSection>
	);
};

export default CourseTitleVideo;
