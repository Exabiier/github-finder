import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function UserItem(git) {
  return (
    <div className="card shadow-md compact side bg-base-300">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={git.user.avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{git.user.login}</h2>
          <Link className='text-base-content text-opacity-40' to={`/user/${git.user.login}`}>Viist Profile</Link>
        </div>
      </div>
      
      </div>
  )
}

UserItem.propTypes = {
  git: PropTypes.object.isRequired,
}

export default UserItem