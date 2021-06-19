import Card from "../ui/Card";

const MealItem = props => {
    return <li className="list-group-item py-3">
        <div>
            <h4 className="mb-1">{props.meal.name}</h4>
            <h6 className="fst-italic mb-1">{props.meal.description}</h6>
            <h5 className="text-danger mb-0">$ {props.meal.price.toFixed(2)}</h5>
        </div>
    </li>
}

export default MealItem;
