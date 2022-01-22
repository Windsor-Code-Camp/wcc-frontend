import { Link } from "react-router-dom";

const LoginForm = () => {
    const labelClasses =
        "transition-all duration-700 ease-in px-2 my-1 mx-3 outline-none focus:border-secondary-color-400 border-gray-300 focus:border-b-3 border-b-2 w-30";

    return (
        <div>
            <h1>Login Here!</h1>
            <div>
                Don't have an account? <Link to="/register">Sign up here!</Link>
            </div>
        </div>
    );
};

export default LoginForm;
