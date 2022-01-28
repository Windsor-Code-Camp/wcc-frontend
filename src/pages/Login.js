import { useEffect } from "react";
import LoginForm from "../components/LoginForm";

function Login({ onSuccessfulLogin }) {
    useEffect(() => {
        document.title = "WCC - Login";
    }, []);

    return (
        <div className="container">
            <LoginForm onSuccessfulLogin={onSuccessfulLogin} />
        </div>
    );
}

export default Login;
