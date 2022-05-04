/**
 * Mocking client-server processing
 */
const _products = [
  { 'id': 1, 'title': 'iPhone', 'price': 500.01, 'inventory': 2 },
  { 'id': 2, 'title': 'iPad', 'price': 1200.00, 'inventory': 10 },
  { 'id': 3, 'title': 'Macbook Pro 13"', 'price': 2499.00, 'inventory': 10 }
]

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 1500)
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver)
        ? cb()
        : errorCb()
    }, 100)
  }
}