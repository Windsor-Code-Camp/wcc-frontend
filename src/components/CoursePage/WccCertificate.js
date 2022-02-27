import PageSection from "../PageSection";

const WccCertificate = ({ certificateURL }) => {
	return (
		<PageSection className="md:py-0 xs:py-0 md:pb-32 xs:pb-16">
			<h1 className="h1-text text-center">THE WCC CERTIFICATE</h1>
			<div className="pt-32 flex justify-center">
				<img src={certificateURL} className="shadow-lg" alt="" />
			</div>
		</PageSection>
	);
};

export default WccCertificate;
