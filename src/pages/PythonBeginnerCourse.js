import CoursePage from "../components/CoursePage";
import pyBeginner from "../assets/images/CoursePage/pyBeginner.jpg";

const PythonBeginnerCourse = () => {
	// TODO: add the correct links to the correct forms for the buttons and send then as a prop
	return (
		<CoursePage
			title="PYTHON BEGINNERS COURSE"
			videoURL="https://www.youtube.com/watch?v=tQ4m4zD7BBA"
			whatYouWillLearn={[
				{
					chapterNumber: "Chapter 1",
					chapterName: "SYNTAX",
					chapterMaterial: [
						"Execute Python Syntax",
						"Python Indentation",
						"Python Variables",
						"Comments",
					],
				},
				{
					chapterNumber: "Chapter 2",
					chapterName: "LOOPS",
					chapterMaterial: ["For Loops", "While Loop"],
				},
				{
					chapterNumber: "Chapter 3",
					chapterName: "LISTS",
					chapterMaterial: ["List Items"],
				},
				{
					chapterNumber: "Chapter 4",
					chapterName: "FUNCTIONS",
					chapterMaterial: [
						"Creating a function",
						"Calling a funtion",
						"Arguments",
					],
				},
			]}
			whoIsThisForText="This is for students that are total beginners to programming and want to dip their toes in the programming world. We will teach you the basic of python to get you started creating small programs"
			certificateURL={pyBeginner}
			enrollBtnURL=""
		/>
	);
};

export default PythonBeginnerCourse;
