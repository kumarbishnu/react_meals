import React from "react";
import mealsImage from "../../assets/meals.jpg";
import CartButton from "./CartButton";

const Header = (props => {
    return <React.Fragment>
        <nav className="navbar bg-dark navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="/">ReactMeals</a>
                <CartButton count={4} />
            </div>
        </nav>
        <div className="banner">
            <img src={mealsImage} alt="A table full of delicious food." className="img-fluid" />
        </div>
    </React.Fragment>
}

export default Header;
