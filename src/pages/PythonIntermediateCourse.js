import CoursePage from "../components/CoursePage";
import pyBeginner from "../assets/images/CoursePage/pyBeginner.jpg";

const PythonIntermediateCourse = () => {
	return (
		<CoursePage
			title="PYTHON INTERMEDIATE COURSE"
			videoURL="https://www.youtube.com/watch?v=RwnN2FVaHmw"
			whatYouWillLearn={[
				{
					chapterNumber: "Chapter 1",
					chapterName: "FUNCTIONS",
					chapterMaterial: [
						"Execute Python Syntax",
						"Python Indentation",
						"Python Variables",
						"Comments",
					],
				},
				{
					chapterNumber: "Chapter 2",
					chapterName: "2D LISTS",
					chapterMaterial: ["For Loops", "While Loop"],
				},
				{
					chapterNumber: "Chapter 3",
					chapterName: "FILE I/O",
					chapterMaterial: ["List Items"],
				},
				{
					chapterNumber: "Chapter 4",
					chapterName: "CLASSESS",
					chapterMaterial: [
						"Creating a function",
						"Calling a funtion",
						"Arguments",
					],
				},
			]}
			whatYouWillLearnBtnURL=""
			whoIsThisForText="This is for students that are total beginners to programming and want to dip their toes in the programming world. We will teach you the basic of python to get you started creating small programs"
			certificateURL={pyBeginner}
			investInYourselfBtnURL=""
		/>
	);
};

export default PythonIntermediateCourse;
