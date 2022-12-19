import { useContext, useReducer, useState } from 'react'
import styleFooter from './CustomerForm.module.css'
import { customerFormContext } from '../../stores/CustomerFormContext'
import { customerDetailsContext } from '../../stores/CustomerFormContext'

const customerInitialDetails = {
    customerName: 'test',
    customerAddress: 'test-123, test 12345',
    customerNumber: '1234567890'
}

function reducer(state, action) {
    switch (action.type) {
        case 'CLEAR_ALL':
            return ({
                customerName: '',
                customerAddress: '',
                customerNumber: ''
            })

        case 'NAME':
            return ({
                ...state,
                customerName: action.payload,
            })

        case 'ADDRESS':
            return ({
                ...state,
                customerAddress: action.payload,
            })

        case 'PHONE':
            return ({
                ...state,
                customerNumber: action.payload
            })

        default:
            break;
    }
}

export default function CustomerForm() {

    const [customerDetails, dispatchCustomerDetails] = useReducer(reducer, customerInitialDetails)
    const { customerName, customerAddress, customerNumber } = customerDetails
    const [formDataSubmitted, setFormDataSubmitted] = useState(false)
    const [formData, setFormData] = useState('')
    const { customerNameOnForm, customerAddressOnForm, customerNumberOnForm } = formData
    const [, setConfirmCustomerForm] = useContext(customerFormContext)
    const details = useContext(customerDetailsContext)

    function onSubmitHandlerForm(e) {
        e.preventDefault()
        setFormData({
            customerNameOnForm: customerName,
            customerAddressOnForm: customerAddress,
            customerNumberOnForm: customerNumber
        })
        details.customerNameOnForm = customerName
        details.customerAddressOnForm = customerAddress
        details.customerNumberOnForm = customerNumber
        setFormDataSubmitted(true)
        setConfirmCustomerForm(true)
    }

    function onClickHandlerClick() {
        return (dispatchCustomerDetails({ type: 'CLEAR_ALL' }))
    }

    function onClickHandlerChange() {
        setFormDataSubmitted(false)
        setConfirmCustomerForm(false)
    }


    return (
        <footer className={styleFooter.footer}>
            <section>
                <h1 style={{ textAlign: 'center' }}><i className='fa-solid fa-pen'></i> &nbsp;Fill Details</h1>
                <p style={{ textAlign: 'center' }}><i className="fa-solid fa-bowl-food"></i> &nbsp;<strong>Hot Food Deliver To Your Doorstep</strong></p>
                <form onSubmit={onSubmitHandlerForm}>

                    {!formDataSubmitted && <div className={styleFooter.formDiv2}>
                        <input onChange={(e) => dispatchCustomerDetails({ type: "NAME", payload: e.target.value })} value={customerName} className={styleFooter.styleTextField} id='fi-1' type='text' placeholder='Type Name' required />
                        <input onChange={(e) => dispatchCustomerDetails({ type: "ADDRESS", payload: e.target.value })} value={customerAddress} className={styleFooter.styleTextField} id='fi-2' type='text' placeholder='Type Full Address' required />
                        <input onChange={(e) => dispatchCustomerDetails({ type: "PHONE", payload: e.target.value })} value={customerNumber} className={styleFooter.styleTextField} id='fi-3' type='number' placeholder='Type Phone Number' required />
                    </div>}

                    {formDataSubmitted && <div className={styleFooter.formDiv2}>
                        <p style={{ textAlign: 'left', marginLeft: '50px' }}><i className="fa-solid fa-user"></i> &nbsp;{customerNameOnForm}</p>
                        <p style={{ textAlign: 'left', marginLeft: '50px' }}><i className="fa-solid fa-house"></i> &nbsp;{customerAddressOnForm}</p>
                        <p style={{ textAlign: 'left', marginLeft: '50px' }}><i className="fa-solid fa-phone"></i> &nbsp;{customerNumberOnForm}</p>
                    </div>}

                    {!formDataSubmitted && <div className={styleFooter.btnDiv}>
                        <button type='submit' className={styleFooter.btnA}>&nbsp;<i className="fa-solid fa-check"></i>&nbsp; Confirm &nbsp;</button>
                        <button type='button' onClick={onClickHandlerClick} className={styleFooter.btnG}>&nbsp;<i className="fa-solid fa-xmark"></i>&nbsp; Clear All &nbsp;</button>
                    </div>}

                    {formDataSubmitted && <div className={styleFooter.btnDiv}>
                        <button type='button' onClick={onClickHandlerChange} className={styleFooter.btnC}>&nbsp;<i className="fa-solid fa-circle-exclamation"></i>&nbsp; Change &nbsp;</button>
                    </div>}

                </form>
            </section>
        </footer>
    )
}