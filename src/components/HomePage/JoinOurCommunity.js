import PageSection from "../PageSection";

function JoinOurCommunity() {
	return (
		<PageSection className="text-center text-white bg-onyx-indigo-color">
			<h1 className="h1-text">JOIN OUR COMMUNITY</h1>
			<p className="body-text pb-10 m-auto max-w-lg">
				The Windsor Code Camp community is a great place to ask
				questions. It is filled with current students, alumni, mentors,
				instructors, and staff.
			</p>
			<a href="https://discord.gg/F44W5VSfAR" target="_blank">
				<button className="primary-button">JOIN DISCORD SERVER</button>
			</a>
		</PageSection>
	);
}

export default JoinOurCommunity;
