const { RESTDataSource } = require('apollo-datasource-rest')

class ProductsAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://us-central1-shoponwheel-7028e.cloudfunctions.net/'
  }

  async getProducts() {
    return this.get(`products`)
  }

  async createProducts(email,id){
    return this.post(`createProducts`,JSON.stringify({email,id}))
  }
}

module.exports = ProductsAPI
