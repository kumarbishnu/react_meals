import CartContext from "./cart-context";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const CartReducer = (state, action) => {

    if (action.type === 'ADD') {
        const updatedTotal = state.totalAmount + (action.item.price * action.item.amount);

        const index = state.items.findIndex(item => item.id === action.item.id);
        const existingItem = state.items[index];

        let updatedItems;
        if (existingItem) {
            const updatedItem = {...existingItem, amount: existingItem.amount + action.item.amount};
            updatedItems = [...state.items];
            updatedItems[index] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotal
        };
    }

    if (action.type === 'REMOVE') {
        const index = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[index];
        const updatedTotal = state.totalAmount - existingItem.price;

        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[index] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotal
        };
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
