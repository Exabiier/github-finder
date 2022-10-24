import React from 'react'
import {createContext, useReducer} from 'react'
import alertReducer from  '../alertContext/AlertReducer.js'

const AlertContext = createContext();

export const AlertProvider = ({children}) => {
const intitialState = null;

const [state, dispatch] = useReducer(alertReducer, intitialState);

// Set an alert
const setAlert = (msg, type) =>{
    dispatch({
        type: 'SET_ALERT',
        payload: {msg, type}
    })

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT'}), 3000)

    }


return <AlertContext.Provider value = {{alert: state, setAlert}}>

    {children}

</AlertContext.Provider>



}



export default AlertContext