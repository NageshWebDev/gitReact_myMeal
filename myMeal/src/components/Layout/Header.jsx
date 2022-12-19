import React from "react"
import styleClass from './Header.module.css'
import HeaderCardButton from "./HeaderCardButton"

function Header(props){
   
    return(
        <React.Fragment>
            <header className={styleClass.header} >
                <h1><i className="fa-solid fa-bowl-food"></i> MyMeals</h1>
                <HeaderCardButton onShowCart={props.onShowCart}/>
            </header>
            <div className={styleClass['main-image']}>
                <img alt='A table full of delicious food'></img>
            </div>
        </React.Fragment>
    )
}

export default Header