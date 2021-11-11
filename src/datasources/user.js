const { RESTDataSource } = require('apollo-datasource-rest')

class UserAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://us-central1-shoponwheel-7028e.cloudfunctions.net/'
  }

  async getUser() {
    return this.get(`users`)
  }

  async updateUserMobile(mobile,id){
    return this.post(`updateUserMobile`,JSON.stringify({mobile,id}))
  }
  async update(username,id){
    return this.post(`update`,JSON.stringify({username,id}))
  }
  async updateUserProfile({mobile,username,address,language,paymentMethod,lastname,cards,id,location}){
    return this.post(`updateUserProfile`,JSON.stringify({mobile,username,address,language,paymentMethod,lastname,cards,id,location}))
  }
  async getUserById(id){
    return this.post(`getUserById`,JSON.stringify({id}))
  }


}

module.exports = UserAPI

