import logo from "../assets/wcc_icon.png";

function Navbar() {
    return (
        <div className="flex justify-between px-20 py-3 items-center">
            <img src={logo} alt="navbar_logo" className="h-16" />
            <div className="flex items-center">
                <p>About</p>
                <p className="ml-10">Courses</p>
                <p className="ml-10">Application Process</p>
                <button className="ml-10 bg-gradient-to-r from-primary-color to-secondary-color text-white py-2.5 px-5 rounded ">
                    Apply
                </button>
            </div>
            {/* 
            Double Navbar
            Section 1: Art w/ headline
            Section 2: why us
            Section 3: testimonails
            Section 4: about the CEO/Owner/Founder
            Section 5: sign up and shit
            Section 6:
            Section 7: join discrod pug
            Footer: Plug everyhting
            */}
        </div>
    );
}

export default Navbar;
