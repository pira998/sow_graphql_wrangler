const { gql } = require('apollo-server-cloudflare')
// const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar Date
  input ProfileInput {
    address:AddressInput!,
    cards:[CardInput],
    language:String!,
    lastname:String!,
    mobile:String!,
    paymentMethod:String!,
    username:String!,
    id:ID!,
    location:LocationInput!,
   
  }
  input LocationInput{
    Latitude: Float,
    Longitude: Float
  }

  input AddressInput {
    city:String!,
    country:String!,
    houseNo:String!,
    street:String!,
    zip:String!,

  }
  input CardInput {
     cardNumber:String!,
    ccv:String!,
    expiration:String!,
    holderName:String!,
  }
  input RequestInput{
    vendorId:ID!,
    customerId:ID!,
    productId:ID!,

  }
  
  input ItemInput {
    product:ID!,
    count:Int!,
  }

  input OrderInput {
    items:[ItemInput],
    vendorId:ID,
    customerId:ID,
    deliveryCharge:Float,
    discount:Float,
    paymentMethod:String,
    subTotal:Float,
    totalCount:Int,
    totalPrice:Float,
  }

  type Address {
    city:String!,
    country:String!,
    houseNo:String!,
    street:String!,
    zip:String!,
  }

  type Card {
    cardNumber:String!,
    ccv:String!,
    expiration:String!,
    holderName:String!,
  }
  type User {
    id: ID!,
    email: String!,
    address:Address!,
    cards:[Card],
    language:String!,
    lastname:String!,
    mobile:String!,
    paymentMethod:String!,
    username:String!,
    createAt:Date!,
    location:Location!,


  }


  type Vendor {
    id:ID!,
    createAt:Date!,
    email:String!,
    duration:String!,
    location:Location!,
    name:String!,
    priceRating:String!,
    courier:Courier!,
    rating:Float!,
    registrationNumber:String!
    available:Boolean!,
    address:Address!,
  }

type Location {
  Latitude: Float,
  Longitude: Float
}

  type Courier {
    avatar:String!,
    name:String!
  }

  type Product {
    id:ID!,
    calories:Int!,
    categories:[Category]!,
    description:String!,
    menuId:Int!,
    name:String!,
    photo:String!,
    price:Int!,
    vendorId:String!,
    createAt:Date!,

    
    

  }

  type Category {
    icon:String!,
    id:ID!,
    name:String!, 
  }


  type Mutation {
    createUser(email:String!,id:ID!):User,
    completePaymentWithStripe(amount:Int!,currency:String!,token:String!):String,
    updateUserMobile(mobile:String!,id:ID!):String,
    updateUserProfile(input:ProfileInput!):String,
    update(username:String!,id:ID!):String,
    createRequest(input:RequestInput!):Request!,
    createOrder(input:OrderInput!):Order!,

  }
  # input ProfileData {
  #   mobile:String!,
  #   username:String!, 
  #   address:Address! , 
  #   id:ID!
  # }

  type Transaction {
    amount:Int!,
    currency:String!,
    # token:String!
  }

  type Query {
    users: [User],
    vendors:[Vendor],
    products:[Product],
    categories:[Category],
    orders:[Order],
    requests:[Request]!,
    user(id:ID!) :User!,

  }

  type Request {
    id:ID!,
    productId:ID!,
    vendorId:ID!,
    customerId:ID!,
  }

  type Order {
    id:ID!,
    items:[Item]!,
    totalPrice:Float!,
    subTotal:Float!,
    discount:Float!,
    deliveryCharge:Float!,
    paymentMethod:String!,
    totalCount:Int!,
    transactionId:ID!,
    status:String!,
    createAt:Date!,
    vendorId:ID!,
    customerId:ID!,

  },
  type Item {
    product:ID!,
    count:Int!,
  }

`
