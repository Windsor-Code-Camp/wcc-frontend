import { Link } from "react-router-dom";

function LoginBar() {
    return (
        <div className="flex justify-end bg-primary-color-400 px-20 py-2.5 text-sm">
            <Link to="/login">
                <p className="text-white">Login</p>
            </Link>
        </div>
    );
}

export default LoginBar;
