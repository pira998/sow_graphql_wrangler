
const { RESTDataSource } = require('apollo-datasource-rest')

class StripeAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://us-central1-shoponwheel-7028e.cloudfunctions.net/'
  }

  async completePaymentWithStripe(amount,currency,token) {
    return this.post(`completePaymentWithStripe`,JSON.stringify({amount,currency,token}))
  }

  // async createStripe(email,id){
  //   return this.post(`createStripe`,JSON.stringify({email,id}))
  // }
}

module.exports = StripeAPI
