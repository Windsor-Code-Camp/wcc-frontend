import { Link } from "react-router-dom";
import tempImg from "../../assets/images/HomePage/tempImg.jpg";

function OurCoursesSection() {
	return (
		<div className="px-14 py-32">
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
					{/* Course 1 */}
					<div className="flex items-center">
						<div className="text-ourCourseNumberFontSize font-bold pr-10">
							<p className="outline-text text-white">1</p>
						</div>
						<div>
							<p className="h3-text ">PYTHON: BEGINNERS</p>
							<p className="body-text max-w-sm">
								This course will teach you everything about
								Syntax, Loops, Lists and functions and give
								questions to solidify the concepts
							</p>
						</div>
					</div>
					{/* Course 2 */}
					<div className="flex items-center">
						<div className="text-ourCourseNumberFontSize font-bold pr-10">
							<p className="outline-text text-white font-mono">
								2
							</p>
						</div>
						<div>
							<p className="h3-text ">PYTHON: INTERMEDIATE</p>
							<p className="body-text max-w-sm">
								This course will teach you everything about
								Functions, 2D Lists, File I/O and Classes and
								give questions to solidify the concepts
							</p>
						</div>
					</div>
					{/* Course 3 */}
					<div className="flex items-center">
						<div className="text-ourCourseNumberFontSize font-bold pr-10">
							<p className="outline-text text-white">3</p>
						</div>
						<div>
							<p className="h3-text ">PYTHON: ADVANCED</p>
							<p className="body-text max-w-sm">
								This course will teach you everything about
								Algorithms, Linked Lists, Stack, Binary Tree
								etc. and give questions to solidify the concepts
							</p>
						</div>
					</div>
					{/* Action Button */}
					<div className="flex lg:justify-start xs:justify-center">
						<Link to="/courses/python">
							<button className="primary-button lg:mt-0 xs:mt-4">
								LEARN MORE
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OurCoursesSection;
