const { UserList,MovieList} = require('./data');
const _ = require('lodash');

// context stores the global information about the request and response that is accessible to all the resolvers.

const resolvers = {
    Query: {
        users: (parent,args,context,info) => {
            console.log(context);
            // console.log(parent);
            return UserList;
        },
        getspecificuser: (parent, args,context,info) => {
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
        favoriteMovies:(parent)=>{
            // console.log(parent);
            return _.filter(MovieList,{isInTheaters:true})
        }
    },
    Mutation:{
        createUser:(parent,args)=>{
            const user = args.input;
            const lastId = UserList[UserList.length-1].id;
            user.id = lastId+1;
            UserList.push(user);
            return user;
        },
        updateUser:(parent,args)=>{
            const {id,newUsername} = args.input;
            let userUpdated;
            UserList.forEach((user)=>{
                if(user.id===Number(id)){
                    user.name = newUsername;
                    userUpdated = user;
                }
            });
            return userUpdated;
        },
        deleteUser:(parent,args)=>{
            const id = args.id;
            _.remove(UserList,{id:Number(id)});
            return "user with id "+id+" deleted successfully";
        }
    }
};

module.exports = { resolvers };