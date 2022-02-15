const WccCertificate = ({ certificateURL }) => {
	return (
		<div className="px-14">
			<h1 className="h1-text text-center">THE WCC CERTIFICATE</h1>
			<div className="py-32 flex justify-center">
				<img src={certificateURL} className="shadow-lg" alt="" />
			</div>
		</div>
	);
};

export default WccCertificate;
