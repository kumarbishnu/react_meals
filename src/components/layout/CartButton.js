const CartButton = props => {
    return (
        <a
            className="btn btn-secondary"
            href="/cart">
            <i className="fa fa-shopping-cart" />
            <span className="mx-3">Cart</span>
            <span className="badge bg-dark">{props.count}</span>
        </a>
    )
}

export default CartButton;
