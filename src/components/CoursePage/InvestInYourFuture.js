import { Link } from "react-router-dom";

const InvestInYourFuture = ({ enrollBtnURL }) => {
	return (
		<div className="text-center text-white bg-onyx-indigo-color px-14 py-32">
			<h1 className="h1-text">INVEST IN YOUR FUTURE</h1>
			<p className="body-text pb-10">
				Invest in your future by taking this course and learnining
				programming
			</p>
			<Link to={enrollBtnURL}>
				<button className="primary-button">ENROLL NOW</button>
			</Link>
		</div>
	);
};

export default InvestInYourFuture;
