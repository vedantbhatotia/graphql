const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./typedefs'); 
const { resolvers } = require('./resolvers'); 

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({req})=>{
        return {req}
    }
});

server.listen().then(({ url }) => {
    console.log(`Server is running on ${url}`);
});
