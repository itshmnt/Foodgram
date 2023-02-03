import React from "react";
import ReactDOM from "react-dom/client";

const title = (
    <h1>Hello Foodgram!</h1>
)

const HeaderComponent = () => {
    return (
        <div>
            {title}
            <h3>I am test header</h3>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);