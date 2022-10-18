import React from 'react'
import SpinnerIcon from '../../../../components/assets/74H8.gif'

function Spinner() {
  return (
    <div className="w-100 mt-20">
        <img
        width={180}
        className="text-center mx-auto"
        src={SpinnerIcon}
        alt="Loading.."
        />
    </div>
    
  )
}

export default Spinner