import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faYoutube,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<div className="px-14 py-32 flex lg:flex-row xs:flex-col lg:text-left xs:text-center justify-center">
			<div className="flex flex-col xs:pr-0 lg:pr-32 xs:mb-8 lg:mb-0">
				<p className="boldBody-text mb-6">WCC</p>
				<p className="body-text mb-4">Home</p>
				<p className="body-text mb-4">About Us</p>
				<p className="body-text mb-4">Courses</p>
				<p className="body-text">Application Process</p>
			</div>
			<div className="flex flex-col xs:pr-0 lg:pr-32 xs:mb-8 lg:mb-0">
				<p className="boldBody-text mb-6">STUDENT</p>
				<p className="body-text mb-4">Login</p>
				<p className="body-text mb-4">Apply</p>
				<p className="body-text mb-4">Beginners Guide</p>
				<p className="body-text">FAQ</p>
			</div>
			<div className="flex flex-col xs:pr-0 lg:pr-32 xs:mb-8 lg:mb-0">
				<p className="boldBody-text mb-6">COMMUNITY</p>
				<p className="body-text mb-4">Discord</p>
				<p className="body-text mb-4">Events</p>
				<p className="body-text">Shop</p>
			</div>
			{/* TODO: add links to the social media channel */}
			<div className="flex flex-col items-center text-2xl">
				<p className="boldBody-text mb-6">JOIN US</p>
				<div className="flex flex-col">
					<div className="pb-3 cursor-pointer">
						<FontAwesomeIcon icon={faTwitter} />
					</div>
					<div className="pb-3 cursor-pointer">
						<FontAwesomeIcon icon={faInstagram} />
					</div>
					<div className="cursor-pointer">
						<FontAwesomeIcon icon={faYoutube} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
