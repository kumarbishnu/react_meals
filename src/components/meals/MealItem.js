import MealItemForm from "./MealItemForm";

const MealItem = props => {
    return <li className="list-group-item d-flex justify-content-between py-3">
        <div>
            <h4 className="mb-1">{props.meal.name}</h4>
            <h6 className="fst-italic mb-1">{props.meal.description}</h6>
            <h5 className="text-danger mb-0">$ {props.meal.price.toFixed(2)}</h5>
        </div>
        <MealItemForm />
    </li>
}

export default MealItem;
