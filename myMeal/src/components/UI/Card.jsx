import styleClass from "../UI/Card.module.css"

function Card(props) {
    return (<div id='CardDiv1' className={styleClass.card} >{props.children} </div>)
}

export default Card