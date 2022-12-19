import { useRef } from "react";
import Input from "../UI/Input"
import styleClass from "./MealItemForm.module.css";

function MealItemForm(props) {

    const counter = useRef(0)
    const amountInputRef = useRef()

    function submitHandler(event) {
        event.preventDefault()
        if (counter.current < 5) {
            amountInputRef.current.value = counter.current + 1
            props.onAddToCart(counter.current += 1)
        }
    }

    function onClickHandler(event){
        event.preventDefault()
        if (counter.current > 0) {
            amountInputRef.current.value = counter.current - 1
            props.onAddToCart(counter.current -= 1)
        }
    }

    return (
        <form className={styleClass.form} onSubmit={submitHandler}>
            <Input label='Amount' ref={amountInputRef} input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '0',
                max: '5',
                step: '1',
                defaultValue: '0'
            }}
            />
            <div className={styleClass.onlyDiv}>
                <button className={styleClass.buttonAdd} type="submit">+ Add</button>
                <button className={styleClass.buttonDel} onClick={onClickHandler}>- Delete</button>
            </div>

        </form>
    )
}

export default MealItemForm