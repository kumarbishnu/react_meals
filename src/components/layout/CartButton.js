import {useContext} from "react";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {

    const cartContext = useContext(CartContext);
    const itemsCount = cartContext.items.reduce((count, item) => {return count + item.amount}, 0);

    return (
        <button type="button" className="btn btn-danger" onClick={props.onclick}>
            <i className="fa fa-shopping-cart" />
            <span className="mx-3">Cart</span>
            <span className="badge bg-dark">{itemsCount}</span>
        </button>
    )

}

export default CartButton;
