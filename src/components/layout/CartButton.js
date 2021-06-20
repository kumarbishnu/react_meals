import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {

    const cartContext = useContext(CartContext);
    const {items} = cartContext;

    const itemsCount = items.reduce((count, item) => {return count + item.amount}, 0);

    const [useBump, setUseBump] = useState(false);

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setUseBump(true);
        const timer = setTimeout(() => {
            setUseBump(false)
        }, 300);

        return () => {clearTimeout(timer)};
    }, [items]);

    return (
        <button type="button" className={`btn btn-danger ${useBump && 'bump'}`} onClick={props.onclick}>
            <i className="fa fa-shopping-cart" />
            <span className="mx-3">Cart</span>
            <span className="badge bg-dark">{itemsCount}</span>
        </button>
    )

}

export default CartButton;
