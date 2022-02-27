import ReactPlayer from "react-player";
import PageSection from "../PageSection";

const FromOurCEO = () => {
	return (
		<PageSection className="xs:py-0 md:py-0 px-14 text-center">
			<h1 className="h1-text">FROM OUR CEO</h1>
			<div className="flex justify-center xs:py-20 md:pt-16">
				<ReactPlayer
					controls
					url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				/>
			</div>
		</PageSection>
	);
};

export default FromOurCEO;
