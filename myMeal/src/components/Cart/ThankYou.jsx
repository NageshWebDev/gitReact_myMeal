import style from './ThankYyou.module.css'

export default function ThankYou() {
    return (
        <section className={style.section}>
            <div className={style.containerDiv}>
                <div><h1 className={style.h1}>Thank You</h1></div>
                <div><h3 className={style.h3}>For Your Order!</h3></div>
                <div>
                    <p className={style.p1}>
                        <span className={style.span1} >LIKE IT ?</span>
                        <span className={style.span2} >LOVE IT ?</span>
                        <span className={style.span3} >REVIEW IT !</span>
                    </p>
                    <p>www.MyMeal.com</p>
                </div>
            </div>
        </section>
    )
}