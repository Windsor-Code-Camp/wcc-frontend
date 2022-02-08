import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faYoutube,
	faTwitter,
	faInstagramSquare,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<div className="px-14 py-32 flex justify-center">
			<div className="flex flex-col pr-32">
				<p className="boldBody-text pb-4">WCC</p>
				<p className="body-text">Home</p>
				<p className="body-text">About Us</p>
				<p className="body-text">Courses</p>
				<p className="body-text">Application Process</p>
			</div>
			<div className="flex flex-col pr-32">
				<p className="boldBody-text pb-4">STUDENT</p>
				<p className="body-text">Login</p>
				<p className="body-text">Apply</p>
				<p className="body-text">Beginners Guide</p>
				<p className="body-text">FAQ</p>
			</div>
			<div className="flex flex-col pr-32">
				<p className="boldBody-text pb-4">COMMUNITY</p>
				<p className="body-text">Discord</p>
				<p className="body-text">Events</p>
				<p className="body-text">Shop</p>
			</div>
			<div className="flex flex-col pr-32 text-2xl">
				<p className="boldBody-text pb-3">JOIN US</p>
				<div className="pb-3">
					<FontAwesomeIcon icon={faTwitter} />
				</div>
				<div className="pb-3">
					<FontAwesomeIcon icon={faInstagram} />
				</div>
				<div>
					<FontAwesomeIcon icon={faYoutube} />
				</div>
			</div>
		</div>
	);
}

export default Footer;
