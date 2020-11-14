/**
 * Create div to make spinner - to show user it is loading
*/
import React from 'react'
import './Spinner.css'


export default () => {
  return (
    <div className='spinnerContainer'>

    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
