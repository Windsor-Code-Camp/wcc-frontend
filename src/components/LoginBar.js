import { Link } from "react-router-dom";

function LoginBar() {
	return (
		<div className="relative z-10 bg-onyx-indigo-color text-white px-14 py-1.5 text-right small-text">
			<Link to="/login">
				<button>Login</button>
			</Link>
		</div>
	);
}

export default LoginBar;
