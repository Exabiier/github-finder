import React from 'react'
import {useState, useContext} from 'react'
import GithubContext from '../../../../Context/ContextAPI'
import AlertContext from '../../../../Context/alertContext/AlertContext'
import {searchUsers} from '../../../../Context/Action/GithubAction.js'


function UserSearch() {
// we are importing the github context in order to
// const{users,searchUsers, setClear } = useContext(GithubContext)
const{users, dispatch } = useContext(GithubContext)


const{setAlert} = useContext(AlertContext)
///////////////////////////////////////////////////////
    // we create a usestate for our input 
const [text, setText] = useState("");

///////////////////////////////////////////////////////
const handleChange = (e) => setText(e.target.value)

const handleSubmit = async (e) => {
    e.preventDefault()

    if(text === ""){
        // alert('Please enter something')
        setAlert("please enter something", "error")


    } else{
        dispatch({type: 'SET_LOADING'})
        // todo search users
        // searchUsers(text)

        const users = await searchUsers(text)
        dispatch({
            type: 'GET_USERS',
            payload: users,
        })

        setText('');
    }
}



  return (
    <div className = "grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-2 mb-8 gap-8" >


        <div>
            {/* We have a handler that is different for the sumbit then from the input  */}
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        {/* We put the state called textin the value and we put the handleChange to the as the set state, we use e.target.value */}
                        <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black"  placeholder="Search" value={text} onChange={handleChange}
                        />

                        <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Go</button>
                    </div>
                </div>
            </form>  
        </div>
        
        {/* We are using the string lenght on the user to make sure that the clear button only appears if a user is present.  */}
        {users.length > 0 && (
        <div>
            <button onClick={() => dispatch({type: 'SET_CLEAR'
            })} className="btn btn-ghost btn-lg">Clear</button>
        </div>
        )}
    </div>
  )
}

export default UserSearch