import { arrayUtils } from 'js_utils'
import { sortModes } from '@enums/sortModes.js'

const randomTime = () => 1500 + Math.random() * 3000
const promisedResult = ( result ) => (
  new Promise(( resolve ) => {
    setTimeout(() => {
      resolve(result)
    }, randomTime() );
  })
)
class ProductService {
  delete(id) {
    const products = this.getLocalStorageProducts()

    arrayUtils.remove(products, ( product ) => product.id === id  )

    this.setLocalStorageProducts(products)
    return promisedResult('success')
  }

  add( product ) {
    const products = this.getLocalStorageProducts() || []

    product.id = this.generateProductId(products)

    products.push(product)

    this.setLocalStorageProducts(products)
    return promisedResult( product )
  }

  generateProductId( products ) {
    return products.length === 0 ? 0 : products[products.length - 1].id + 1
  }


  get( sortMode ) {
    const products = this.getLocalStorageProducts()

    this.sortByMode(products, sortMode)

    console.log('sorted', products)
    return promisedResult(products)
  }

  sortByMode( products, sortMode) {
    switch(sortMode) {
    case sortModes.priceDesc:
      products.sort(( a, b ) => b.price - a.price)
      return
    case sortModes.priceAsc:
      products.sort(( a, b ) => a.price - b.price)
      return
    case sortModes.title:
      products.sort((a, b) => {
        if (a.title < b.title) {return -1;}
        if (a.title > b.title) {return 1;}
        return 0;
      } )
      return
    default:
      return products
    }
  }

  getLocalStorageProducts() {
    return JSON.parse(localStorage.getItem('products'))
  }

  setLocalStorageProducts( products ) {
    return localStorage.setItem('products', JSON.stringify(products))
  }

}

export const productService = new ProductService()
