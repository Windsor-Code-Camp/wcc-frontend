import { useEffect } from "react";
import LoginForm from "../components/LoginForm";

function Login() {
    useEffect(() => {
        document.title = "WCC - Login";
    });

    return (
        <div className="container">
            <LoginForm />
        </div>
    );
}

export default Login;
