import style from "./Loading.module.css"

export default function Loading(){
    return(<h1 className={style.h1}>Loading &nbsp; <span><i className={`${style.load} fa-solid fa-spinner`}></i></span></h1>)
}