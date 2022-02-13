import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function WhatYouWillLearn() {
	return (
		<div className="px-14 py-32 bg-onyx-indigo-color">
			<div>
				<h1 className="h1-text text-white text-center pb-32">
					WHAT YOU'LL LEARN
				</h1>
			</div>
			<div className="text-white">
				{/* TODO: make an array and map through it */}
				<Accordion>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>Chapter 1</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								Exercitation in fugiat est ut ad ea cupidatat ut
								in cupidatat occaecat ut occaecat consequat est
								minim minim esse tempor laborum consequat esse
								adipisicing eu reprehenderit enim.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>Chapter 2</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								In ad velit in ex nostrud dolore cupidatat
								consectetur ea in ut nostrud velit in irure
								cillum tempor laboris sed adipisicing eu esse
								duis nulla non.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
				</Accordion>
			</div>
			<div className="pt-16 text-center">
				<button className="primary-button">ENROLL NOW</button>
			</div>
		</div>
	);
}

export default WhatYouWillLearn;
