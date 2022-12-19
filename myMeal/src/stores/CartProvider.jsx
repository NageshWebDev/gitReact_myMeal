import React, { useReducer } from "react";
import CartContext from "./CartContext";

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const updatedCartItems = state.items.reverse().concat(action.payload)

            const uniqueIds = [];
            const uniqueListOfItems = updatedCartItems.reverse().filter(element => {
                const isDuplicate = uniqueIds.includes(element.id);
                if (!isDuplicate) {
                    uniqueIds.push(element.id);
                    return true;
                }
                return false;
            });
            const numOfCartItems = uniqueListOfItems.reduce((num, ele) => { return (num + ele.amount) }, 0)

            const updatedTotalAmount = uniqueListOfItems.reduce((cartItemAmount, ele) => {
                return (cartItemAmount + (ele.amount * ele.price))
            }, 0)
            return (
                {
                    items: uniqueListOfItems,
                    totalAmount: updatedTotalAmount,
                    totalItems: numOfCartItems
                }
            )
        case "EMPTY_ALL":
            return ({
                items: [],
                totalAmount: 0,
                totalItems: 0
            })
        default:
            break;
    }
}

const defaultCartState = {
    items: [],
    totalAmount: 0,
    totalItems: 0
}

export default function CartProvider(props) {

    const [cartState, dispatch] = useReducer(cartReducer, defaultCartState)

    function addItemToCart(item) {
        dispatch({ type: 'ADD_TO_CART', payload: item })
    }

    function clearCartItems() {
        dispatch({ type: 'EMPTY_ALL' })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        totalItems: cartState.totalItems,
        addItem: addItemToCart,
        clearItem: clearCartItems
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}



