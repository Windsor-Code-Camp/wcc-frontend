import ReactPlayer from "react-player";

const FromOurCEO = () => {
	return (
		<div className="px-14 text-center">
			<h1 className="h1-text">FROM OUR CEO</h1>
			<div className="flex justify-center py-32">
				<ReactPlayer
					controls
					url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				/>
			</div>
		</div>
	);
};

export default FromOurCEO;
