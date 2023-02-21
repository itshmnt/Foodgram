import { useState } from "react";
import Logo from "../../public/assets/logo.png"

const loggedIndUser = () => {
    // API call to check authentication
    return true;
};

// const logoURL = "https://b.zmtcdn.com/data/pictures/9/19367459/9d230d921ccd63a0ba3ce36a743b05bf.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
const Title = () => (
    <a href="/">
        <img 
            src={Logo}
            alt="Foodgram Logo"
            className="logo"
        />
    </a>
)

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </div>
    );
}

export default Header;