
import {URL_PATH, PRINT} from '../../assets/config'
//import firebase from '../../assets/config'

export const startScanning = () => {
  return {
    type: "START_SCANNING"
  }
}

export const clearScanned = () => {
  return {
    type: 'CLEAR_SCANNED'
  }
}

export const setItem = (i) => {
  return {
    type: 'SET_ITEM',
    payload: i
  }
}

export const deleteItem = (i) => {
  return {
    type: 'DELETE_ITEM',
    payload: i
  }
}

export const processBarcode = (barcode) => {

  return dispatch => {
    dispatch(spinnerOn())

  
    let url = URL_PATH + '"'+barcode+'"' + PRINT
    let req = new Request(url) 
    let product = null
    fetch(req)
    .catch(err => console.log('error', err))

    .then(response => {
      console.log(response)
        if (response.status !== 200 ) {
        console.log('Error Status code:' + response.status)
        dispatch(invalidBarcode('invalid'))
        } else {
              return response.json().then( parsedRes => {
                console.log(parsedRes)
              
           
                  product = {
                  barcode: parsedRes.barcode,
                  name: parsedRes.name,
                  description: parsedRes.description,
                  income: parsedRes.income
                  }
                

                  console.log(product)
                  dispatch(productDetected(product))
            
                

              }) //end return
          }// end else
        })

  }
}

export const spinnerOn = () => {
  return {
    type: 'SPINNER_ON'
  }
}
  
  
export const productDetected = (product) => {
  return {
    type: 'PRODUCT_DETECTED',
    payload: product
  }
}

export const invalidBarcode = (err) => {
  let errText = err === 'noAPI' ? 'NO_API_KEY' : 'INVALID_BARCODE'
  return {
    type: errText,
  }
}