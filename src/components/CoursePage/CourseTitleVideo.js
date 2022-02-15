import ReactPlayer from "react-player";

const CourseTitleVideo = ({ title, videoURL }) => {
	return (
		<div className="px-14 bg-gradient-to-t from-onyx-indigo-color">
			<h1 className="h1-text py-32 text-center">{title}</h1>
			<div className="flex justify-center pb-32">
				<ReactPlayer controls url={videoURL} />
			</div>
		</div>
	);
};

export default CourseTitleVideo;
