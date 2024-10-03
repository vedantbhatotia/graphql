const { UserList,MovieList} = require('./data');
const _ = require('lodash');

const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },
        getspecificuser: (parent, args) => {
            const id = args.id;
            const result = _.find(UserList,{id:Number(id)});
            return result;
        },
        movies:()=>{
            return MovieList
        },
        getspecificmovie:(parent,args)=>{
            const name = args.name;
            const result = _.find(MovieList,{name});
            return result;
        }
    },
    User:{
        favoriteMovies:()=>{
            return _.filter(MovieList,{isInTheaters:true})
        }
    }
};

module.exports = { resolvers };