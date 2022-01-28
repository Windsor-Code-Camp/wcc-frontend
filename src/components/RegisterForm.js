import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const { REACT_APP_WCC_API_KEY, REACT_APP_WCC_API_URL } = process.env;

const RegisterForm = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const sendPostResponse = (e) => {
        e.preventDefault();
        const options = {
            headers: {
                "X-Api-Key": `${REACT_APP_WCC_API_KEY}`,
                "Content-type": "application/json; charset=UTF-8",
            },
            method: "POST",
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
            }),
        };
        // console.log(firstName, lastName, email, "*".repeat(password.length));
        fetch(`${REACT_APP_WCC_API_URL}/api/users/create/`, options).then(
            (resp) => {
                if (resp.status == 201) {
                    navigate("/login");
                }
                let msg = resp.statusText;
                if (resp.status == 409) {
                    msg += ". User already exists. Please enter a new email";
                }
                setErrors([...errors, { status: resp.status, msg }]);
            }
        );
    };

    useEffect(() => console.log(errors), [errors]);

    const labelClasses = "px-2 my-1 mx-3";

    return (
        <div>
            <h1>Register here!</h1>
            <div className="errors-container d-flex flex-column">
                {errors.map((e, i) => (
                    <h3
                        style={{
                            color: (e.status == 201 && "green") || "red",
                            margin: "0 auto",
                        }}
                        key={i}
                    >
                        {e.status}: {e.msg}
                    </h3>
                ))}
            </div>

            <form className="d-flex flex-column" onSubmit={sendPostResponse}>
                <div>
                    <label className="my-2 text-center w-25">First Name:</label>
                    <input
                        type="text"
                        name="first_name"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label className="my-2 text-center w-25">Last Name:</label>
                    <input
                        type="text"
                        name="last_name"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label className="my-2 text-center w-25">Email:</label>
                    <input
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label className="my-2 text-center w-25">Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
