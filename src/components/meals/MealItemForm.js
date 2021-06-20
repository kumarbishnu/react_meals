import {useRef, useState} from "react";

const MealItemForm = props => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        setAmountIsValid(true);
        const amount = amountInputRef.current.value;
        const amountNumber = +amount;
        if (amount.trim().length === 0 || amountNumber < 1 || amountNumber > 10) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(amountNumber);
    }

    return <form action="" className="d-flex align-items-center text-nowrap">
        {!amountIsValid && <div className="badge bg-danger me-3">Please enter a valid amount (1-10)</div>}
        <label htmlFor="amount" className="form-label me-3 mb-0">Amount</label>
        <input type="number" id="amount" className="form-control me-3" defaultValue={1} min={0} max={10} ref={amountInputRef} />
        <div className="btn btn-danger" onClick={submitHandler}><i className="fa fa-plus me-2" /> Add</div>
    </form>

}

export default MealItemForm;
