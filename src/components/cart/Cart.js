import React from "react";
import Modal from "../ui/Modal";
import {useContext, useState} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";


const Cart = props => {

    const [checkout, setCheckout] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const cartContext = useContext(CartContext);

    const hasItems = cartContext.items.length > 0;
    const totalAmount = cartContext.totalAmount.toFixed(2);
    const addCartItem = item => {cartContext.addItem(item);}
    const removeCartItem = id => {cartContext.removeItem(id);}

    const orderHandler = () => {setCheckout(true);}

    const submitOrderHandler = async userData => {
        setSubmitting(true);
        await fetch('https://mero-khata-d9bbc-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({user: userData, order: cartContext.items})
        });
        setSubmitting(false);
        setDidSubmit(true);
        cartContext.clearCart();
    }

    const modalContent = <React.Fragment>
        <ul className="list-group list-group-flush" style={{maxHeight: "60vh", overflowY: "scroll"}}>
            {cartContext.items.map(item =>
                <CartItem
                    key={item.id}
                    item={item}
                    onAdd={addCartItem.bind(null, item)}
                    onRemove={removeCartItem.bind(null, item.id)}
                />
            )}
        </ul>
        <div className="d-flex justify-content-between mt-3">
            <h5>Total Amount</h5>
            <h5>$ {totalAmount}</h5>
        </div>
        {checkout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
        {!checkout &&
        <div className="text-end mt-2">
            <div className="btn btn-secondary" onClick={props.onClose}>Close</div>
            {hasItems && <div className="ms-2 btn btn-danger" onClick={orderHandler}>Order</div>}
        </div>
        }
    </React.Fragment>;

    const submittingContent = <div className="spinner-border mx-auto" />;

    const submittedContent = <React.Fragment>
        <div className="alert alert-success">Order sent successfully!</div>
        <div className="btn btn-secondary float-end" onClick={props.onClose}>Close</div>
    </React.Fragment>;

    return <Modal id="cartModal">
        <div className="modal-body text-dark">
            {submitting && submittingContent}
            {didSubmit && submittedContent}
            {!submitting && !didSubmit && modalContent}
        </div>
    </Modal>

}

export default Cart;
