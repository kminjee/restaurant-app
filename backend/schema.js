import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers'

const typeDefs = `
    type User {
        id: ID!
        name: String!
        age: Int!
        gender: String!
    }
    type Query {
        allUser: [User]
        getUser(id: ID!): User
    }

    input UserInput {
        name: String!
        age: Int!
        gender: String!
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: ID!, input: UserInput): User
        deleteUser(id: ID!): User
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;