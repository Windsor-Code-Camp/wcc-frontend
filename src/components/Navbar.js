import { useState } from "react";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import wccLogo from "../assets/logo/wcc_icon.png";

const Brand = ({ img }) => {
	return (
		<Link to="/">
			<img src={img} className="h-16 w-16" alt="" />
		</Link>
	);
};

function Navbar() {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const [navbarItems, setNavbarItems] = useState([
		{ display: "About Us", to: "/aboutus" },
		{ display: "Courses", to: "/courses" },
		{ display: "Application Process", to: "/applicationprocess" },
	]);

	return (
		<>
			<nav className="flex relative w-100 z-10 justify-end items-center px-14 py-4 body-text bg-white shadow-md">
				<div className="absolute left-8">
					<Brand img={wccLogo} />
				</div>
				<div
					className={`
					flex flex-row
					p-0 m-0
					transition-all
					duration-300`}
				>
					{/* The desktop nav items */}
					<div
						className={
							"md:flex md:flex-row md:justify-center md:w-auto md:relative xs:hidden xs:flex-none"
						}
					>
						{navbarItems.map((item, i) => {
							return (
								<span key={i} className="p-2 mx-2">
									{item.display}
								</span>
							);
						})}
					</div>
					<span className="p-2 md:mx-2 xs:mx-4 md:text-center xs:text-right">
						Apply
					</span>
				</div>
				<FontAwesomeIcon
					className="text-xl xs:inline md:hidden"
					onClick={() => {
						setHamburgerOpen(!hamburgerOpen);
					}}
					icon={faBars}
				/>
			</nav>

			{/* The mobile nav items */}
			<div
				className={
					`md:hidden md:flex-none md:transition-none xs:transition-all
					xs:duration-300 xs:w-full xs:absolute xs:flex xs:flex-col
					xs:items-center xs:left-0 xs:bg-onyx-indigo-color
					xs:h-[calc(100vh-88px)] ` +
					(hamburgerOpen
						? "xs:translate-y-0"
						: "xs:translate-y-[-100%]")
				}
			>
				{navbarItems.map((item, i) => {
					return (
						<Link
							to={item.to}
							key={i}
							onClick={() => setHamburgerOpen(false)}
							className={`w-100 text-center transition-all duration-100 pt-12 mx-2
							hover:font-bold text-gray-300 hover:text-white
							hover:cursor-pointer no-underline`}
						>
							{item.display}
						</Link>
					);
				})}
			</div>
		</>
	);
}

export default Navbar;
