/**
 * This is a container for Scan. Rendering Start Scan button, invalid barcode, API and no camera message.
 */
import React, { Component, Fragment } from 'react'
import './Objective.css'


class Objective extends Component {

 
  render() {

    return (
      <Fragment>
        <div className="scannerContainer"> 
    <h1>Objective</h1>
    <p>
    
      HOORAY! Your favourite Uncle Charles and his family have recently returned
      from USA and want to have dinner with you.
    </p>
    <p>
      Treat them to a healthy and delicious meal prepared by you. Its time to
      head to the mini mart and purchase the ingredients you need to cook a meal
      for a family of four.
    </p>
        </div>
      </Fragment>
    )
  }
}



export default Objective