import React from "react";
import mealsImage from "../../assets/meals.jpg";
import CartButton from "./CartButton";

const Header = (props) => {
    return <React.Fragment>
        <nav className="navbar navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="/">ReactMeals</a>
                <CartButton onclick={props.onShowCart} />
            </div>
        </nav>
        <div className="banner">
            <img src={mealsImage} alt="A table full of delicious food." />
        </div>
    </React.Fragment>
}

export default Header;
