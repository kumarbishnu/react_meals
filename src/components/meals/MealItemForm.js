const MealItemForm = props => {

    return <form action="" className="d-flex align-items-center text-nowrap">
        <label for="amount" className="form-label me-3 mb-0">Amount</label>
        <input type="number" id="amount" className="form-control me-3" defaultValue={0} min={0} max={10} />
        <div className="btn btn-danger"><i className="fa fa-plus me-2" /> Add</div>
    </form>

}

export default MealItemForm;
