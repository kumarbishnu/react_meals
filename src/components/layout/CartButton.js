
const CartButton = props => {

    return (
        <button type="button" className="btn btn-danger" onClick={props.onclick}>
            <i className="fa fa-shopping-cart" />
            <span className="mx-3">Cart</span>
            <span className="badge bg-dark">{props.count}</span>
        </button>
    )

}

export default CartButton;
