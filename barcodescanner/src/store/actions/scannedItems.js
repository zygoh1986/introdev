/**
 * Actions - connect to the database and actions from user. 
 */

import {URL_PATH, PRINT} from '../../assets/config'


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
        if (response.status !== 200  ) {
        console.log('Error Status code:' + response.status)
        } else {
              return response.json().then( parsedRes => {
                console.log(parsedRes)
              
                if (parsedRes[0])
                {
                  product = {
                  barcode: parsedRes[0].barcode,
                  name: parsedRes[0].name,
                  description: parsedRes[0].description,
                  income: parsedRes[0].income,
                  }
                  dispatch(productDetected(product))
                }
                  else if (parsedRes[1])
                  {
                    product = {
                      barcode: parsedRes[1].barcode,
                      name: parsedRes[1].name,
                      description: parsedRes[1].description,
                      income: parsedRes[1].income,
                      }
                      dispatch(productDetected(product))
                  }
                  else if (parsedRes[2])
                  {
                    product = {
                      barcode: parsedRes[2].barcode,
                      name: parsedRes[2].name,
                      description: parsedRes[2].description,
                      income: parsedRes[2].income,
                      }
                      dispatch(productDetected(product))
                  }
                  else
                  {
                    dispatch(invalidBarcode('invalid'))
                  }

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