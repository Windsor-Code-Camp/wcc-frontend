import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const WhatYouWillLearn = ({ whatYouWillLearn, whatYouWillLearnBtnURL }) => {
	return (
		<div className="px-14 py-32 bg-onyx-indigo-color">
			<div>
				<h1 className="h1-text text-white text-center pb-16">
					WHAT YOU'LL LEARN
				</h1>
			</div>
			<div className="text-white max-w-2xl mx-auto">
				{whatYouWillLearn.map((info, index) => (
					<div key={index}>
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
					</div>
				))}
			</div>
			<div className="pt-16 text-center">
				<button className="primary-button">ENROLL NOW</button>
			</div>
		</div>
	);
};

export default WhatYouWillLearn;
