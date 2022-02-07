import tempImg from "../assets/images/tempImg.jpg";

function OurCoursesSection() {
	return (
		<div className="px-14 py-32">
			<h1 className="h1-text text-center">OUR COURSES</h1>
			<p className="body-text text-center">
				We have created great courses for everyone that wants to <br />
				learn programming in Python.
			</p>

			<div className="flex justify-center items-center pt-16">
				<div className="pr-32 h-2/6 w-1/3">
					<img src={tempImg} className="rounded-lg" alt="" />
				</div>
				<div>
					{/* Course 1 */}
					<div className="flex items-center">
						<div className="text-ourCourseNumberFontSize font-bold pr-10">
							<p className="text-iris-color">1</p>
						</div>
						<div>
							<p className="h3-text ">PYTHON: BEGINNERS</p>
							<p className="body-text">
								This course will teach you everything about
								<br />
								Syntax, Loops, Lists and functions and give
								<br />
								questions to solidify the concepts
							</p>
						</div>
					</div>
					{/* Course 2 */}
					<div className="flex items-center">
						<div className="text-ourCourseNumberFontSize font-bold pr-10">
							<p className="text-iris-color">2</p>
						</div>
						<div>
							<p className="h3-text ">PYTHON: INTERMEDIATE</p>
							<p className="body-text">
								This course will teach you everything about
								<br />
								Functions, 2D Lists, File I/O and Classes and
								<br />
								give questions to solidify the concepts
							</p>
						</div>
					</div>
					{/* Course 3 */}
					<div className="flex items-center">
						<div className="text-ourCourseNumberFontSize font-bold pr-10">
							<p className="text-iris-color">3</p>
						</div>
						<div>
							<p className="h3-text ">PYTHON: ADVANCED</p>
							<p className="body-text">
								This course will teach you everything about
								<br />
								Algorithms, Linked Lists, Stack, Binary Tree
								etc. <br /> and give questions to solidify the
								concepts
							</p>
						</div>
					</div>
					{/* Action Button */}
					<button className="primary-button">LEARN MORE</button>
				</div>
			</div>
		</div>
	);
}

export default OurCoursesSection;
