import { useContext } from 'react'
import CartContext from '../../stores/CartContext'
import styleClass from './HeaderCardButton.module.css'

export default function HeaderCardButton(props) {

    const cartContext = useContext(CartContext)
        
    function onClickHandler(){
        props.onShowCart()
    }

    return (
        <button className={styleClass.button} onClick={onClickHandler}>
            <span className={styleClass.icon}><i className="fa-solid fa-cart-shopping"></i></span>
            <span>Your Cart</span>
            <span className={styleClass.badge}>{cartContext.totalItems}</span>
        </button>
    )
}