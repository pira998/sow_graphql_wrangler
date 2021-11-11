const { RESTDataSource } = require('apollo-datasource-rest')

class CategoryAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://us-central1-shoponwheel-7028e.cloudfunctions.net/'
  }

  async getCategory() {
    return this.get(`catagories`)
  }

//   async createCategory(email,id){
//     return this.post(`createCategory`,JSON.stringify({email,id}))
//   }
}

module.exports = CategoryAPI
