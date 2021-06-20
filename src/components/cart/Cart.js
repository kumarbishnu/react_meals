import Modal from "../ui/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";


const Cart = props => {

    const cartContext = useContext(CartContext);
    const hasItems = cartContext.items.length > 0;
    const totalAmount = cartContext.totalAmount.toFixed(2);
    const addCartItem = item => {cartContext.addItem(item);}
    const removeCartItem = id => {cartContext.removeItem(id);}

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
            <div className="d-flex justify-content-between mt-2">
                <h5>Total Amount</h5>
                <h5>$ {totalAmount}</h5>
            </div>
        </div>
        <div className="modal-footer">
            <div className="btn btn-secondary" onClick={props.onClose}>Close</div>
            {hasItems && <div className="btn btn-danger">Order</div>}
        </div>
    </Modal>

}

export default Cart;
