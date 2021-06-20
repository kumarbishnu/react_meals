const CartItem = props => {

    return <li className="list-group-item d-flex justify-content-between">
        <div>
            <h5>{props.item.name}</h5>
            <div className="d-flex align-items-end">
                <h6 className="text-danger" style={{width: "100px"}}>$ {props.item.price}</h6>
                <span className="badge text-dark border p-2">x {props.item.amount}</span>
            </div>
        </div>
        <div className="d-flex align-items-center">
            <div className="btn btn-sm btn-outline-danger me-1"><i className="fa fa-minus" /></div>
            <div className="btn btn-sm btn-outline-danger"><i className="fa fa-plus" /></div>
        </div>
    </li>

}

export default CartItem;
