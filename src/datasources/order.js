const { RESTDataSource } = require('apollo-datasource-rest')

class OrderAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://us-central1-shoponwheel-7028e.cloudfunctions.net/'
  }

  async getOrder() {
    return this.get(`orders`)
  }

  async createOrder({
      items,
      vendorId,
      customerId,
      deliveryCharge,
      discount,
      paymentMethod,
      subTotal,
      totalCount,
      totalPrice,
  }){
    return this.post(`createOrder`,JSON.stringify({
      items,
      vendorId,
      customerId,
      deliveryCharge,
      discount,
      paymentMethod,
      subTotal,
      totalCount,
      totalPrice,}))
  }
}

module.exports = OrderAPI
