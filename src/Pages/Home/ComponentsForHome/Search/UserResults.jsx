import React from 'react'
import {useEffect, useState} from 'react'

function UserResults() {

    // we seting the state for the loader and the user state as well

    const [users, setUsers] = useState([])
    const [loading, setloading] = useState(true)

    // use affect is for changing the React state after the render has happened

    // you dont have to use use Effect
    useEffect(()=>{
      gitUsers()  
    },[])


    // this is our fethc for the API from Github.

    const gitUsers = async () =>{
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
        headers:{
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`

        }})

        const data = await response.json();
        console.log(data);


        setUsers(data)
        setloading = false

    }
    // gitUsers();
    console.log(gitUsers);



// we are using a lot of classnames from tailwind and daisy UI in order to show our data from the API we recieved from above. 
  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user)=>(
            <h3>{user.login}</h3>
        ))}
        </div>
  )
}

export default UserResults