import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function WhatYouWillLearn() {
	const courseMaterial = [
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
	];

	return (
		<div className="px-14 py-32 bg-onyx-indigo-color">
			<div>
				<h1 className="h1-text text-white text-center pb-16">
					WHAT YOU'LL LEARN
				</h1>
			</div>
			<div className="text-white max-w-2xl mx-auto">
				{/* TODO: make an array and map through it */}
				{courseMaterial.map((info, index) => (
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>
								<div>
									<p className="body-text pb-2">
										{info.chapterNumber}
									</p>
									<h1 className="h3-text">
										{info.chapterName}
									</h1>
								</div>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{info.chapterMaterial.map((subject, index) => (
								<Typography className="">
									{subject}
									<div className="py-3">
										<hr />
									</div>
								</Typography>
							))}
						</AccordionDetails>
					</Accordion>
				))}
			</div>
			<div className="pt-16 text-center">
				<button className="primary-button">ENROLL NOW</button>
			</div>
		</div>
	);
}

export default WhatYouWillLearn;
