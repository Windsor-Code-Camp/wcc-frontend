import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
	faYoutubeSquare,
	faTwitter,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { navbarItems } from "./Navbar";

function Footer() {
	return (
		<div className="px-14 py-32 flex lg:flex-row xs:flex-col lg:text-left xs:text-center justify-center">
			<div className="flex flex-col xs:pr-0 lg:pr-32 xs:mb-8 lg:mb-0">
				<p className="boldBody-text mb-6">WCC</p>
				{navbarItems.map((item, i) => {
					return (
						<Link
							to={item.to}
							key={i}
							className={
								"body-text " +
								(i !== navbarItems.length && "mb-4")
							}
						>
							{item.display}
						</Link>
					);
				})}
			</div>
			<div className="flex flex-col xs:pr-0 lg:pr-32 xs:mb-8 lg:mb-0">
				<p className="boldBody-text mb-6">STUDENT</p>
				<Link to="/login" className="body-text mb-4">
					Login
				</Link>
				<Link to="/apply" className="body-text mb-4">
					Apply
				</Link>
				<Link to="/guide" className="body-text mb-4">
					Beginners Guide
				</Link>
				<Link to="/dafaq" className="body-text">
					FAQ
				</Link>
			</div>
			<div className="flex flex-col xs:pr-0 lg:pr-32 xs:mb-8 lg:mb-0">
				<p className="boldBody-text mb-6">COMMUNITY</p>
				<a
					href="https://discord.gg/F44W5VSfAR"
					target="_blank"
					className="body-text mb-4"
				>
					Discord
				</a>
				<Link to="/events" className="body-text mb-4">
					Events
				</Link>
				<Link to="/shop" className="body-text">
					Shop
				</Link>
			</div>
			{/* TODO: add links to the social media channel */}
			<div className="flex flex-col items-center text-2xl">
				<p className="boldBody-text mb-6">JOIN US</p>
				<div className="flex flex-col">
					<a
						href="https://twitter.com/WindsorCodeCamp"
						target="_blank"
						className="pb-3 cursor-pointer"
					>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a
						href="https://instagram.com/WindsorCodeCamp"
						target="_blank"
						className="pb-3 cursor-pointer"
					>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a
						href="https://www.linkedin.com/company/windsor-code-camp/"
						target="_blank"
						className="pb-3 cursor-pointer"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a
						href="https://youtube.com/WindsorCodeCamp"
						target="_blank"
						className="pb-3 cursor-pointer"
					>
						<FontAwesomeIcon icon={faYoutubeSquare} />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
