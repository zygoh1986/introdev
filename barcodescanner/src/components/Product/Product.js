import React, { Component, Fragment } from 'react'
import './Product.css'
//import barcodes from '../../assets/config'

class Product extends Component {
  render() {
    return (
      <Fragment>
        <div>
        <button 
          onClick={this.props.click ? this.props.click : this.props.view}
          className="btn btn-secondary btn-md btn-block btn-scan-again">{this.props.click ? 'Scan Again' : 'View Cart' }</button>
          {this.state.data.map((barcodes)=>
          {
            return (
              <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Barcode</td>
                  <td>{barcodes.barcode}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{barcodes.name}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{barcodes.description}</td>
                </tr>
                <tr>
                  <td>Income</td>
                  <td>{barcodes.income}</td>
                </tr>
              </tbody>
            </table>  
            )
          })}
        
        </div>
      </Fragment>
    )
  }
}

export default Product

