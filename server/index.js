const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const AuthPayload = require('./resolvers/AuthPayload')

const resolvers = {
  Query,
  Mutation,
  AuthPayload
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: './generated/prisma.graphql',
      endpoint: process.env.ENDPOINT, // prisma.yml
      secret: process.env.SECRET, // prisma.yml
      debug: true
    })
  })
})

server.start(() => {
  console.log('Server is running on http://localhost:4000')
})
