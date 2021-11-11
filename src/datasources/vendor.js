const { RESTDataSource } = require('apollo-datasource-rest')

class VendorAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://us-central1-shoponwheel-7028e.cloudfunctions.net/'
  }

  async getVendor() {
    return this.get(`vendors`)
  }

//   async createVendor(email,id){
//     return this.post(`createVendor`,JSON.stringify({email,id}))
//   }
}

module.exports = VendorAPI
