import heroSectionImg from "../assets/hero-section-test.jpg";

function HeroSection() {
    return (
        <div>
            <div className="flex flex-col items-center text-primary-color p-20">
                <h1 className="text-7xl font-bold text-center">
                    LEARN PROGRAMMING IN <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-color to-secondary-color">
                        PYTHON
                    </span>
                    &nbsp;WITH WCC
                </h1>
                <h1 className="py-5 text-center">
                    We provide the best python education in Windsor by Zain
                    himself ofc with all of his knowledge <br></br> accumulated
                    over the years in ze big brain
                </h1>
                <button className="bg-primary-color py-2.5 px-5 text-white font-bold rounded">
                    Apply
                </button>
            </div>
            <div className="flex justify-center">
                <img
                    src={heroSectionImg}
                    alt=""
                    className="h-3/6 w-3/6 rounded"
                />
            </div>
        </div>
    );
}

export default HeroSection;
