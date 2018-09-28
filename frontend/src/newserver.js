import { graphql, buildSchema } from 'graphql'

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => 'Hello world im graphy!'
}

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello }', root).then(res => console.log(response))

