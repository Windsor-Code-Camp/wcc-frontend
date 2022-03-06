const Card = ({ children, className, ...rest }) => {
	return (
		<div className={`rounded-lg hover:shadow-lg p-8 ${className}`} {...rest}>
			{children}
		</div>
	);
};

export default Card;
