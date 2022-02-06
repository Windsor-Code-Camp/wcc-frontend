import wccLogo from "../assets/logo/wcc_icon.png";

function Navbar() {
	return (
		<div className="flex justify-between items-center px-14 py-3 body-text bg-white drop-shadow">
			<div>
				<img src={wccLogo} className="h-16 w-16" alt="" />
			</div>
			<div>
				<button>About Us</button>
				<button className="mx-6">Courses</button>
				<button className="mr-6">Application Process</button>
				<button>Apply</button>
			</div>
		</div>
	);
}

export default Navbar;
