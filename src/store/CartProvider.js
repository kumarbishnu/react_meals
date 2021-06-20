import CartContext from "./cart-context";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const CartReducer = (state, action) => {

    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotal = state.totalAmount + (action.item.price * action.item.amount);
        return {
            items: updatedItems,
            totalAmount: updatedTotal
        };
    }

    if (action.type === 'REMOVE') {
        return {}
    }

    return defaultCartState;
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(CartReducer, defaultCartState);

    const addItemToCart = item => {dispatchCartAction({type: 'ADD', item: item})}
    const removeItemFromCart = id => {dispatchCartAction({type: 'REMOVE', id: id})}

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

};

export default CartProvider;
