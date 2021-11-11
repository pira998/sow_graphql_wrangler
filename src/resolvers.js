module.exports = {

  Mutation:{
    update:async(_source,{username,id},{dataSources})=>{
        return dataSources.userAPI.update(username,id)
    },
    updateUserMobile:async(_source,{mobile,id},{dataSources})=>{
        return dataSources.userAPI.updateUserMobile(mobile,id)
    },
    completePaymentWithStripe:async(_source,{amount,currency,token},{dataSources})=>{
        return dataSources.stripeAPI.completePaymentWithStripe(amount,currency,token)
    },
    updateUserProfile:async(_source,_arg,{dataSources})=>{
        return dataSources.userAPI.updateUserProfile({
          ..._arg.input
        })
    },
    createRequest:async(_source,_arg,{dataSources})=>{
        return dataSources.requestAPI.createRequest({
          ..._arg.input
        })
    },
    createOrder:async(_source,_arg,{dataSources})=>{
        return dataSources.orderAPI.createOrder({
          ..._arg.input
        })
    },
    
  },


  Query: {
    users: async (_source, _arg, { dataSources }) => {
      return dataSources.userAPI.getUser()
    },
    vendors: async (_source, _arg, { dataSources }) => {
      return dataSources.vendorAPI.getVendor()
    },
    products: async (_source, _arg, { dataSources }) => {
      return dataSources.productsAPI.getProducts()
    },
    categories: async (_source, _arg, { dataSources }) => {
      return dataSources.categoryAPI.getCategory()
    },
    orders: async (_source, _arg, { dataSources }) => {
      return dataSources.orderAPI.getOrder()
    },
    user:async (_source,{id},{dataSources})=>{
      return dataSources.userAPI.getUserById(id)
    }
  },
}

// module.exports = {
//   Query: {
//     users: () => {
//       return 1
//     },
//   },
// }
