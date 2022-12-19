import style from './ErrorMsg.module.css'

export default function ErrorMsg(props){
    return(<h1 className={style.h1}>Error : {props.children} &nbsp; <i className={`${style.error} fa-solid fa-circle-exclamation`}></i></h1>)
}