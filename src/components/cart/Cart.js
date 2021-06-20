import Modal from "../ui/Modal";
import {useContext, useState} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";


const Cart = props => {

    const cartContext = useContext(CartContext);

    const hasItems = cartContext.items.length > 0;
    const totalAmount = cartContext.totalAmount.toFixed(2);
    const addCartItem = item => {cartContext.addItem(item);}
    const removeCartItem = id => {cartContext.removeItem(id);}

    const [checkout, setCheckout] = useState(false);
    const orderHandler = () => {setCheckout(true);}

    const submitOrderHandler = userData => {
        fetch('https://mero-khata-d9bbc-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({user: userData, order: cartContext.items})
        });
    }

    return <Modal id="cartModal">
        <div className="modal-body text-dark">
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
        </div>
    </Modal>

}

export default Cart;
