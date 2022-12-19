import Modal from "../UI/Modal"
import styleClass from "./Cart.module.css"
import CartContext from "../../stores/CartContext"
import React, { Fragment, useContext, useState } from "react"
import CartItem from "./CartItem"
import CustomerForm from "../Layout/CustomerForm"
import { customerFormContext } from '../../stores/CustomerFormContext'
import ThankYou from "./ThankYou"
import { customerDetailsContext } from '../../stores/CustomerFormContext'

export default function Cart(props) {

    const cartItems = useContext(CartContext)
    const [showThankYouMsg, setShowThankYouMsg] = useState(false)
    const [showCustomerForm, setShowCustomerForm] = useState(true)
    const totalAmount = cartItems.totalAmount.toFixed(2)
    const [itemInCart, setItemInCart] = useState(cartItems.items.length > 0)
    const [confirmCustomerForm] = useContext(customerFormContext)
    const details = useContext(customerDetailsContext)

    function cartItemRemoveHandler(item) {
        if (item.amount > 0 && item.amount <= 5) {
            let newAmount = --item.amount
            let newItemObj = { ...item, amount: newAmount }
            cartItems.addItem(newItemObj)
            console.log(itemInCart)
            console.log(newItemObj)
        }
    }

    function cartItemAddHandler(item) {
        if (item.amount > 0 && item.amount < 5) {
            let newAmount = ++item.amount
            let newItemObj = { ...item, amount: newAmount }
            cartItems.addItem(newItemObj)
            console.log(itemInCart)
        }
    }

    async function onClickHandler(event) {
        event.preventDefault()
        console.log(totalAmount)
        if (totalAmount > 0) {
            setItemInCart(true)
            setShowCustomerForm(false)
            setShowThankYouMsg(true)
            await fetch('https://reacthttp-d29f6-default-rtdb.firebaseio.com/customerOrder.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ cartItems: cartItems.items, customerDetails: details }),
            })
            cartItems.clearItem()
            setTimeout(() => { props.onHideCart() }, 3000)
        } else {
           setItemInCart(false)
        }
    }

    return (
        <Fragment>
            <Modal onHideCart={props.onHideCart}>
                <ul className={styleClass['cart-items']}>
                    {
                        cartItems.items
                            .filter((cartItem) => { return (cartItem.amount > 0) })
                            .map((cartItem) => {
                                return (<CartItem
                                    key={cartItem.id}
                                    name={cartItem.name}
                                    amount={cartItem.amount}
                                    price={cartItem.price}
                                    onRemove={cartItemRemoveHandler.bind(null, cartItem)}
                                    onAdd={cartItemAddHandler.bind(null, cartItem)}
                                />)
                            })
                    }
                </ul>
                <div className={styleClass.total}>
                    {itemInCart &&
                        <React.Fragment>
                            <span>Total Amount</span>
                            <span> <i className="fa-solid fa-indian-rupee-sign"></i>{totalAmount}</span>
                        </React.Fragment>}
                    {!itemInCart && <p style={{ textAlign: 'center', width: '100%' }}><i className={`${styleClass.emptyCart} fa-solid fa-cart-shopping`}></i> &nbsp; Your Cart is Empty</p>}
                </div>
                {itemInCart && showCustomerForm && <CustomerForm />}
                <div className={styleClass.actions}>
                    <button className={styleClass['button--alt']} onClick={props.onHideCart}>Close</button>
                    {itemInCart && confirmCustomerForm && <button onClick={onClickHandler} className={styleClass.button}>Order</button>}
                </div>
            </Modal>
            {showThankYouMsg && <Modal><ThankYou /></Modal>}
        </Fragment>
    )
}