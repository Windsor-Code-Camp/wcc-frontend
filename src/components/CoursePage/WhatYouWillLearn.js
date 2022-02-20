import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WhatYouWillLearn = ({ whatYouWillLearn, enrollBtnURL }) => {
	return (
		<div className="xs:px-4 md:px-14 py-32 bg-onyx-indigo-color">
			<div>
				<h1 className="h1-text text-white text-center pb-16">
					WHAT YOU'LL LEARN
				</h1>
			</div>
			<div className="text-white max-w-2xl mx-auto">
				{whatYouWillLearn.map((info, index) => (
					<div key={index}>
						<Accordion className="my-2">
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls={`panel${index+1}a-content`}
								id={`panel${index+1}a-header`}
							>
									<div>
										<Typography className="body-text pb-2">
											{info.chapterNumber}
										</Typography>
										<h1 className="h3-text">
											{info.chapterName}
										</h1>
									</div>
							</AccordionSummary>
							<AccordionDetails>
								{info.chapterMaterial.map((subject, index) => (
									<Typography key={index} className="">
										<FontAwesomeIcon icon={faAnglesRight} className="text-xs" /> {subject}
										<div className="py-4">
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
				<Link to={enrollBtnURL}>
					<button className="primary-button">ENROLL NOW</button>
				</Link>
			</div>
		</div>
	);
};

export default WhatYouWillLearn;
