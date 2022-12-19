import React, { useEffect, useState } from "react"
// import dummyData from "./dummy-meals"
import styleClass from "./AvailableMeals.module.css"
import Card from "../UI/Card"
import MealItem from "./MealItem"
import Loading from "./Loading"
import ErrorMsg from "./ErrorMsg"

function AvailableMeals() {

    const [loadingAvailableMeals, setLoadingAvailableMeals] = useState(true)
    const [dummyData, setDummyData] = useState([])
    const [errorMsg, setErrorMsg] = useState(false)

    useEffect(() => {
        async function fetchAvailableMeals() {
            try {
                let response = await fetch('https://reacthttp-d29f6-default-rtdb.firebaseio.com/meals.json')
                if (!response.ok){
                    setLoadingAvailableMeals(false)
                    setErrorMsg(response.status)
                    throw new Error('RESPONSE FAILED: '+ response.status)
                }

                let responseData = await response.json()

                let objArray = []
                Object.keys(responseData).forEach(key => objArray.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                }));
                setDummyData(objArray)
                setTimeout(()=>{setLoadingAvailableMeals(false)},1000)

            } catch (error) {
                console.log(error.message)
            }
        }
        fetchAvailableMeals()
    }, [])

    return (
        <section className={styleClass.meals}>
            <Card >
                <ul>
                    {loadingAvailableMeals && !errorMsg && <Loading/>}
                    {!loadingAvailableMeals && errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
                    {!loadingAvailableMeals && !errorMsg && dummyData.map((meal) => {
                        return (
                            <MealItem
                                key={meal.id}
                                id={meal.id}
                                name={meal.name}
                                description={meal.description}
                                price={meal.price} />
                        )
                    })}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals