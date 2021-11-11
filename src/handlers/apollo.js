const { ApolloServer } = require('apollo-server-cloudflare')
const { graphqlCloudflare } = require('apollo-server-cloudflare/dist/cloudflareApollo')
const KVCache = require('../kv-cache')
const UserAPI = require('../datasources/user')
const VendorAPI = require('../datasources/vendor')
const ProductsAPI = require('../datasources/products')
const CategoryAPI = require('../datasources/category')
const StripeAPI = require('../datasources/stripe')
const OrderAPI = require('../datasources/order')
const RequestAPI = require('../datasources/request')

const resolvers = require('../resolvers')
const typeDefs = require('../schema')
// const {http} = require("http");
// const {express} = require("express")
// const PORT = 5000


// var app = express()


const dataSources = () => ({
  userAPI: new UserAPI(),
  productsAPI : new ProductsAPI(),
  vendorAPI: new VendorAPI(),
  categoryAPI: new CategoryAPI(),
  stripeAPI:new StripeAPI(),
  orderAPI:new OrderAPI(),
  requestAPI:new RequestAPI()

})
const kvCache = { cache: new KVCache() }

const createServer = graphQLOptions =>
  new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    dataSources,
    ...(graphQLOptions.kvCache ? kvCache : {}),
  })

const handler = (request, graphQLOptions) => {
  const server = createServer(graphQLOptions)
  return graphqlCloudflare(() => server.createGraphQLServerOptions(request))(request)
}



module.exports = handler
