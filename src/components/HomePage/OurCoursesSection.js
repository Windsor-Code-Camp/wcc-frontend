import { Link } from "react-router-dom";
import tempImg from "../../assets/images/HomePage/tempImg.jpg";
import PageSection from "../PageSection";
import Card from "../Card";

function OurCoursesSection() {
	const courses = [
		{
			title: "PYTHON: BEGINNERS",
			body: "This course will teach you everything about Syntax, Loops, Lists and functions and give questions to solidify the concepts",
		},
		{
			title: "PYTHON: INTERMEDIATE",
			body: "This course will teach you everything about Functions, 2D Lists, File I/O and Classes and give questions to solidify the concepts",
		},
		{
			title: "PYTHON: ADVANCED",
			body: "This course will teach you everything about Algorithms, Linked Lists, Stack, Binary Tree etc. and give questions to solidify the concepts",
		},
	];

	return (
		<PageSection>
			<h1 className="h1-text text-center">OUR COURSES</h1>
			<p className="body-text text-center m-auto max-w-sm">
				We have created great courses for everyone that wants to learn
				programming in Python.
			</p>

			<div className="flex justify-center items-center pt-16">
				<div className="xs:hidden lg:inline pr-32 h-2/6 w-1/3">
					<img src={tempImg} className="rounded-lg" alt="" />
				</div>
				<div>
					{courses.map((course, index) => {
						return (
							<Link to="#">
								<Card
									key={index}
									className="flex items-center my-2"
								>
									<div className="text-ourCourseNumberFontSize font-bold pr-10">
										<p className="outline-text text-white">
											{index + 1}
										</p>
									</div>
									<div>
										<p className="h3-text ">
											{course.title}
										</p>
										<p className="body-text max-w-sm">
											{course.body}
										</p>
									</div>
								</Card>
							</Link>
						);
					})}
				</div>
			</div>
		</PageSection>
	);
}

export default OurCoursesSection;
