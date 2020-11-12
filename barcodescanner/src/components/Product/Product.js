import React, { Component, Fragment } from 'react'
import './Product.css'


class Product extends Component {
  render() {
    return (
      <Fragment>
        <div>
        <button 
          onClick={this.props.click ? this.props.click : this.props.view}
          className="btn btn-secondary btn-md btn-block btn-scan-again">{this.props.click ? 'Scan Again' : 'View Cart' }</button>
              <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Barcode</td>
                  <td>{this.props.item.barcode}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{this.props.item.name}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{this.props.item.description}</td>
                </tr>
                <tr>
                  <td>Income</td>
                  <td>{this.props.item.income}</td>
                </tr>
              </tbody>
            </table>  
        
        </div>
      </Fragment>
    )
  }
}

export default Product

