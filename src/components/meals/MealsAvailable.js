import Card from "../ui/Card";
import MealItem from "./MealItem";
import {useEffect, useState} from "react";

const MealsAvailable = () => {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            setLoading(true);

            const response = await fetch('https://mero-khata-d9bbc-default-rtdb.firebaseio.com/meals.json');
            if (!response.ok) {throw new Error('Something went wrong!');}

            const responseData = await response.json();
            const meals = [];
            for (const key in responseData) {
                meals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                })
            }
            setMeals(meals);
            setLoading(false);
        }

        fetchMeals().catch(error => {
            setLoading(false);
            setError(error.message);
        });
    }, []);

    if (error) {
        return <div className="alert alert-danger w-75 mx-auto">{error}</div>
    }

    if (loading) {
        return <Card className="w-75 mx-auto">
            <div className="spinner-border text-danger my-5 mx-auto" />
        </Card>
    }

    return <Card className="text-dark w-75 mx-auto">
        <ul className="list-group list-group-flush">
        {meals.map(meal => <MealItem key={meal.id} meal={meal} />)}
        </ul>
    </Card>
}

export default MealsAvailable;
