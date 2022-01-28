import { useEffect } from "react";

function Apply() {
    useEffect(() => {
        document.title = "WCC - Apply";
    }, []);

    return (
        <div className="container">
            <h1>This is apply page</h1>
        </div>
    );
}

export default Apply;
