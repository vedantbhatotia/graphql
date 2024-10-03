const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        users: [User!]!,
        getspecificuser(id: ID!): User!,
        movies:[Movie!]!,
        getspecificmovie(name: String!): Movie!,
    }
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        Nationality: Nationality!
        friends: [User],
        favoriteMovies: [Movie]
    }
    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }
    enum Nationality{
        IND
        USA
        CAN
        AUS
        ITA
        SPA
    }
`;

module.exports = { typeDefs };
