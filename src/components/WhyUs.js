import icona from "../assets/icons/schedule.png";

const WhyUs = () => {
    return (
        <div className="grid grid-cols-2 p-20">
            <div>
                <h1 className="text-left text-6xl font-bold text-primary-color-400">
                    Why Choose <br />
                    <span className="text-secondary-color-400">
                        Windsor Code Camp?
                    </span>
                </h1>
                <p className="py-5">
                    Look into yourself, get something in return as your
                    acheivement.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-32">
                <div>
                    <img src={icona} className="text-left h-16" alt="" />
                    <h2 className="text-primary-color-400 font-semibold text-lg pt-2.5">
                        Course Accessibility
                    </h2>
                    <p className="leading-relaxed py-2.5">
                        Select a suitable course from the vast area of other
                        courses.
                    </p>
                </div>
                <div className="">
                    <img src={icona} className="text-left h-16" alt="" />
                    <h2 className="text-primary-color-400 font-semibold text-lg">
                        Schedule Learning
                    </h2>
                    <p className="leading-relaxed py-2.5">
                        Learn at whatever and whenever ar your suitable time and
                        place
                    </p>
                </div>
                <div>
                    <img src={icona} className="text-left h-16" alt="" />
                    <h2 className="text-primary-color-400 font-semibold text-lg">
                        Expert Instructions
                    </h2>
                    <p className="leading-relaxed py-2.5">
                        Hold the opportunity to learn from the industry's
                        expert.
                    </p>
                </div>
                <div>
                    <img src={icona} className="text-left h-16" alt="" />
                    <h2 className="text-primary-color-400 font-semibold text-lg">
                        Scholarship
                    </h2>
                    <p className="leading-relaxed py-2.5">
                        To encourage talent, we give up to 100% aid to those
                        young learners.
                    </p>
                </div>
                <div>
                    <img src={icona} className="text-left h-16" alt="" />
                    <h2 className="text-primary-color-400 font-semibold text-lg">
                        Recorded Sessions
                    </h2>
                    <p className="leading-relaxed py-2.5">
                        Don't worry about it, access to every session on the
                        chosen course.
                    </p>
                </div>
                <div>
                    <img src={icona} className="text-left h-16" alt="" />
                    <h2 className="text-primary-color-400 font-semibold text-lg">
                        Practical Learning
                    </h2>
                    <p className="leading-relaxed py-2.5">
                        Interact yourself with the real-world while doing the
                        real-world project
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
