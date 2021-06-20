import {useRef, useState} from "react";

const isEmpty = value => value.trim() === '';
const isFiveChar = value => value.trim().length === 5;

const Checkout = props => {

    const [formValidity, setFormValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true,
    });

    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();

    const confirmHandler = event => {
        event.preventDefault();

        const name = nameRef.current.value;
        const street = streetRef.current.value;
        const postal = postalRef.current.value;
        const city = cityRef.current.value;

        const nameIsValid = !isEmpty(name);
        const streetIsValid = !isEmpty(street);
        const postalIsValid = isFiveChar(postal);
        const cityIsValid = !isEmpty(city);

        setFormValidity({
            name: nameIsValid,
            street: streetIsValid,
            postal: postalIsValid,
            city: cityIsValid
        });

        const formIsValid = nameIsValid && streetIsValid && postalIsValid && cityIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({name, street, postal, city});
    };

    return <form className="row">
        <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className={`form-control ${!formValidity.name && 'is-invalid'}`} id="name" ref={nameRef} />
            {!formValidity.name && <small className="text-danger">Please enter a valid name!</small>}
        </div>
        <div className="col-md-6 mb-3">
            <label htmlFor="street" className="form-label">Street</label>
            <input type="text" className={`form-control ${!formValidity.street && 'is-invalid'}`} id="street" ref={streetRef} />
            {!formValidity.street && <small className="text-danger">Please enter a valid street!</small>}
        </div>
        <div className="col-md-6 mb-3">
            <label htmlFor="postal" className="form-label">Postal Code</label>
            <input type="text" className={`form-control ${!formValidity.postal && 'is-invalid'}`} id="postal" ref={postalRef} />
            {!formValidity.postal && <small className="text-danger">Please enter a valid postal code!</small>}
        </div>
        <div className="col-md-6 mb-3">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" className={`form-control ${!formValidity.city && 'is-invalid'}`} id="city" ref={cityRef} />
            {!formValidity.city && <small className="text-danger">Please enter a valid city!</small>}
        </div>
        <div className="text-end">
            <div className="btn btn-secondary" onClick={props.onCancel}>Cancel</div>
            <div className="btn btn-danger ms-2" onClick={confirmHandler}>Checkout</div>
        </div>
    </form>

}

export default Checkout;
