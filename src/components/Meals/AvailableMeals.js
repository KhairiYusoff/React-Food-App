import React from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect } from 'react';

const AvailableMeals = () => {

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://react-http-8cea9-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json')
            const responseData = await response.json()
            console.log(responseData)
            const loadedMeals = []
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }
        }

        fetchMeals()
    }, [])

    const mealsList = DUMMY_MEALS.map(meal =>
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price} />)

    return (
        <div className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>

        </div>
    )
}

export default AvailableMeals