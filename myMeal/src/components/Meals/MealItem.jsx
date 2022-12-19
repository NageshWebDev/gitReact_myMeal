import { useContext } from "react"
import styleClass from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"
import cartContext from "../../stores/CartContext"

function MealItem(props) {

    const cartCtx = useContext(cartContext)

    function onAddToCartHandler(amount){
        const cartData = {
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price.toFixed(2)
        }
        cartCtx.addItem(cartData)
    }

    return (
        <li className={styleClass.meal}>
            <div className={styleClass.mealItemDiv1}>
                <h3>{props.name}</h3>
                <div className={styleClass.description}>{props.description}</div>
                <div
                    className={styleClass.price}>
                    <i className="fa-solid fa-indian-rupee-sign"></i> {props.price.toFixed(2)}
                </div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={onAddToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem