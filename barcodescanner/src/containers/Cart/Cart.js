/**
 * Create a container for the cart. If user did not scan anything, the system will prompt the cart is empty. If there are items, it will then list down the scanned items.
 */
import React, { Component, Fragment } from 'react'
import Product from '../../components/Product/Product'
import {clearScanned, setItem, deleteItem} from '../../store/actions/index'

import {connect} from 'react-redux'

import './Cart.css'

class Cart extends Component {

  clickHandler = () => {
    console.log('handler')
  }

  componentDidMount(){
    // clear the scannedItems of the state
    this.props.clearScanned()
  }

  render() {
    let scannedItems = 
          <div className="emptyCart">
            <h1>You don't have scanned items on file.</h1>
          </div>

// render the table with all the scanned items info IF there is
if (this.props.scannedItems.length >= 1){
  scannedItems = 
  <div className='divCart'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Income</th>
              </tr>
            </thead>
            <tbody>
              
              {this.props.scannedItems.map((scannedItem, i) => { // add counter to the scanned items. User is able to view more about the products or remove from the cart
                return (
                  <tr key={i}>
                    <th scope="row">{i+1}</th> 
                    <td>{scannedItem.name}</td>
                    <td>{scannedItem.description}</td>
                    <td>{scannedItem.income}</td>
                    <td><button 
                          type="button" 
                          onClick={()=>this.props.setItem(i)}
                          className="btn btn-sm btn-info">View More</button></td>
                    <td><button 
                          onClick={()=>this.props.deleteItem(i)}
                          type="button" 
                          className="btn btn-sm btn-danger">Remove</button></td>
                  </tr>
                  )}
                  )}
            </tbody>
          </table>
        </div>
    }
    
  // render selected item    
  if(this.props.selectedItem){
    scannedItems = 
    <div className='scannerContainer'>
      <Product 
        item={this.props.selectedItem}
        view={this.props.clearScanned}/>
    </div>
  }

    return (
      <Fragment>
        {scannedItems}
      </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    scannedItems: state.scanned.scannedItems,
    selectedItem: state.scanned.productScanned
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clearScanned: () => { dispatch(clearScanned()) },
    setItem: (i) => { dispatch(setItem(i)) },
    deleteItem: (i) => { dispatch( deleteItem(i)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)