const Card = ({ children, className, ...rest }) => {
	return (
		<div className={`rounded-lg shadow-lg p-8 ${className}`} {...rest}>
			{children}
		</div>
	);
};

export default Card;
