const { RESTDataSource } = require('apollo-datasource-rest')

class RequestAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://us-central1-shoponwheel-7028e.cloudfunctions.net/'
  }

  async getRequest() {
    return this.get(`requests`)
  }

  async createRequest({vendorId,customerId,productId}){
    return this.post(`createRequest`,JSON.stringify({vendorId,customerId,productId}))
  }
}

module.exports = RequestAPI
