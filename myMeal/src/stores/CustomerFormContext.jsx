import { createContext, useState } from "react"

export const customerFormContext = createContext()
export const customerDetailsContext = createContext()

export function CustomerDetailsProvider(props) {
    let customerDetails = {
        customerNameOnForm: '',
        customerAddressOnForm: '',
        customerNumberOnForm: ''
    }

    return (
        <customerDetailsContext.Provider value={customerDetails}>
            {props.children}
        </customerDetailsContext.Provider>
    )
}

export default function Provider(props) {

    const [confirmCustomerForm, setConfirmCustomerForm] = useState(false)

    return (
        <customerFormContext.Provider value={[confirmCustomerForm, setConfirmCustomerForm]}>
            {props.children}
        </customerFormContext.Provider>
    )
}