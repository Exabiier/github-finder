// old way of using state
// import {createContext, useState } from 'react';

// now we are using Reducers
import {createContext, useReducer } from 'react';


import GithubReducers from './Reducers/GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvider = ({children}) =>{

// We added a user as an empty object
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    // dispatch is a fucntion it kind of acts as the setState with the useState hook. It dispatchs a action to our reducer
    const [state, dispatch] = useReducer(GithubReducers, initialState)
   
   

    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
     // we seting the state for the loader and the user state as well
    // const [users, setUsers] = useState([])
    // const [loading, setloading] = useState(true)


    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
 // this is our fethc for the API from Github. get Initial users(testing)
    // const gitUsers = async () =>{
    //     // the function is on the bottom and its a dispatch for our 
    //     setLoading()
    //     const response = await fetch(`${GITHUB_URL}/users`, {
    //     headers:{
    //         Authorization: `token ${GITHUB_TOKEN}`

    //     }})

    //     const data = await response.json();
    //     console.log(data);

//  old way of useing state we now use reducers
        // setUsers(data)
        // setloading(false)

    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: data
    //     })

    // }

    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////

    const searchUsers = async (text) =>{
        // the function is on the bottom and its a dispatch for our 
        setLoading()

        // params
        const params = new URLSearchParams({
            q: text 
        })



        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers:{
            Authorization: `token ${GITHUB_TOKEN}`

        }})

        // the old way of doing things
        // const data = await response.json();
        // console.log(data);
//         we are deconstructig the object from the API call
        const {items} = await response.json();
        // console.log(data.items);

        // why cant i use data.items instead of using the de-constructor
        // if the file path is not working for you there is always the deconstructor option for you to use for API data.

//  old way of useing state we now use reducers
        // setUsers(data)
        // setloading(false)

        dispatch({
            type: 'GET_USERS',
            payload: items,
        })

    }
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// single user
const getUser = async (login) =>{
    // the function is on the bottom and its a dispatch for our 
    setLoading()

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers:{
        Authorization: `token ${GITHUB_TOKEN}`

    }})

    // we are making an if statement just in case we get a 404 error
    if(response.status === 404){
        window.location = '/notfound'
    } else {
        const data = await response.json();

        dispatch({
            type: 'GET_USER',
            payload: data,
        })
    }

   
}
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

    const getUserRepos = async (login) =>{
        // the function is on the bottom and its a dispatch for our 
        setLoading()

        const response = await fetch(`${GITHUB_URL}/users?${login}/repos`, {
        headers:{
            Authorization: `token ${GITHUB_TOKEN}`

        }})
   
        const data = await response.json();
       
        dispatch({
            type: 'GET_USERS_REPOS',
            payload: data,
        })

    }
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

    // set laoding
    const setLoading = () => dispatch({type: 'SET_LOADING'})

    // Clear users from state
    const setClear = () => dispatch({
        type: 'SET_CLEAR'
    })

    return <GithubContext.Provider value={{
        // because the intial state already sets the keys we just reuse them here. and se use the state as the value pair of them. since the state is an object we must derive the right value from the folder path
        users: state.users,
        user: state.user,
        repos: state.repos,

        loading: state.loading,

        // users,
        // loading,
        searchUsers,
        setClear,
        getUser,
        getUserRepos,
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext
