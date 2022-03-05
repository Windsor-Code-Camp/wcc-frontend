import { useState } from "react";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import wccLogo from "../assets/logo/wcc_icon.png";

const Brand = ({ img }) => {
	return (
		<Link to="/">
			<img src={img} className="h-16 w-16" alt="" />
		</Link>
	);
};

export const navbarItems = [
	{
		display: "About Us",
		to: "/aboutus",
	},
];

const courseItems = [
	{
		display: "Python Beginner",
		to: "/courses/python/beginner",
	},
	{
		display: "Python Intermediate",
		to: "/courses/python/intermediate",
	},
	{
		display: "Python Advanced",
		to: "/courses/python/advanced",
	},
];

function Navbar() {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	return (
		<>
			<nav className="flex relative z-10 justify-end items-center px-14 py-8 body-text bg-white shadow-md">
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
						<div className="p-2 mx-2 dropdown inline-block relative">
							<button>
								Courses
								<FontAwesomeIcon
									className="ml-2"
									icon={faAngleDown}
								/>
							</button>

							<ul className="dropdown-menu absolute hidden pt-2 bg-white shadow-2xl rounded-lg">
								<li>
									{courseItems.map((item, i) => {
										return (
											<Link
												key={i}
												to={item.to}
												className="py-2 px-4 block whitespace-no-wrap hover:bg-gray-200 transition-color duration-200"
											>
												{item.display}
											</Link>
										);
									})}
								</li>
							</ul>
						</div>

						{navbarItems.map((item, i) => {
							return (
								<Link
									key={i}
									to={item.to}
									className="p-2 mx-2 dropdown"
								>
									{item.display}
								</Link>
							);
						})}
					</div>
					<Link
						to="/enroll"
						className="md:py-2 md:pl-2 md:ml-2 md:mx-0 xs:mx-4 md:text-center xs:text-right"
					>
						Join
					</Link>
				</div>
				<FontAwesomeIcon
					className="text-xl xs:inline md:hidden hover:cursor-pointer"
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
