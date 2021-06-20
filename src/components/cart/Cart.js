import Modal from "../ui/Modal";


const Cart = props => {

    const cartItems = [
        {id: 'm1', name: 'Sushi', description: 'Finest fish and veggies', price: 22.99},
        {id: 'm2', name: 'Schnitzel', description: 'A german specialty!', price: 16.5},
    ]

    const total = 24;

    return <Modal id="cartModal">
        <div className="modal-body text-dark">
            {cartItems.map(item => item.name)}
            <div className="d-flex justify-content-between">
                <h5>Total Amount</h5>
                <h5>$ {total}</h5>
            </div>
        </div>
        <div className="modal-footer">
            <div className="btn btn-secondary" onClick={props.onClose}>Close</div>
            <div className="btn btn-danger">Order</div>
        </div>
    </Modal>

}

export default Cart;
