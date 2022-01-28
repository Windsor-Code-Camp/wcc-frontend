import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToken, useSetToken } from "../providers/AuthTokenProvider";

const { REACT_APP_WCC_API_URL } = process.env;

function Logout({ token }) {
    useEffect(() => {
        document.title = "WCC - Logout";

        doTheLogoutThingy();
    }, []);

    const authToken = useToken();
    const setAuthToken = useSetToken();
    const navigate = useNavigate();

    const doTheLogoutThingy = () => {
        const options = {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            method: "POST",
            body: JSON.stringify({
                token: authToken,
            }),
        };

        fetch(`${REACT_APP_WCC_API_URL}/api/logout/`, options)
            .then((resp) => {
                if (resp.status == 400) {
                    throw new Error("You're  not logged in homie");
                }
                if (resp.status == 404) {
                    throw new Error("Token doesn't exist");
                }
                if (resp.status == 200) {
                    setAuthToken("");
                    navigate("/");
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="container">
            <h1>Logging out...</h1>
        </div>
    );
}

export default Logout;
