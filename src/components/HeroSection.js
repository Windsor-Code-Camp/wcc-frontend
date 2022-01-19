import testImg from "../assets/test.jpg";

function HeroSection() {
    return (
        <div className="relative">
            <img src={testImg} alt="" />
            <div className="absolute inset-0 top-1/3 text-center">
                <h1 className="text-6xl font-bold text-white">
                    Learn Programming in Python with WCC
                </h1>
                <h1 className="py-5 text-white">
                    We provide the best python education in Windsor by Zain
                    himself ofc with all of his knowledge accumulated over the
                    years in ze big brain
                </h1>
                <button className="bg-primary-color py-2.5 px-5 text-white rounded">
                    Apply
                </button>
            </div>
        </div>
    );
}

export default HeroSection;
