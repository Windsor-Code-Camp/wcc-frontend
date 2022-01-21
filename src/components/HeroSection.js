import testImg from "../assets/test.jpg";
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <div className="relative">
            <img src={testImg} alt="" />
            <div className="absolute inset-0 top-1/3 text-center">
                <h1 className="text-6xl font-bold text-white">
                    Learn Programming in Python with Windsor Code Camp
                </h1>
                <h1 className="p-5 text-white">
                    Level up your Python knowledge with Windsor Code Camp. We
                    provide a free high quality three-week coding camp where you
                    will apply basic, intermediate, and advanced Python skills
                    through specially designed assignments.
                </h1>
                <Link
                    to="/apply"
                    className="bg-primary-color-400 py-2.5 px-5 text-white rounded"
                >
                    Apply
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;
