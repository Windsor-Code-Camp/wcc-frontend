const PageSection = ({ children, className }) => {
	return (
		<div className={`px-14 xs:py-16 md:py-32 ${className}`}>{children}</div>
	);
};

export default PageSection;
