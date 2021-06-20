import React, {useState} from "react";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

    const [showCart, setShowCart] = useState(false);
    const showCartHandler = () => {setShowCart(true);}
    const hideCartHandler = () => {setShowCart(false);}

    return (
        <CartProvider>
            {showCart && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler}/>
            <main className="container">
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
