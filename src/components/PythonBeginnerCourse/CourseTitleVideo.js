import ReactPlayer from "react-player";

function CourseTitleVideo() {
	return (
		<div className="px-14 bg-gradient-to-t from-onyx-indigo-color">
			<h1 className="h1-text py-32 text-center">
				PYTHON BEGINNERS COURSE
			</h1>
			<div className="flex justify-center pb-32">
				<ReactPlayer
					controls
					url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				/>
			</div>
		</div>
	);
}

export default CourseTitleVideo;
