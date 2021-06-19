import Card from "../ui/Card";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
    {id: 'm1', name: 'Sushi', description: 'Finest fish and veggies', price: 22.99},
    {id: 'm2', name: 'Schnitzel', description: 'A german specialty!', price: 16.5},
    {id: 'm3', name: 'Barbeque Burger', description: 'America, Raw, Rusty', price: 12.99},
    {id: 'm4', name: 'Green Bowl', description: 'Healthy...and green...', price: 18.99},
]

const MealsAvailable = () => {
    return <Card className="text-dark w-75 mx-auto">
        <ul className="list-group list-group-flush">
        {DUMMY_MEALS.map(meal => <MealItem key={meal.id} meal={meal} />)}
        </ul>
    </Card>
}

export default MealsAvailable;
