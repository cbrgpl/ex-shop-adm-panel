import { arrayUtils } from 'js_utils'

const randomTime = () => 1500 + Math.random() * 3000
const promisedResult = ( result ) => (
  new Promise(( resolve ) => {
    setTimeout(() => {
      resolve(result)
    }, randomTime() );
  })
)
class Backend {
  remove(id) {
    const products = this.getLocalStorageProducts()

    arrayUtils.remove(products, ( product ) => product.id === id  )

    this.setLocalStorageProducts(products)
    return promisedResult('success')
  }

  add( product ) {
    const products = this.getLocalStorageProducts() || []

    product.id = this.getProductId(products)

    products.push(product)

    this.setLocalStorageProducts(products)
    return promisedResult( product )
  }

  getProductId( products ) {
    return products.length === 0 ? 0 : products[products.length - 1].id + 1
  }


  get( sortMode = 'По умолчанию' ) {
    const products = this.getLocalStorageProducts()

    this.sortProducts(products, sortMode)

    return promisedResult(products)
  }

  sortProducts( products, sortMode) {
    switch(sortMode) {
    case 'Цена - убывание':
      products.sort(( a, b ) => a.price + b.price)
      return
    case 'Цена - убывание':
      products.sort(( a, b ) => a.price - b.price)
      return
    case 'Наименование':
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

export const backend = new Backend()
