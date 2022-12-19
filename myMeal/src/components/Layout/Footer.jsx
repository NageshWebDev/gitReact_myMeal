import styleFooter from './Footer.module.css'
import imgSrc from '../../Assets/5.png'
import { useState } from 'react'

export default function Footer() {

    const [email, setEmail] = useState(true)
    const [phone, setPhone] = useState(false)
    const [visibility, setVisibility] = useState(false)

    function onChangeRBEmailHandler() {
        setEmail(true)
        setPhone(false)
        setVisibility(true)
    }

    function onChangeRBPhoneHandler() {
        setEmail(false)
        setPhone(true)
        setVisibility(true)
    }

    const styleTextField={
        width: '60%',
        border: '1px solid black',
        borderRadius: '10px',
        paddingLeft: '10px',
        fontFamily: 'revert',
        fontSize: 'medium'
    }
    return (
        <footer className={styleFooter.footer}>
            <section className={styleFooter.section}>
                <div className={styleFooter.div1}>
                    <img className={styleFooter.img} src={imgSrc} alt='Food App' />
                </div>
                <div className={styleFooter.div2}>
                    <h1 style={{textAlign: 'center'}}>Get the MyMeal app</h1>
                    <p>We will send you a link, open it on your phone to download the app</p>
                    <form>
                        <div className={styleFooter.formDiv1}>
                            <label htmlFor='fi-1'><input onChange={onChangeRBEmailHandler} style={{ display: 'inline',  background: '#FF572233' }} id='fi-1' type='radio'  name="radAnswer" required/> Email</label>
                            <label htmlFor='fi-2'><input onChange={onChangeRBPhoneHandler} style={{ display: 'inline', background: '#FF572233' }} id='fi-2' type='radio'  name="radAnswer" required/> Phone</label>
                        </div>
                        { visibility &&
                        <div className={styleFooter.formDiv2}>
                            {email && <input style={styleTextField} id='fi-3' type='email' placeholder='Type Email' required/>}
                            {phone && <input style={styleTextField} className={styleFooter.fieldText} id='fi-4' type='number' placeholder='Type Phone Number' required/>}
                            <button type='submit' className={styleFooter.btnS}><i className="fa-solid fa-share"></i> Share App Link</button>
                        </div>
                        }
                    </form>
                    <div className={styleFooter.btnDiv}>
                        <button className={styleFooter.btnA}><i className="fa-brands fa-apple"></i> Apple Store</button>
                        <button className={styleFooter.btnG}><i className="fa-brands fa-google-play"></i> Google Play</button>
                    </div>
                </div>
            </section>
        </footer>
    )
}