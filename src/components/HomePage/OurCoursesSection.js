import { Link } from "react-router-dom";
import tempImg from "../../assets/images/HomePage/tempImg.jpg";
import PageSection from "../PageSection";
import Card from "../Card";

function OurCoursesSection() {
	const courses = [
		{
			to: "/courses/python/beginner",
			title: "PYTHON: BEGINNERS",
			body: "This course is perfect for people who are new to programming or just want to try it out. It teaches the essential skills of Python",
		},
		{
			to: "/courses/python/intermediate",
			title: "PYTHON: INTERMEDIATE",
			body: "This course is for students who have a basic grasp with programming in Python. You will build on your existing knowledge in this course",
		},
		{
			to: "/courses/python/advanced",
			title: "PYTHON: ADVANCED",
			body: "This course is for students have experience with programming in Python. Students will learn the key concepts of data structures and algorithms.",
		},
	];

	return (
		<PageSection>
			<h1 className="h1-text text-center">OUR COURSES</h1>
			<p className="body-text text-center m-auto">
				Learn from our time tested, high quality course material
			</p>

			<div className="flex justify-center items-center md:pt-16 xs:pt-8">
				<div className="xs:hidden lg:inline pr-32 h-2/6 w-1/3">
					<img src={tempImg} className="rounded-lg" alt="" />
				</div>
				<div>
					{courses.map((course, index) => {
						return (
							<div key={index}>
								<Link to={course.to}>
									<Card className="flex items-center my-2">
										<div className="text-ourCourseNumberFontSize font-bold pr-10">
											<p className="outline-text text-white">
												{index + 1}
											</p>
										</div>
										<div>
											<p className="h3-text">
												{course.title}
											</p>
											<p className="body-text max-w-sm">
												{course.body}
											</p>
										</div>
									</Card>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</PageSection>
	);
}

export default OurCoursesSection;
