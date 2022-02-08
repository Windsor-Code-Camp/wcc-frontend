import Carousel from "react-elastic-carousel";
import "../../index.css";

function WhatOurStudentsSay() {
	const reviews = [
		{
			name: "Student 1",
			course: "Python Beginner",
			reviewText:
				"I think the notes and assignments were very strong and as a first time python learner, I can now say I understand basic python concepts and look forward to applying these new skills into AI and ML!",
		},
		{
			name: "Student 2",
			course: "Python Beginner",
			reviewText:
				"This program was great! Again, the concepts were explained well and I didn't feel overloaded / overwhelmed with the material, which I think is important, especially for beginners.",
		},
		{
			name: "Hassan Ahmad",
			course: "Python Beginner",
			reviewText:
				"The course was really for as the notes were really clear and everyone on the discord was there to help and I would get answers immediately. I look forward to creating projects with these set of skills.",
		},
		{
			name: "Ahmad",
			course: "Python Beginner",
			reviewText:
				"The course was really for as the notes were really clear and everyone on the discord was there to help and I would get answers immediately. I look forward to creating projects with these set of skills.",
		},
	];

	return (
		<div className="px-14 pb-32">
			<h1 className="h1-text text-center">WHAT OUR STUDENTS SAY</h1>

			<div className="pt-16">
				<Carousel itemsToScroll={3} itemsToShow={3}>
					{reviews.map((eachReview, index) => (
						<div className="p-6 mx-2.5 border rounded-lg">
							<h1 className="h3-text mb-0">{eachReview.name}</h1>
							<p className="small-text text-subtle-color">
								{eachReview.course}
							</p>
							<p className="body-text">{eachReview.reviewText}</p>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
}

export default WhatOurStudentsSay;
