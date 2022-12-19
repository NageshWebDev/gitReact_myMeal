import React from "react"
import AvailableMeals from "./AvailableMeals"
import MealsSummary from "./MealsSummary"

function Meal(){
    return(
        <React.Fragment>
            <MealsSummary />
            <AvailableMeals />
        </React.Fragment>
    )
}

export default Meal