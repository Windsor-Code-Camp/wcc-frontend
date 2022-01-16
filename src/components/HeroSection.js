import heroSectionImg from "../assets/hero-section-test.jpg";

function HeroSection() {
    return (
        <div className="h-75 relative text-white">
            <img src={heroSectionImg} alt="heroImg" />
            <div className="absolute inset-y-1/3 px-20">
                <h1 className="text-7xl font-semibold">WCC BEST IN THE GAME</h1>
                <h1 className="py-5 text-base font-light">
                    We provide the test python education in Windsor by Zain
                    himself ofc
                </h1>
                <button className="bg-white py-2.5 px-5 text-primary-color font-bold rounded">
                    Apply
                </button>
            </div>
        </div>
    );
}

export default HeroSection;
