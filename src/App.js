import React, {useState} from "react";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";

function App() {

    const [showCart, setShowCart] = useState(false);
    const showCartHandler = () => {setShowCart(true);}
    const hideCartHandler = () => {setShowCart(false);}

    return (
        <React.Fragment>
            {showCart && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler}/>
            <main className="container">
                <Meals />
            </main>
        </React.Fragment>
    );
}

export default App;
