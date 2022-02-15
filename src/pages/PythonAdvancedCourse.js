import CoursePage from "../components/CoursePage";
import pyBeginner from "../assets/images/CoursePage/pyBeginner.jpg";

const PythonAdvancedCourse = () => {
	return (
		<CoursePage
			title="PYTHON ADVANCED COURSE"
			videoURL="https://www.youtube.com/watch?v=NbaWrbJDr48"
			whatYouWillLearn={[
				{
					chapterNumber: "Chapter 1",
					chapterName: "ALGORITHMS",
					chapterMaterial: [
						"Execute Python Syntax",
						"Python Indentation",
						"Python Variables",
						"Comments",
					],
				},
				{
					chapterNumber: "Chapter 2",
					chapterName: "LINKED LISTS",
					chapterMaterial: ["For Loops", "While Loop"],
				},
				{
					chapterNumber: "Chapter 3",
					chapterName: "STACK / QUEUE",
					chapterMaterial: ["List Items"],
				},
				{
					chapterNumber: "Chapter 4",
					chapterName: "BINARY TREE",
					chapterMaterial: [
						"Creating a function",
						"Calling a funtion",
						"Arguments",
					],
				},
				{
					chapterNumber: "Chapter 5",
					chapterName: "HASHTABLE",
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

export default PythonAdvancedCourse;
