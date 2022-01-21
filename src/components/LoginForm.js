const LoginForm = () => {
    const labelClasses =
        "transition-all duration-700 ease-in px-2 my-1 mx-3 outline-none focus:border-secondary-color-400 border-gray-300 focus:border-b-3 border-b-2 w-30";

    return (
        <div className="px-5 pb-5 flex items-center justify-center space-x-4">
            <form className="flex flex-col items-end" method="POST">
                <label>
                    Email: &nbsp;&nbsp;&nbsp; {/* DONT WORRY BOUT IT */}
                    <input className={labelClasses} type="text" name="email" />
                </label>
                <label>
                    Password:
                    <input
                        className={labelClasses}
                        type="password"
                        name="password"
                    />
                </label>
                <input
                    className="mx-auto my-4 w-40 transition-all px-3 py-2 rounded-sm hover:bg-secondary-color-100 bg-secondary-color-400 text-white"
                    type="submit"
                    value="Login"
                />
            </form>
        </div>
    );
};

export default LoginForm;
