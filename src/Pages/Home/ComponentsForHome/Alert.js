import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import React from 'react'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import Spinner from './Search/spinner'
import AlertContext from '../../../Context/alertContext/AlertContext'



function Alert() {
    const{alert} = useContext(AlertContext)
  return alert !== null && (
    <p className="flex items-start mb-4 space-x-2">
        {/* we dont need this alert === 'error here but its good practice to do this just in case we ave different errors */}
        {alert.type === 'error' && (
             <svg
             fill='none'
             viewBox='0 0 24 24'
             className='w-6 h-6 stroke-current mr-3'
           >
             <path
               strokeLinecap='round'
               strokeLinejoin='round'
               strokeWidth='2'
               d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
             ></path>
           </svg>
            
       )}
       {/* we can also bring the state from the component itself  */}
       {/* we used the contrext way instead */}
       <p className="flex-1 text-base font-semibold leading-7 text-white">
        <strong>{alert.msg}</strong>
       </p>
    </p>
  )
  
}

export default Alert