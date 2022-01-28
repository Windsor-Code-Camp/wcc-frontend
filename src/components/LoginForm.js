import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSetToken } from "../providers/AuthTokenProvider";

const { REACT_APP_WCC_API_URL } = process.env;

const LoginForm = ({ onSuccessfulLogin }) => {
    // HOOKS
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const setToken = useSetToken();

    const sendPostResponse = (e) => {
        e.preventDefault();

        const options = {
            headers: {
                "Content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ email, password }),
        };

        fetch(`${REACT_APP_WCC_API_URL}/api/login/`, options)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                setToken(data);
                navigate("/");
            })
            .catch((err) => {
                console.error(err.message);
            });
    };

    return (
        <div>
            <h1>Login Here!</h1>
            <form className="d-flex flex-column" onSubmit={sendPostResponse}>
                <div>
                    <label className="my-2 text-center w-25">Email: </label>
                    <input
                        type="text"
                        name="first_name"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label className="my-2 text-center w-25">Password: </label>
                    <input
                        type="password"
                        name="first_name"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <Button as="input" type="submit" />
                </div>
            </form>
            <div>
                Don't have an account? <Link to="/register">Sign up here!</Link>
            </div>
        </div>
    );
};

export default LoginForm;
