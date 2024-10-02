const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        users: [User!]!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
`;

module.exports = { typeDefs };
