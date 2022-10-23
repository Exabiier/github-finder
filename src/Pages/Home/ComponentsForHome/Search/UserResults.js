import React from 'react'
import { useContext} from 'react'
import Spinner from './spinner'
import UserItem from './UserItem'
import GithubContext from '../../../../Context/Context'

function UserResults() {

    const{users, loading, gitUsers} = useContext(GithubContext)
    // use affect is for changing the React state after the render has happened

    // you dont have to use use Effect
    // useEffect(()=>{
    //   gitUsers()  
    // },[])



// we are using a lot of classnames from tailwind and daisy UI in order to show our data from the API we recieved from above. 
  
if(!loading){
return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user)=>(
            <UserItem key={user.id} user={user}/>
        ))}
        </div>
  )
        } else {
           return <Spinner />
        }
}

export default UserResults