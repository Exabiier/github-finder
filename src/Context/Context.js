import {createContext, useState } from 'react';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvider = ({children}) =>{

    const [users, setUsers] = useState([])
    const [loading, setloading] = useState(true)

    const gitUsers = async () =>{
        const response = await fetch(`${GITHUB_URL}/users`, {
        headers:{
            Authorization: `token ${GITHUB_TOKEN}`

        }})

        const data = await response.json();
        console.log(data);


        setUsers(data)
        setloading(false)

    }

    return <GithubContext.Provider value={{
        users,
        loading
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext
