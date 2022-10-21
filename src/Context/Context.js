// old way of using state
// import {createContext, useState } from 'react';

// now we are using Reducers
import {createContext, useReducer } from 'react';


import GithubReducers from './Reducers/GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvider = ({children}) =>{


    const initialState = {
        users: [],
        loading: true
    }

    // dispatch is a fucntion it kind of acts as the setState with the useState hook. It dispatchs a action to our reducer
    const [state, dispatch] = useReducer(GithubReducers, initialState)
    


     // we seting the state for the loader and the user state as well
    // const [users, setUsers] = useState([])
    // const [loading, setloading] = useState(true)


 // this is our fethc for the API from Github.
    const gitUsers = async () =>{
        const response = await fetch(`${GITHUB_URL}/users`, {
        headers:{
            Authorization: `token ${GITHUB_TOKEN}`

        }})

        const data = await response.json();
        console.log(data);

//  old way of useing state we now use reducers
        // setUsers(data)
        // setloading(false)

        dispatch({
            type: 'GET_USERS',
            payload: data
        })

    }

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,

        // users,
        // loading,
        gitUsers,
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext
